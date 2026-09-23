// Mobile nav
const toggle = document.getElementById('nav-toggle');
const mobileNav = document.getElementById('mobile-nav');
if (toggle && mobileNav) {
  toggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('hidden');
    toggle.setAttribute('aria-expanded', String(!open));
  });
  mobileNav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => mobileNav.classList.add('hidden')));
}

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
document.querySelectorAll('.gallery-item').forEach((btn) => {
  btn.addEventListener('click', () => {
    lightboxImg.src = btn.dataset.full;
    lightbox.classList.remove('hidden');
    lightbox.classList.add('flex');
  });
});
const closeLb = () => {
  lightbox.classList.add('hidden');
  lightbox.classList.remove('flex');
  lightboxImg.src = '';
};
document.getElementById('lightbox-close').addEventListener('click', closeLb);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLb(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLb(); });

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('section h2, .card, .review, .gallery-item').forEach((el) => {
  el.classList.add('reveal');
  io.observe(el);
});
