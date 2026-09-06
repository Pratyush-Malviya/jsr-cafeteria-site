// Shared across index.html, menu.html, contact.html
(function(){
  // ---- header scroll shadow ----
  const header = document.querySelector('header');
  function onScroll(){
    if(!header) return;
    if(window.scrollY > 12){ header.classList.add('scrolled'); }
    else { header.classList.remove('scrolled'); }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();

  // ---- mobile nav toggle ----
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if(toggle && nav){
    toggle.onclick = () => nav.classList.toggle('open');
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
  }

  // ---- footer year ----
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- cart badge (reads what menu.html last saved) ----
  function readCartCount(){
    try{
      const raw = localStorage.getItem('jsr_cart');
      if(!raw) return 0;
      const cart = JSON.parse(raw);
      return Object.values(cart).reduce((s,q) => s + q, 0);
    }catch(e){ return 0; }
  }
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = readCartCount();
  });

  // ---- generic scroll reveal for simple pages (home/contact cards) ----
  const revealTargets = document.querySelectorAll('.highlight-card, .preview-card, .contact-card');
  if(revealTargets.length){
    if('IntersectionObserver' in window){
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if(entry.isIntersecting){
            entry.target.style.transitionDelay = (i % 6) * 0.05 + 's';
            entry.target.classList.add('in-view');
            obs.unobserve(entry.target);
          }
        });
      }, {threshold:0.1, rootMargin:'0px 0px -30px 0px'});
      revealTargets.forEach(el => obs.observe(el));
    } else {
      revealTargets.forEach(el => el.classList.add('in-view'));
    }
  }
})();
