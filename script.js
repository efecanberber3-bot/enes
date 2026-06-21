const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const cursorGlow = document.querySelector('.cursor-glow');
const reveals = document.querySelectorAll('.reveal');
const ideaForm = document.querySelector('#ideaForm');
const formNote = document.querySelector('#formNote');
const copyMail = document.querySelector('#copyMail');

navToggle?.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

siteNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
  });
});

window.addEventListener('pointermove', (event) => {
  if (!cursorGlow) return;
  cursorGlow.style.left = `${event.clientX}px`;
  cursorGlow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

reveals.forEach((element) => observer.observe(element));

ideaForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(ideaForm);
  const subject = encodeURIComponent('Yeni Fikir Başvurusu - EnesDemirel');
  const body = encodeURIComponent(
    `Ad Soyad: ${data.get('name')}\n` +
    `İletişim: ${data.get('contact')}\n` +
    `Kategori: ${data.get('category')}\n\n` +
    `Fikir:\n${data.get('message')}`
  );
  formNote.textContent = 'Mail taslağı hazırlanıyor...';
  window.location.href = `mailto:info@enesdemirel.com?subject=${subject}&body=${body}`;
});

copyMail?.addEventListener('click', async () => {
  const mail = copyMail.dataset.mail;
  try {
    await navigator.clipboard.writeText(mail);
    copyMail.textContent = 'Kopyalandı ✓';
    setTimeout(() => copyMail.textContent = 'E-postayı kopyala', 1800);
  } catch {
    copyMail.textContent = mail;
  }
});
