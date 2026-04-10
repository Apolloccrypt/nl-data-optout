'use strict';
(function () {
  const KEY = 'optout-theme';
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-bs-theme', theme);
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.innerHTML = theme === 'dark'
        ? '<i class="bi bi-sun"></i>'
        : '<i class="bi bi-moon"></i>';
      btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
  }

  function saved() {
    return localStorage.getItem(KEY);
  }

  function preferred() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  const initial = saved() || preferred();

  // Apply immediately (before render) to prevent flash
  applyTheme(initial);

  // Re-apply after DOM ready to sync button icon/title
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(root.getAttribute('data-bs-theme') || initial);
  });

  window.toggleTheme = function () {
    const current = root.getAttribute('data-bs-theme') || 'light';
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(KEY, next);
    applyTheme(next);
  };
})();
