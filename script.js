const menuButton = document.querySelector('.menu-toggle');
const globalNav = document.querySelector('.global-nav');
menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
  globalNav.classList.toggle('menu-open', !isOpen);
});
document.querySelectorAll('.global-links a').forEach((link) => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menú');
  globalNav.classList.remove('menu-open');
}));

