/**
 * blaze: ordered bootstrap of the recovered Maker b6d354e view.
 * Keep this sequence: imports expose live bindings; these calls perform effects.
 */
import { initializeDemoGuards } from "./blaze/demo-guards.js";
import { initializePreviewBridge } from "./blaze/preview-bridge.js";
import { initializeGameCatalog } from "./blaze/game-catalog.js";
import { initializeElementAdapter } from "./blaze/element-adapter.js";
import { initializeAuthentication } from "./blaze/authentication.js";
import { initializeGameSearch } from "./blaze/game-search.js";
import { initializeGamePlayer } from "./blaze/game-player.js";
import { initializeIdentityVerification } from "./blaze/identity-verification.js";
import { initializeBetHistory } from "./blaze/bet-history.js";
import { initializeAccountSettings } from "./blaze/account-settings.js";
import { initializeProviders } from "./blaze/providers.js";
import { initializeStatistics } from "./blaze/statistics.js";
import { initializeHelpCenter } from "./blaze/help-center.js";
import { initializeWallet } from "./blaze/wallet.js";
import { initializeLobbyController } from "./blaze/lobby-controller.js";
import { initializeBrandTheme } from "./blaze/brand-theme.js";
import { initializeRuntime } from "./blaze/runtime.js";
initializeDemoGuards();
initializePreviewBridge();
initializeGameCatalog();
initializeElementAdapter();
initializeAuthentication();
initializeGameSearch();
initializeGamePlayer();
initializeIdentityVerification();
initializeBetHistory();
initializeAccountSettings();
initializeProviders();
initializeStatistics();
initializeHelpCenter();
initializeWallet();
initializeLobbyController();
initializeBrandTheme();
initializeRuntime();
