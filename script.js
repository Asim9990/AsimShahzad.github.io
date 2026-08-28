const certMap={
  'assets/computer-diploma.jpg':'assets/computer-diploma.svg',
  'assets/graphics-web-seo-certificate.jpg':'assets/graphics-web-seo-certificate.svg',
  'assets/freelancer-appreciation-2023.jpg':'assets/freelancer-appreciation-2023.svg',
  'assets/hssc-2021.jpg':'assets/hssc-2021.svg',
  'assets/ssc-2019.jpg':'assets/ssc-2019.svg'
};
document.querySelectorAll('.cert-card[data-image]').forEach(card=>{
  if(certMap[card.dataset.image]) card.dataset.image=certMap[card.dataset.image];
  const img=card.querySelector('.cert-image img');
  if(img&&certMap[img.getAttribute('src')]) img.src=certMap[img.getAttribute('src')];
});
const privacyNote=document.querySelector('.privacy-note');
if(privacyNote) privacyNote.textContent='Certificate previews are privacy-safe summaries based on the original documents; sensitive registration, roll-number and personal identifier fields are not published.';
const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open))});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
const lightbox=document.querySelector('.lightbox');
const lightboxImg=lightbox.querySelector('img');
document.querySelectorAll('.cert-card[data-image]').forEach(card=>card.addEventListener('click',()=>{lightboxImg.src=card.dataset.image;lightbox.classList.add('open');document.body.style.overflow='hidden'}));
const closeLightbox=()=>{lightbox.classList.remove('open');lightboxImg.src='';document.body.style.overflow=''};
document.querySelector('.lightbox-close').addEventListener('click',closeLightbox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});