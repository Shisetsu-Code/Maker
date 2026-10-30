(function () {
  window.__demoAssetURL = function (value) {
    if (typeof value !== 'string' || !/^(?:https?:)?\/\//i.test(value)) return value;
    try {
      var url = new URL(value,location.href);
      if(url.origin===new URL(location.href).origin)return url.pathname+url.search;
      return window.__demoRecoveredAssets[url.origin + url.pathname] || '/muestra/imagen-no-disponible.svg';
    } catch { return '/muestra/imagen-no-disponible.svg'; }
  };
})();
