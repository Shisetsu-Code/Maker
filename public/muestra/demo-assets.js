(function () {
  window.__demoAssetURL = function (value) {
    if (typeof value !== 'string' || !/^https?:\/\//i.test(value)) return value;
    try {
      var url = new URL(value,location.href);
      return window.__demoRecoveredAssets[url.origin + url.pathname] || value;
    } catch { return value; }
  };
})();
