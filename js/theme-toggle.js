(function () {
  var KEY = 'tree-site-theme';
  function apply(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(KEY, theme);
    } catch (e) {}
  }
  function init() {
    var saved = null;
    try {
      saved = localStorage.getItem(KEY);
    } catch (e) {}
    var prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    apply(saved || (prefersDark ? 'dark' : 'light'));
  }
  window.toggleTreeTheme = function () {
    var cur = document.documentElement.getAttribute('data-theme') || 'light';
    apply(cur === 'dark' ? 'light' : 'dark');
  };
  init();
})();
