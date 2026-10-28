/**
 * Browser entry for the recovered Maker editor. Initialization order is intentional:
 * resolve the socio namespace, mount brand controls/previews, then attach tours and shell.
 */
import { initializeSocioSession } from "../editor/session.js";
import { initializeBrandEditor } from "../editor/brand-editor.js";
import { initializeSocioShell } from "../editor/socio-shell.js";

initializeSocioSession();
initializeBrandEditor();
initializeSocioShell();
