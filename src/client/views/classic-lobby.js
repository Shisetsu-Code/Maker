/**
 * classic-lobby: ordered bootstrap of the recovered Maker b6d354e view.
 * Keep this sequence: imports expose live bindings; these calls perform effects.
 */
import { initializeDemoGuards } from "./classic-lobby/demo-guards.js";
import { initializeGameCatalog } from "./classic-lobby/game-catalog.js";
import { initializeDemoServices } from "./classic-lobby/demo-services.js";
import { initializeBrandLoader } from "./classic-lobby/brand-loader.js";
import { initializeDemoActions } from "./classic-lobby/demo-actions.js";
import { initializeLegacySupportChat } from "./classic-lobby/legacy-support-chat.js";
import { initializeGameSearch } from "./classic-lobby/game-search.js";
import { initializeAccountSecurity } from "./classic-lobby/account-security.js";
import { initializeGameCards } from "./classic-lobby/game-cards.js";
import { initializeAccountHelpers } from "./classic-lobby/account-helpers.js";
import { initializeGamePreferences } from "./classic-lobby/game-preferences.js";
import { initializeMobileLobby } from "./classic-lobby/mobile-lobby.js";
import { initializeDesktopLobby } from "./classic-lobby/desktop-lobby.js";
import { initializeSupportChat } from "./classic-lobby/support-chat.js";
import { initializeLobbyController } from "./classic-lobby/lobby-controller.js";
import { initializeDemoWinners } from "./classic-lobby/demo-winners.js";
import { initializeBrandTheme } from "./classic-lobby/brand-theme.js";
import { initializePreviewBridge } from "./classic-lobby/preview-bridge.js";
import { initializeRuntime } from "./classic-lobby/runtime.js";
initializeDemoGuards();
initializeGameCatalog();
initializeDemoServices();
initializeBrandLoader();
initializeDemoActions();
initializeLegacySupportChat();
initializeGameSearch();
initializeAccountSecurity();
initializeGameCards();
initializeAccountHelpers();
initializeGamePreferences();
initializeMobileLobby();
initializeDesktopLobby();
initializeSupportChat();
initializeLobbyController();
initializeDemoWinners();
initializeBrandTheme();
initializePreviewBridge();
initializeRuntime();
