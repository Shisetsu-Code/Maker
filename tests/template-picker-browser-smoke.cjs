// Compatibility entry point. The maintained suite uses this project's Playwright.
import("./browser/run.mjs").catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
