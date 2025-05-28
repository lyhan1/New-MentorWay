
document.addEventListener('DOMContentLoaded', () => {
  const els = document.querySelectorAll('section');
  const reveal = () => {
    els.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 50) {
        el.style.opacity = 1;
        el.style.transform = 'translateY(0)';
      }
    });
  };
  els.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
  });
  window.addEventListener('scroll', reveal);
  reveal();
});
