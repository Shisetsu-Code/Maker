// Compatibility entrypoint; all browser coverage uses the shared, portable runner.
import('./browser/run.mjs').catch(error => {
  console.error(error);
  process.exitCode = 1;
});
