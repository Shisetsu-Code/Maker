import globals from "globals";

export default [
  {
    ignores: [
      'public/muestra/socio.js', 'public/muestra/socio-lobby.js',
      'public/muestra/socio-panel.js', 'public/muestra/azul.js',
      'public/muestra/blaze.js', 'public/muestra/brasa.js',
    ],
  },
  {
    files: ["src/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.worker,
    },
    rules: { "no-undef": "error", "no-debugger": "error" },
  },
  {
    files: [
      "src/client/**/*.js",
      "public/muestra/**/*.js",
      "public/muestra/**/*.mjs",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    rules: { "no-undef": "error", "no-debugger": "error" },
  },
  {
    files: ["scripts/**/*.mjs", "tools/reconstruction/**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.node,
    },
    rules: { "no-undef": "error", "no-debugger": "error" },
  },
];
