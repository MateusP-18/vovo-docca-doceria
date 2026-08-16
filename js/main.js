/* ==========================================================
   Vovó Docca Doceria — main.js
   Header on scroll, menu mobile, slideshow do Hero,
   copiar endereço e lightbox da galeria
   ========================================================== */

// header scroll state
const header = document.getElementById('site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 40);
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// mobile menu
const nav = document.getElementById('primary-nav');
const toggle = document.getElementById('menu-toggle');
const scrim = document.getElementById('nav-scrim');
function closeNav(){
  nav.classList.remove('open');
  scrim.classList.remove('show');
  toggle.setAttribute('aria-expanded','false');
}
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  scrim.classList.toggle('show', open);
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});
scrim.addEventListener('click', closeNav);
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

// hero slideshow
const slides = document.querySelectorAll('.hero-slide');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(slides.length > 1 && !reduceMotion){
  let idx = 0;
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, 5000);
}

// copy address
const copyBtn = document.getElementById('copy-address');
copyBtn.addEventListener('click', async () => {
  const text = document.getElementById('address-text').textContent;
  try{
    await navigator.clipboard.writeText(text);
    copyBtn.textContent = 'Endereço copiado!';
  }catch(e){
    copyBtn.textContent = 'Copie: ' + text;
  }
  setTimeout(() => copyBtn.textContent = 'Copiar endereço', 2400);
});

document.getElementById('year').textContent = new Date().getFullYear();

// simple gallery lightbox
const lightboxLinks = document.querySelectorAll('[data-lightbox]');
if(lightboxLinks.length){
  const overlay = document.createElement('div');
  overlay.setAttribute('role','dialog');
  overlay.setAttribute('aria-modal','true');
  overlay.setAttribute('aria-label','Foto ampliada');
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(60,23,25,.92);display:none;align-items:center;justify-content:center;z-index:999;padding:24px;';
  const img = document.createElement('img');
  img.style.cssText = 'max-width:100%;max-height:88vh;border-radius:4px;box-shadow:0 20px 60px rgba(0,0,0,.5);';
  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('aria-label','Fechar');
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = 'position:absolute;top:22px;right:26px;background:none;border:none;color:#fff;font-size:1.6rem;cursor:pointer;';
  overlay.appendChild(img);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  let lastFocused = null;
  function openLightbox(href, alt){
    lastFocused = document.activeElement;
    img.src = href;
    img.alt = alt || '';
    overlay.style.display = 'flex';
    closeBtn.focus();
  }
  function closeLightbox(){
    overlay.style.display = 'none';
    img.src = '';
    if(lastFocused) lastFocused.focus();
  }
  lightboxLinks.forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const inner = a.querySelector('img');
      openLightbox(a.getAttribute('href'), inner ? inner.alt : '');
    });
  });
  closeBtn.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => { if(e.target === overlay) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape' && overlay.style.display === 'flex') closeLightbox(); });
}
