const themeStyle=document.createElement('link');
themeStyle.rel='stylesheet';
themeStyle.href='theme.css';
document.head.appendChild(themeStyle);

const heroPortrait=document.querySelector('.portrait-shell>img');
if(heroPortrait){
  heroPortrait.src='assets/profile.svg';
  heroPortrait.alt='Muhammad Asim Shahzad';
}

const leadershipStyle=document.createElement('link');
leadershipStyle.rel='stylesheet';
leadershipStyle.href='leadership.css';
document.head.appendChild(leadershipStyle);

const primaryNav=document.querySelector('.nav');
const projectsNav=primaryNav?.querySelector('a[href="#projects"]');
if(primaryNav&&!primaryNav.querySelector('a[href="#leadership"]')){
  const leadershipNav=document.createElement('a');
  leadershipNav.href='#leadership';
  leadershipNav.textContent='Leadership';
  primaryNav.insertBefore(leadershipNav,projectsNav||primaryNav.firstChild);
}

const heroLede=document.querySelector('.hero-lede');
if(heroLede){
  heroLede.innerHTML='Founder & CEO of <strong>Digitals Prime</strong>, working at the intersection of <strong>SEO, AI automation, digital growth, web technology and youth skills development</strong> — with a vision to expand digital opportunity, entrepreneurship and innovation for Pakistan\'s youth.';
  const youthBadge=document.createElement('div');
  youthBadge.className='hero-youth-badge';
  youthBadge.textContent='Youth Leadership · Digital Inclusion · National Development';
  heroLede.insertAdjacentElement('afterend',youthBadge);
}
const portraitFocus=document.querySelector('.portrait-card.bottom strong');
if(portraitFocus) portraitFocus.textContent='Leadership × Technology × Education';

const aboutSection=document.querySelector('#about');
if(aboutSection&&!document.querySelector('#leadership')){
  aboutSection.insertAdjacentHTML('afterend',`<section class="section leadership" id="leadership">
    <div class="section-label reveal">02 / YOUTH LEADERSHIP & NATIONAL IMPACT</div>
    <div class="leadership-shell">
      <div class="leadership-intro reveal">
        <div class="leadership-kicker">Pakistan's youth · opportunity · innovation</div>
        <h2>Leadership through <em>skills, service & opportunity.</em></h2>
        <p>My leadership journey is rooted in entrepreneurship, education and practical technology. I want to help young Pakistanis move from potential to participation — by connecting digital skills with employability, entrepreneurship, innovation and meaningful community contribution.</p>
        <div class="leadership-quote">“I believe youth empowerment becomes meaningful when knowledge is converted into skills, skills into opportunities, and opportunities into positive impact.”</div>
      </div>
      <div class="leadership-pillars">
        <article class="impact-card reveal"><div class="impact-icon">↗</div><h3>Youth Skills & Employability</h3><p>Teaching practical, market-relevant digital skills including SEO, freelancing, WordPress, digital marketing, content systems and AI so learners can build real career pathways.</p></article>
        <article class="impact-card reveal delay-1"><div class="impact-icon">◎</div><h3>Entrepreneurship & Job Creation</h3><p>Building Digitals Prime as a technology-enabled business and using entrepreneurship as a model for creating value, professional opportunities and sustainable digital work.</p></article>
        <article class="impact-card reveal"><div class="impact-icon">✦</div><h3>AI, Innovation & Digital Inclusion</h3><p>Exploring AI agents, automation and modern web systems with the goal of making emerging technology practical, accessible and useful for young people and organizations.</p></article>
        <article class="impact-card reveal delay-1"><div class="impact-icon">◌</div><h3>Community & Public Awareness</h3><p>Combining education, publishing and my veterinary-science background to contribute to informed communities, responsible digital participation and evidence-based public awareness.</p></article>
      </div>
    </div>
    <div class="leadership-band reveal">
      <div><strong>Entrepreneur</strong><span>Founder & CEO, Digitals Prime</span></div>
      <div><strong>Educator</strong><span>Practical digital-skills instruction</span></div>
      <div><strong>Published Writer</strong><span>Public-awareness journalism</span></div>
      <div><strong>DVM Student</strong><span>Science, zoonoses & food safety</span></div>
    </div>
    <div class="vision-panel reveal">
      <div class="vision-label">Vision for Pakistan's Youth</div>
      <div><h3>A generation that is skilled enough to compete globally and engaged enough to improve Pakistan locally.</h3><p>I aim to contribute to youth platforms that bridge education and employability, encourage entrepreneurship, expand access to digital opportunity, promote responsible use of AI, and give young people a constructive voice in national development.</p><div class="pmyp-ready">National Youth Council profile focus · Leadership · Engagement · Entrepreneurship · Innovation</div></div>
    </div>
  </section>`);
}

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