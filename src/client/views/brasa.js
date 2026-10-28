/**
 * brasa: ordered bootstrap of the recovered Maker b6d354e view.
 * Keep this sequence: imports expose live bindings; these calls perform effects.
 */
import { initializeDemoGuards } from "./brasa/demo-guards.js";
import { initializeColors } from "./brasa/colors.js";
import { initializePreviewBridge } from "./brasa/preview-bridge.js";
import { initializeElementAdapter } from "./brasa/element-adapter.js";
import { initializeGameCatalog } from "./brasa/game-catalog.js";
import { initializeLobbyController } from "./brasa/lobby-controller.js";
import { initializeRendering } from "./brasa/rendering.js";
import { initializeBrandTheme } from "./brasa/brand-theme.js";
import { initializeRuntime } from "./brasa/runtime.js";
initializeDemoGuards();
initializeColors();
initializePreviewBridge();
initializeElementAdapter();
initializeGameCatalog();
initializeLobbyController();
initializeRendering();
initializeBrandTheme();
initializeRuntime();
