(() => {
  const key = 'portfolio-theme';
  const toggle = document.querySelector('.theme-toggle');
  if (!toggle) return;
  const sync = () => {
    const gotham = document.documentElement.dataset.theme === 'gotham';
    toggle.setAttribute('aria-pressed', String(gotham));
    toggle.setAttribute('aria-label', gotham ? 'Switch to daylight theme' : 'Switch to Gotham theme');
    toggle.innerHTML = gotham ? '<span aria-hidden="true">☼</span> Daylight' : '<span aria-hidden="true">◐</span> Gotham';
  };
  toggle.addEventListener('click', () => {
    if (document.documentElement.dataset.theme === 'gotham') { delete document.documentElement.dataset.theme; localStorage.setItem(key, 'daylight'); }
    else { document.documentElement.dataset.theme = 'gotham'; localStorage.setItem(key, 'gotham'); }
    sync();
  });
  document.addEventListener('pointermove', (event) => {
    if (document.documentElement.dataset.theme !== 'gotham') return;
    document.documentElement.style.setProperty('--spotlight-x', `${event.clientX}px`);
    document.documentElement.style.setProperty('--spotlight-y', `${event.clientY}px`);
  }, { passive: true });
  sync();
})();
