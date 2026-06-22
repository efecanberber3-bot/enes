const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const progressBar = document.querySelector('#progressBar');
const reveals = document.querySelectorAll('.reveal');
const ideaForm = document.querySelector('#ideaForm');
const formStatus = document.querySelector('#formStatus');
const copyEmail = document.querySelector('#copyEmail');
const magneticButtons = document.querySelectorAll('.magnetic');
const blogSearch = document.querySelector('#blogSearch');
const postCards = document.querySelectorAll('[data-post-card]');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.classList.toggle('active', isOpen);
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  document.body.classList.toggle('menu-open', isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.classList.remove('active');
    menuToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  });
});

const updateProgress = () => {
  if (!progressBar) return;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
  progressBar.style.width = `${progress}%`;
};
window.addEventListener('scroll', updateProgress, { passive: true });
window.addEventListener('resize', updateProgress);
updateProgress();

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('show'));
}

magneticButtons.forEach((button) => {
  button.addEventListener('mousemove', (event) => {
    const rect = button.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    button.style.transform = `translate(${x * 0.08}px, ${y * 0.12}px)`;
  });
  button.addEventListener('mouseleave', () => { button.style.transform = ''; });
});

ideaForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(ideaForm);
  const subject = encodeURIComponent('Yeni Fikir Başvurusu - Enes Demirel');
  const body = encodeURIComponent(
    `Ad Soyad: ${data.get('name') || ''}\n` +
    `İletişim: ${data.get('contact') || ''}\n` +
    `Fikir Türü: ${data.get('category') || ''}\n\n` +
    `Fikir:\n${data.get('message') || ''}`
  );
  formStatus.textContent = 'Mail taslağı hazırlanıyor...';
  window.location.href = `mailto:info@enesdemirel.com?subject=${subject}&body=${body}`;
});

copyEmail?.addEventListener('click', async () => {
  const email = copyEmail.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    copyEmail.textContent = 'Kopyalandı ✓';
    setTimeout(() => { copyEmail.textContent = email; }, 1600);
  } catch (error) { copyEmail.textContent = email; }
});

const applyBlogSearch = () => {
  if (!blogSearch) return;
  const query = blogSearch.value.toLocaleLowerCase('tr-TR').trim();
  postCards.forEach((card) => {
    const haystack = card.textContent.toLocaleLowerCase('tr-TR');
    card.style.display = haystack.includes(query) ? '' : 'none';
  });
};
blogSearch?.addEventListener('input', applyBlogSearch);

const params = new URLSearchParams(window.location.search);
if (blogSearch && params.get('q')) {
  blogSearch.value = params.get('q');
  applyBlogSearch();
}
