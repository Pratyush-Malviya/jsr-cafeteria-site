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

  // ---- mobile nav toggle & backdrop ----
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  
  // Create mobile backdrop if not present
  let navBackdrop = document.querySelector('.nav-backdrop');
  if(!navBackdrop){
    navBackdrop = document.createElement('div');
    navBackdrop.className = 'nav-backdrop';
    document.body.appendChild(navBackdrop);
  }

  function closeNav(){
    if(!nav) return;
    nav.classList.remove('open');
    if(toggle){
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    }
    if(navBackdrop) navBackdrop.classList.remove('show');
    document.body.classList.remove('nav-locked');
  }

  function openNav(){
    if(!nav) return;
    nav.classList.add('open');
    if(toggle){
      toggle.classList.add('active');
      toggle.setAttribute('aria-expanded', 'true');
    }
    if(navBackdrop) navBackdrop.classList.add('show');
    document.body.classList.add('nav-locked');
  }

  if(toggle && nav){
    toggle.setAttribute('aria-expanded', 'false');
    toggle.onclick = (e) => {
      e.stopPropagation();
      if(nav.classList.contains('open')){
        closeNav();
      } else {
        openNav();
      }
    };
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
    navBackdrop.addEventListener('click', closeNav);
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape' && nav.classList.contains('open')) closeNav();
    });
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
