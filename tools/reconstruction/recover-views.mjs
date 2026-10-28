/**
 * One-time, auditable recovery of the application code in Maker's original views.
 * Input is an explicitly supplied copy of the adapted public/muestra directory,
 * never a HAR. The normal build consumes the recovered sources, not this tool.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { createHash } from "node:crypto";
import path from "node:path";
import { parse } from "@babel/parser";
import traverse from "@babel/traverse";
import generate from "@babel/generator";
import * as types from "@babel/types";
import { format } from "prettier";

const input = process.argv[2];
if (!input)
  throw new Error(
    "Usage: node tools/reconstruction/recover-views.mjs <reference-public/muestra> | --modularize-existing",
  );

const recipes = {
  "socio-lobby": {
    module: "classic-lobby",
    react: {
      R: "React",
      So: "ReactDOMClient",
      ko: "ReactDOM",
      z: "JSXRuntime",
    },
    factories: { ho: "React", Oo: "JSXRuntime" },
    zod: { vi: "string", Gi: "object" },
  },
  "socio-panel": {
    module: "panel",
    react: { V: "React", Ro: "ReactDOMClient", q: "JSXRuntime" },
    factories: { Fo: "ReactDOM" },
    zod: {
      z: "string",
      ua: "number",
      ma: "boolean",
      ga: "bigint",
      va: "unknown",
      Sa: "array",
      wa: "object",
      Ea: "union",
      Aa: "record",
      Ma: "enum",
      Pa: "literal",
    },
  },
  azul: {
    module: "azul",
    react: { O: "React", L: "JSXRuntime", Xt: "ReactDOMClient" },
    factories: {},
    zod: {},
  },
  blaze: {
    module: "blaze",
    react: { C: "React", F: "JSXRuntime", er: "ReactDOMClient" },
    factories: {},
    zod: {},
  },
  brasa: {
    module: "brasa",
    react: { S: "React", N: "JSXRuntime", st: "ReactDOMClient" },
    factories: {},
    zod: {},
  },
};

const packages = {
  React: "react",
  ReactDOM: "react-dom",
  ReactDOMClient: "react-dom/client",
  JSXRuntime: "react/jsx-runtime",
};
const sha256 = (value) => createHash("sha256").update(value).digest("hex");

if (input === "--modularize-existing") {
  await modularizeViews();
  process.exit(0);
}

function literal(node) {
  if (
    types.isStringLiteral(node) ||
    types.isNumericLiteral(node) ||
    types.isBooleanLiteral(node)
  )
    return node.value;
  if (types.isNullLiteral(node)) return null;
  if (types.isTemplateLiteral(node) && node.expressions.length === 0)
    return node.quasis[0].value.cooked;
  if (types.isArrayExpression(node)) return node.elements.map(literal);
  if (types.isObjectExpression(node))
    return Object.fromEntries(
      node.properties.map((property) => {
        if (!types.isObjectProperty(property) || property.computed)
          throw new Error("Not static data");
        return [
          types.isIdentifier(property.key)
            ? property.key.name
            : literal(property.key),
          literal(property.value),
        ];
      }),
    );
  if (
    types.isUnaryExpression(node) &&
    ["-", "+", "!"].includes(node.operator)
  ) {
    const value = literal(node.argument);
    return node.operator === "-"
      ? -value
      : node.operator === "+"
        ? +value
        : !value;
  }
  throw new Error("Not static data");
}

await mkdir("src/client/views", { recursive: true });
await mkdir("src/client/entries", { recursive: true });
await mkdir("src/client/catalogs", { recursive: true });
const provenance = [];

for (const [name, recipe] of Object.entries(recipes)) {
  const source = await readFile(path.join(input, `${name}.js`), "utf8");
  const captured = parse(source, { sourceType: "script" });
  const iife = captured.program.body[0]?.expression?.callee;
  if (!types.isFunctionExpression(iife))
    throw new Error(`${name}: unexpected source structure`);
  const body = iife.body.body;
  const vendorGroups = body.filter(
    (node) =>
      types.isVariableDeclaration(node) &&
      node.leadingComments?.some((comment) =>
        comment.value.includes("@license React"),
      ),
  );
  const vendorNames = new Set(
    vendorGroups.flatMap((node) =>
      node.declarations.map((declaration) => declaration.id.name),
    ),
  );
  const zodEnd = Object.keys(recipe.zod).length
    ? body.find(
        (node) =>
          types.isExpressionStatement(node) &&
          source.slice(node.start, node.end).includes("jitless:!0"),
      )?.end
    : 0;
  if (Object.keys(recipe.zod).length && !zodEnd)
    throw new Error(`${name}: Zod boundary not found`);
  const ast = types.file(types.program(body));
  let scope;
  traverse(ast, {
    Program(program) {
      scope = program.scope;
      program.stop();
    },
  });

  // Validate every reference leaving a removed vendor group. Silent omissions
  // would otherwise surface only when a less common dialog is opened.
  for (const symbol of vendorNames) {
    const refs =
      scope
        .getBinding(symbol)
        ?.referencePaths.filter(
          (reference) =>
            !vendorGroups.some(
              (group) =>
                reference.node.start >= group.start &&
                reference.node.end <= group.end,
            ),
        ) ?? [];
    if (refs.length && !recipe.react[symbol] && !recipe.factories[symbol])
      throw new Error(`${name}: unmapped vendor reference ${symbol}`);
  }
  const externalZod = Object.entries(scope.bindings).filter(
    ([, binding]) =>
      binding.path.node.start >= body[1].start &&
      binding.path.node.start < zodEnd &&
      binding.referencePaths.some(
        (reference) => reference.node.start >= zodEnd,
      ),
  );
  for (const [symbol] of externalZod)
    if (!recipe.zod[symbol])
      throw new Error(`${name}: unmapped Zod reference ${symbol}`);

  // The recovered application used the one-argument record shorthand. Express
  // its string-key semantics explicitly in the current public Zod API.
  for (const [symbol, exported] of Object.entries(recipe.zod)) {
    if (exported === "record")
      for (const reference of scope.getBinding(symbol).referencePaths) {
        if (reference.node.start < zodEnd) continue;
        const call = reference.parentPath;
        if (call.isCallExpression() && call.node.arguments.length === 1)
          call.node.arguments.unshift(
            types.callExpression(types.identifier("zodString"), []),
          );
      }
    scope.rename(symbol, `zod${exported[0].toUpperCase()}${exported.slice(1)}`);
  }
  for (const [symbol, replacement] of Object.entries(recipe.factories)) {
    for (const reference of scope.getBinding(symbol).referencePaths) {
      if (
        vendorGroups.some(
          (group) =>
            reference.node.start >= group.start &&
            reference.node.end <= group.end,
        )
      )
        continue;
      const call = reference.parentPath;
      if (!call.isCallExpression() || call.node.arguments.length)
        throw new Error(`${name}: unexpected factory use ${symbol}`);
      call.replaceWith(types.identifier(replacement));
    }
  }
  for (const [symbol, replacement] of Object.entries(recipe.react))
    scope.rename(symbol, replacement);

  ast.program.body = body.filter(
    (node, index) =>
      !vendorGroups.includes(node) &&
      !(zodEnd && index > 0 && node.end <= zodEnd),
  );
  const imports = [
    ...new Set([
      ...Object.values(recipe.react),
      ...Object.values(recipe.factories),
    ]),
  ].map((symbol) =>
    types.importDeclaration(
      [types.importNamespaceSpecifier(types.identifier(symbol))],
      types.stringLiteral(packages[symbol]),
    ),
  );
  if (Object.keys(recipe.zod).length) {
    imports.push(
      types.importDeclaration(
        [
          ...[...new Set(Object.values(recipe.zod))].map((exported) =>
            types.importSpecifier(
              types.identifier(
                `zod${exported[0].toUpperCase()}${exported.slice(1)}`,
              ),
              types.identifier(exported),
            ),
          ),
          types.importSpecifier(
            types.identifier("configureZod"),
            types.identifier("config"),
          ),
        ],
        types.stringLiteral("zod"),
      ),
    );
    ast.program.body.unshift(
      types.expressionStatement(
        types.callExpression(types.identifier("configureZod"), [
          types.objectExpression([
            types.objectProperty(
              types.identifier("jitless"),
              types.booleanLiteral(true),
            ),
          ]),
        ]),
      ),
    );
  }

  // Separate sizeable literal catalogs from application behavior and deduplicate
  // identical data shared by the classic lobby and Azul. No evaluation is used.
  const catalogs = [];
  for (const statement of ast.program.body) {
    if (!types.isVariableDeclaration(statement)) continue;
    for (const declaration of statement.declarations) {
      if (
        !declaration.init ||
        declaration.init.end - declaration.init.start < 12000
      )
        continue;
      let value;
      try {
        value = literal(declaration.init);
      } catch {
        continue;
      }
      const json = JSON.stringify(value);
      const filename = `catalog-${sha256(json).slice(0, 12)}.json`;
      await writeFile(
        `src/client/catalogs/${filename}`,
        `${JSON.stringify(value, null, 2)}\n`,
      );
      const imported = `${declaration.id.name}Data`;
      imports.push(
        types.importDeclaration(
          [types.importDefaultSpecifier(types.identifier(imported))],
          types.stringLiteral(`../catalogs/${filename}`),
        ),
      );
      declaration.init = types.identifier(imported);
      catalogs.push(filename);
    }
  }
  ast.program.body.unshift(...imports);
  const code = await format(generate(ast, { comments: true }).code, {
    parser: "babel",
  });
  const header = `/**\n * ${name}: application logic recovered from Maker b6d354e.\n * Vendor implementations were removed; imports above/below are maintained via npm.\n * Public routes, DOM structure and demo behavior are preserved.\n */\n`;
  await writeFile(`src/client/views/${recipe.module}.js`, header + code);
  await writeFile(
    `src/client/entries/${name}.js`,
    `import '../views/${recipe.module}.js';\n`,
  );
  provenance.push({
    entry: name,
    originalSha256: sha256(source),
    source: `src/client/views/${recipe.module}.js`,
    catalogs,
    libraries: [
      ...new Set([
        ...Object.values(recipe.react),
        ...Object.values(recipe.factories),
      ]),
    ]
      .map((symbol) => packages[symbol])
      .concat(Object.keys(recipe.zod).length ? ["zod"] : []),
  });
}
await writeFile(
  "tools/reconstruction/views-provenance.json",
  `${JSON.stringify(provenance, null, 2)}\n`,
);
console.log(
  `Recovered ${provenance.length} application views; all embedded vendor references accounted for.`,
);
await modularizeViews();

/**
 * Semantic module boundaries, expressed in the original recovered bindings.
 * They are not byte/line slices: each boundary owns complete AST statements.
 * Changes to the reference must either satisfy these bindings or fail closed.
 */
function viewModulePlans() {
  return {
    "classic-lobby": {
      sections: [
        ["@start", "demo-guards"],
        ["Na", "game-catalog"],
        ["Co", "demo-services"],
        ["Ao", "brand-loader"],
        ["Ho", "demo-actions"],
        ["cs", "legacy-support-chat"],
        ["ds", "game-search"],
        ["Is", "account-security"],
        ["Js", "game-cards"],
        ["Tc", "account-helpers"],
        ["Zc", "game-preferences"],
        ["xl", "mobile-lobby"],
        ["Al", "desktop-lobby"],
        ["ql", "lobby-sections"],
        ["tu", "support-chat"],
        ["Md", "lobby-controller"],
        ["Bd", "demo-winners"],
        ["Kd", "brand-theme"],
        ["sf", "preview-bridge"],
        ["pf", "runtime"],
      ],
      names: {
        t: "createLazyInitializer",
        n: "createCommonJSFactory",
        r: "createModuleExports",
        Ma: "installDemoGuards",
        eo: "gameCatalog",
        no: "findCatalogGame",
        Co: "refreshDemo",
        wo: "createDemoRouter",
        To: "createUnavailableComponent",
        Eo: "createDemoDatabase",
        Vo: "BrandLoader",
        Ko: "normalizeDemoGameRequest",
        qo: "normalizeDemoGameResponse",
        us: "LegacySupportChat",
        Cc: "GameCard",
        wc: "MemoGameCard",
        Dl: "MobileSectionHeader",
        Ol: "MobileGameSearch",
        kl: "MobileLobbyShell",
        Kl: "DesktopLobby",
        ql: "CategoryDoors",
        Jl: "LazyVisible",
        Yl: "LoadMoreSentinel",
        Xl: "HorizontalGameList",
        Zl: "PromoCard",
        Ql: "AnimatedCents",
        $l: "ValueLabel",
        eu: "SportsCard",
        Tu: "ChatMessages",
        Ku: "ChatComposer",
        gd: "SupportChat",
        X: "parseInlineStyle",
        Z: "mergeStyles",
        Q: "InteractiveElement",
        Id: "PaymentDetails",
        Rd: "ClassicLobbyController",
        Gd: "createDemoWinners",
        rf: "deriveClassicTheme",
        sf: "readPreviewDefaults",
        df: "createPreviewBridge",
        ff: "notifyPreviewReady",
        vf: "ClassicLobbyPreview",
        yf: "mountPreview",
      },
    },
    panel: {
      sections: [
        ["@start", "demo-dialogs"],
        ["zo", "demo-services"],
        ["H", "money-and-phone"],
        ["Bs", "demo-media"],
        ["Js", "activity-ledger"],
        ["Fc", "cashier-rules"],
        ["Sl", "state-schema"],
        ["su", "demo-operations"],
        ["Jd", "demo-api"],
        ["Bp", "cashier-controls"],
        ["Hm", "motion"],
        ["ng", "ui-components"],
        ["Xg", "navigation"],
        ["U_", "referrals"],
        ["fv", "monitoring"],
        ["Zv", "activity-screen"],
        ["Dy", "dashboard"],
        ["sb", "cash-transactions"],
        ["gb", "player-management"],
        ["cx", "staff-management"],
        ["wx", "casino-management"],
        ["jx", "approval-screen"],
        ["Nx", "settings-screen"],
        ["PS", "flyer-library"],
        ["nC", "support-chat"],
        ["AC", "panel-shell"],
        ["MC", "preview-bridge"],
        ["KC", "demo-data"],
        ["ZC", "state-store"],
        ["sw", "dashboard-projection"],
        ["Pw", "runtime"],
      ],
      names: {
        e: "createCommonJSFactory",
        ho: "installDemoGuards",
        ko: "installDemoDialogs",
        Bo: "refreshDemo",
        Vo: "createDemoRouter",
        Ho: "createDemoDatabase",
        H: "formatMoney",
        cs: "parseMoney",
        ls: "formatMoneyInput",
        Yl: "createDemoEnvironment",
        $l: "serializePanelState",
        eu: "parsePanelState",
        Fm: "useCashierControls",
        zm: "useCashierBusy",
        Bm: "useCashierBusyEffect",
        Nh: "PanelMotionController",
        Ih: "usePanelMotion",
        Lh: "MotionBoundary",
        J: "classNames",
        Y: "Icon",
        X: "Button",
        Z: "Notice",
        gg: "Card",
        dg: "Portal",
        mg: "useBodyScrollLock",
        hg: "useEscapeKey",
        C_: "PanelContext",
        w_: "usePanelContext",
        R_: "useNotifications",
        uv: "ReferralCard",
        wv: "MonitoringCard",
        _y: "ActivityScreen",
        $y: "DashboardSummary",
        ab: "DashboardCharts",
        ub: "TransactionHistory",
        pb: "PendingRequests",
        Fb: "NewPlayerForm",
        Lb: "PlayersScreen",
        Rb: "PlayerRow",
        Cx: "StaffManagement",
        Ax: "CasinoManagement",
        jx: "ApprovalsScreen",
        oS: "PhoneNumberEditor",
        pS: "GeneralPhoneSettings",
        vS: "WelcomeBonusSettings",
        jS: "DistributionSettings",
        ZS: "FlyerLibrary",
        QS: "FlyerFolders",
        $S: "FlyerFolder",
        wC: "SupportInbox",
        kC: "SupportConversation",
        jC: "PanelShell",
        MC: "readPreviewDefaults",
        IC: "createPreviewBridge",
        LC: "notifyPreviewReady",
        XC: "createDemoState",
        $C: "createPanelStateStore",
        Nw: "projectPanelState",
        zw: "PanelPreview",
      },
    },
    azul: {
      sections: [
        ["@start", "demo-guards"],
        ["x", "game-catalog"],
        ["Se", "brand-colors"],
        ["bt", "preview-bridge"],
        ["N", "element-adapter"],
        ["Rt", "desktop-layout"],
        ["zt", "desktop-controller"],
        ["Bt", "mobile-layout"],
        ["Vt", "mobile-controller"],
        ["Wt", "rendering"],
        ["tn", "theme"],
        ["nr", "runtime"],
      ],
      names: {
        b: "installDemoGuards",
        E: "gameCatalog",
        bt: "readPreviewDefaults",
        wt: "createPreviewBridge",
        Tt: "notifyPreviewReady",
        N: "renderContent",
        P: "asArray",
        Dt: "parseInlineStyle",
        I: "resolveStyle",
        kt: "assetConfiguration",
        At: "imageOverrides",
        jt: "setAssetConfiguration",
        Nt: "setImageOverrides",
        Mt: "resolveViewAssetPath",
        F: "resolveViewAsset",
        Ft: "resolveCssAssets",
        It: "resolveAssetStyles",
        Rt: "renderAzulDesktopLayout",
        zt: "AzulDesktopController",
        Bt: "renderAzulMobileLayout",
        Vt: "AzulMobileController",
        Zt: "upsertStyle",
        Qt: "applyCssVariables",
        en: "createPreviewRoot",
        Ln: "getLayoutMode",
        Hn: "applyLayoutStyles",
        Jn: "applyTheme",
        Yn: "applyThemeVariables",
        ur: "updatePreviewState",
        dr: "subscribePreviewState",
        fr: "getPreviewSnapshot",
        pr: "AzulPreview",
        hr: "mountPreview",
        yr: "scheduleIconRefresh",
      },
    },
    blaze: {
      sections: [
        ["@start", "demo-guards"],
        ["w", "preview-bridge"],
        ["oe", "game-catalog"],
        ["ke", "element-adapter"],
        ["Ve", "authentication"],
        ["Ue", "game-search"],
        ["$e", "game-player"],
        ["rt", "identity-verification"],
        ["ct", "bet-history"],
        ["mt", "account-settings"],
        ["yt", "providers"],
        ["St", "statistics"],
        ["Ot", "help-center"],
        ["Nt", "wallet"],
        ["Vt", "lobby-layout"],
        ["Ht", "lobby-controller"],
        ["ln", "brand-theme"],
        ["Jn", "runtime"],
      ],
      names: {
        b: "installDemoGuards",
        ee: "readPreviewDefaults",
        ie: "createPreviewBridge",
        ae: "notifyPreviewReady",
        j: "renderContent",
        M: "asArray",
        Me: "parseInlineStyle",
        P: "resolveStyle",
        Ve: "renderAuthenticationLayout",
        He: "AuthenticationController",
        Ue: "renderGameSearchLayout",
        Qe: "GameSearchController",
        $e: "renderGamePlayerLayout",
        nt: "GamePlayerController",
        rt: "renderIdentityVerificationLayout",
        st: "IdentityVerificationController",
        ct: "renderBetHistoryLayout",
        pt: "BetHistoryController",
        mt: "renderAccountSettingsLayout",
        vt: "AccountSettingsController",
        yt: "renderProvidersLayout",
        xt: "ProvidersController",
        St: "renderStatisticsLayout",
        Dt: "StatisticsController",
        Ot: "renderHelpCenterLayout",
        Mt: "HelpCenterController",
        Nt: "renderWalletLayout",
        Bt: "WalletController",
        Vt: "renderBlazeLobbyLayout",
        cn: "BlazeLobbyController",
        qn: "deriveBlazeTheme",
        tr: "upsertStyle",
        rr: "createPreviewRoot",
        or: "applyTheme",
        lr: "buildBrandProps",
        fr: "updateBrand",
        pr: "subscribeBrand",
        mr: "getBrandSnapshot",
        hr: "BlazePreview",
        _r: "mountPreview",
      },
    },
    brasa: {
      sections: [
        ["@start", "demo-guards"],
        ["C", "colors"],
        ["se", "preview-bridge"],
        ["A", "element-adapter"],
        ["Te", "lobby-layout"],
        ["Ee", "game-catalog"],
        ["et", "lobby-controller"],
        ["tt", "rendering"],
        ["dt", "brand-theme"],
        ["$t", "runtime"],
      ],
      names: {
        b: "installDemoGuards",
        D: "hexToHsl",
        O: "hslToHex",
        le: "readPreviewDefaults",
        fe: "createPreviewBridge",
        pe: "notifyPreviewReady",
        A: "renderContent",
        j: "asArray",
        he: "parseInlineStyle",
        M: "resolveStyle",
        Te: "renderBrasaLobbyLayout",
        et: "BrasaLobbyController",
        ct: "upsertStyle",
        ut: "createPreviewRoot",
        qt: "deriveBrasaTheme",
        en: "applyTheme",
        rn: "buildBrandProps",
        sn: "updateBrand",
        cn: "subscribeBrand",
        ln: "getBrandSnapshot",
        dn: "BrasaPreview",
        pn: "mountPreview",
      },
    },
  };
}

function statementIndex(bindingPath, body) {
  let current = bindingPath;
  while (current.parentPath && !current.parentPath.isProgram())
    current = current.parentPath;
  return body.indexOf(current.node);
}

function initializerName(moduleName) {
  return `initialize${moduleName
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join("")}`;
}

function canonical(node) {
  return generate(node, { comments: false, compact: true, minified: true })
    .code;
}

function variableAssignments(statement) {
  return statement.declarations
    .filter((declaration) => declaration.init)
    .map((declaration) =>
      types.expressionStatement(
        types.assignmentExpression(
          "=",
          types.cloneNode(declaration.id, true),
          types.cloneNode(declaration.init, true),
        ),
      ),
    );
}

async function splitRecoveredView(view, source, plan) {
  const ast = parse(source, { sourceType: "module" });
  let scope;
  traverse(ast, {
    Program(program) {
      scope = program.scope;
      program.stop();
    },
  });
  if (
    ast.program.body.some((statement) => types.isExportDeclaration(statement))
  ) {
    throw new Error(
      `${view}: expected the recovered source, not an already modularized view`,
    );
  }
  const originalBody = ast.program.body;
  const sections = plan.sections.map(([binding, name]) => {
    const found = binding === "@start" ? null : scope.getBinding(binding);
    if (binding !== "@start" && !found)
      throw new Error(`${view}: missing section boundary ${binding}`);
    return {
      name,
      start: found ? statementIndex(found.path, originalBody) : 0,
    };
  });
  if (
    !sections.every(
      (section, index) =>
        index === 0 || section.start > sections[index - 1].start,
    )
  ) {
    throw new Error(
      `${view}: section boundaries are not in their reference order`,
    );
  }
  const ownerByNode = new Map(
    originalBody.map((statement, index) => [
      statement,
      sections.findLast((section) => section.start <= index).name,
    ]),
  );
  if (view === "classic-lobby")
    ownerByNode.set(scope.getBinding("Ko").path.node, "demo-game-request");

  // Rename through lexical bindings, including shorthand properties and captured
  // references. Identically spelled locals in nested scopes are never replaced.
  for (const [before, after] of Object.entries(plan.names)) {
    if (!scope.getBinding(before) || scope.hasBinding(after))
      throw new Error(`${view}: unsafe rename ${before} -> ${after}`);
    scope.rename(before, after);
  }

  if (view === "azul") {
    // Keep the runtime's configurable adapter; the actual path algorithm is also
    // usable by asset validation without a document, window or initialization.
    const resolve = scope.getBinding("resolveViewAsset").path.node;
    const normalize = scope.getBinding("resolveViewAssetPath").path.node;
    resolve.body.body = [
      types.returnStatement(
        types.callExpression(types.identifier("resolveAzulAsset"), [
          types.identifier("e"),
          types.identifier("assetConfiguration"),
          types.identifier("imageOverrides"),
        ]),
      ),
    ];
    normalize.body.body = [
      types.returnStatement(
        types.callExpression(types.identifier("normalizeAzulAssetPath"), [
          types.identifier("e"),
          types.identifier("assetConfiguration"),
        ]),
      ),
    ];
    const declaration = types.importDeclaration(
      [
        types.importSpecifier(
          types.identifier("resolveAzulAsset"),
          types.identifier("resolveAzulAsset"),
        ),
        types.importSpecifier(
          types.identifier("normalizeAzulAssetPath"),
          types.identifier("normalizeAzulAssetPath"),
        ),
      ],
      types.stringLiteral(`./${view}/asset-paths.js`),
    );
    ast.program.body.unshift(declaration);
  }
  scope.crawl();
  const body = ast.program.body;
  const groupForPath = (bindingPath) =>
    ownerByNode.get(body[statementIndex(bindingPath, body)]);
  const modules = new Map(
    [
      ...sections.map((section) => section.name),
      ...(view === "classic-lobby" ? ["demo-game-request"] : []),
    ].map((name) => [
      name,
      {
        name,
        statements: [],
        imports: new Map(),
        exports: new Set(),
        initializer: null,
      },
    ]),
  );
  for (const statement of body)
    if (!types.isImportDeclaration(statement)) {
      const group = ownerByNode.get(statement);
      if (!group)
        throw new Error(`${view}: an application statement has no owner`);
      modules.get(group).statements.push(statement);
    }

  for (const [symbol, binding] of Object.entries(scope.bindings)) {
    const owner = groupForPath(binding.path);
    const imported =
      binding.path.isImportSpecifier() ||
      binding.path.isImportDefaultSpecifier() ||
      binding.path.isImportNamespaceSpecifier();
    if (!owner && !imported)
      throw new Error(`${view}: no declaration owner for ${symbol}`);
    for (const violation of binding.constantViolations) {
      const writer = groupForPath(violation);
      if (writer !== owner)
        throw new Error(
          `${view}: ${writer} writes imported binding ${symbol} owned by ${owner}`,
        );
    }
    const consumers = new Set(binding.referencePaths.map(groupForPath));
    for (const consumer of consumers) {
      if (!consumer)
        throw new Error(`${view}: ${symbol} has an unowned reference`);
      if (!imported && consumer === owner) continue;
      const module = modules.get(consumer);
      if (imported) {
        const declaration = binding.path.parentPath.node;
        let from = declaration.source.value;
        if (from.startsWith(".")) {
          from = path.posix.relative(view, path.posix.normalize(from));
          if (!from.startsWith(".")) from = `./${from}`;
        }
        const list = module.imports.get(from) ?? [];
        list.push(types.cloneNode(binding.path.node, true));
        module.imports.set(from, list);
      } else {
        const from = `./${owner}.js`;
        const list = module.imports.get(from) ?? [];
        list.push(
          types.importSpecifier(
            types.identifier(symbol),
            types.identifier(symbol),
          ),
        );
        module.imports.set(from, list);
        modules.get(owner).exports.add(symbol);
      }
    }
  }
  if (view === "classic-lobby")
    modules.get("demo-game-request").exports.add("normalizeDemoGameRequest");

  const expectedEffects = [];
  const expectedFunctions = new Map();
  for (const statement of body) {
    if (types.isImportDeclaration(statement)) continue;
    if (types.isFunctionDeclaration(statement))
      expectedFunctions.set(statement.id.name, canonical(statement));
    else if (types.isVariableDeclaration(statement))
      expectedEffects.push(...variableAssignments(statement).map(canonical));
    else expectedEffects.push(canonical(statement));
  }

  const rendered = new Map();
  for (const module of modules.values()) {
    const declarations = [];
    const effects = [];
    const ownedBindings = new Set();
    for (const statement of module.statements) {
      if (types.isFunctionDeclaration(statement)) declarations.push(statement);
      else if (types.isVariableDeclaration(statement)) {
        declarations.push(
          types.variableDeclaration(
            statement.kind === "var" ? "var" : "let",
            statement.declarations.map((declaration) => {
              for (const name of Object.keys(
                types.getBindingIdentifiers(declaration.id),
              ))
                ownedBindings.add(name);
              return types.variableDeclarator(
                types.cloneNode(declaration.id, true),
              );
            }),
          ),
        );
        // An uninitialized destructuring declaration is invalid JS. Hoist each
        // binding separately; retain the exact destructuring assignment below.
        const hoisted = declarations.at(-1);
        hoisted.declarations = hoisted.declarations.flatMap((declaration) =>
          Object.keys(types.getBindingIdentifiers(declaration.id)).map((name) =>
            types.variableDeclarator(types.identifier(name)),
          ),
        );
        effects.push(...variableAssignments(statement));
      } else effects.push(statement);
    }
    // No var declared in a loop/block may silently become local to an initializer.
    for (const [name, binding] of Object.entries(scope.bindings)) {
      if (
        groupForPath(binding.path) !== module.name ||
        binding.path.isFunctionDeclaration() ||
        binding.kind === "module"
      )
        continue;
      if (!ownedBindings.has(name))
        throw new Error(
          `${view}/${module.name}: unsupported nested declaration ${name}`,
        );
    }
    if (effects.length) {
      module.initializer = initializerName(module.name);
      if (scope.hasBinding(module.initializer))
        throw new Error(
          `${view}: initializer name collision ${module.initializer}`,
        );
      module.exports.add(module.initializer);
      declarations.push(
        types.functionDeclaration(
          types.identifier(module.initializer),
          [],
          types.blockStatement(effects),
        ),
      );
    }
    const imports = [...module.imports.entries()].map(([from, specifiers]) =>
      types.importDeclaration(specifiers, types.stringLiteral(from)),
    );
    const exports = module.exports.size
      ? [
          types.exportNamedDeclaration(
            null,
            [...module.exports].map((name) =>
              types.exportSpecifier(
                types.identifier(name),
                types.identifier(name),
              ),
            ),
          ),
        ]
      : [];
    const result = types.file(
      types.program([...imports, ...declarations, ...exports]),
    );
    const formatted = await format(generate(result, { comments: true }).code, {
      parser: "babel",
    });
    const header = `/**\n * ${view} / ${module.name}.\n * Recovered from Maker b6d354e; application behavior and retained license notices are preserved.\n * ${effects.length ? "Initialization is explicit; the view entry calls it in the original order." : "Declarations only; importing this module does not start the view."}\n */\n`;
    rendered.set(module.name, header + formatted);
  }

  // Reparse what will actually be written, then reconstruct the execution stream.
  // This catches missing/duplicated statements and formatting/generation errors;
  // it is independent from the imports used to route dependencies between files.
  const actualEffects = [];
  const actualFunctions = new Map();
  for (const module of modules.values()) {
    const parsed = parse(rendered.get(module.name), { sourceType: "module" });
    for (const statement of parsed.program.body) {
      if (!types.isFunctionDeclaration(statement)) continue;
      if (statement.id.name === module.initializer)
        actualEffects.push(...statement.body.body.map(canonical));
      else actualFunctions.set(statement.id.name, canonical(statement));
    }
  }
  if (JSON.stringify(expectedEffects) !== JSON.stringify(actualEffects))
    throw new Error(
      `${view}: module split changed initialization order or expressions`,
    );
  if (
    expectedFunctions.size !== actualFunctions.size ||
    [...expectedFunctions].some(
      ([name, code]) => actualFunctions.get(name) !== code,
    )
  ) {
    throw new Error(`${view}: module split changed a function body`);
  }

  const rootImports = [];
  const rootCalls = [];
  for (const section of sections) {
    const module = modules.get(section.name);
    if (!module.initializer) continue;
    rootImports.push(
      types.importDeclaration(
        [
          types.importSpecifier(
            types.identifier(module.initializer),
            types.identifier(module.initializer),
          ),
        ],
        types.stringLiteral(`./${view}/${module.name}.js`),
      ),
    );
    rootCalls.push(
      types.expressionStatement(
        types.callExpression(types.identifier(module.initializer), []),
      ),
    );
  }
  const entry = await format(
    generate(types.file(types.program([...rootImports, ...rootCalls])), {
      comments: true,
    }).code,
    { parser: "babel" },
  );
  await mkdir(`src/client/views/${view}`, { recursive: true });
  for (const [name, code] of rendered)
    await writeFile(`src/client/views/${view}/${name}.js`, code);
  await writeFile(
    `src/client/views/${view}.js`,
    `/**\n * ${view}: ordered bootstrap of the recovered Maker b6d354e view.\n * Keep this sequence: imports expose live bindings; these calls perform effects.\n */\n${entry}`,
  );
  console.log(
    `${view}: ${modules.size} semantic modules; ${actualEffects.length} initialization statements and ${actualFunctions.size} function bodies preserved.`,
  );
  return {
    view,
    modules: [...modules.keys()],
    statements: actualEffects.length,
    functions: actualFunctions.size,
  };
}

async function modularizeViews() {
  const summaries = [];
  for (const [view, plan] of Object.entries(viewModulePlans())) {
    const source = await readFile(`src/client/views/${view}.js`, "utf8");
    summaries.push(await splitRecoveredView(view, source, plan));
  }
  await writeFile(
    "src/client/views/azul/asset-paths.js",
    await format(
      `/**
 * Pure Azul asset-path rules recovered from Maker b6d354e.
 * No browser globals or preview state are required. The runtime passes its
 * current configuration and image overrides; tooling can use the defaults.
 */
export function normalizeAzulAssetPath(value, configuration = { base: 'azul/', ext: '.webp' }) {
  return configuration.base + value.replace(/\\.png$/i, configuration.ext);
}
export function resolveAzulAsset(value, configuration = { base: 'azul/', ext: '.webp' }, overrides = {}) {
  if (typeof value !== 'string' || !value.startsWith('assets/')) return value;
  const normalized = normalizeAzulAssetPath(value, configuration);
  // The captured Azul logo was never available. Use the captured default brand
  // while retaining the normalized key used by custom logo overrides.
  const fallback = normalized === 'azul/assets/logo.webp'
    ? 'rushybet/rushybet-logo.webp'
    : normalized;
  return overrides[normalized] ?? fallback;
}
`,
      { parser: "babel" },
    ),
  );
  return summaries;
}
