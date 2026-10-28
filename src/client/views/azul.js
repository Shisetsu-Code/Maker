/**
 * azul: ordered bootstrap of the recovered Maker b6d354e view.
 * Keep this sequence: imports expose live bindings; these calls perform effects.
 */
import { initializeDemoGuards } from "./azul/demo-guards.js";
import { initializeGameCatalog } from "./azul/game-catalog.js";
import { initializeBrandColors } from "./azul/brand-colors.js";
import { initializePreviewBridge } from "./azul/preview-bridge.js";
import { initializeElementAdapter } from "./azul/element-adapter.js";
import { initializeDesktopController } from "./azul/desktop-controller.js";
import { initializeMobileController } from "./azul/mobile-controller.js";
import { initializeRendering } from "./azul/rendering.js";
import { initializeTheme } from "./azul/theme.js";
import { initializeRuntime } from "./azul/runtime.js";
initializeDemoGuards();
initializeGameCatalog();
initializeBrandColors();
initializePreviewBridge();
initializeElementAdapter();
initializeDesktopController();
initializeMobileController();
initializeRendering();
initializeTheme();
initializeRuntime();
