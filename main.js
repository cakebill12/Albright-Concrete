const header = document.querySelector('.site-header');
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const currentYearEl = document.getElementById('current-year');
const galleryFilters = document.querySelectorAll('.gallery-filter');
const galleryItems = document.querySelectorAll('.gallery-item');
const form = document.getElementById('estimate-form');
const formStatus = document.getElementById('form-status');

// Year
if (currentYearEl) {
  currentYearEl.textContent = new Date().getFullYear();
}

// Mobile nav toggle
if (navToggle && header && nav) {
  navToggle.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => header.classList.remove('nav-open'));
  });
}

// Gallery filtering (services page)
if (galleryFilters.length && galleryItems.length) {
  galleryFilters.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      galleryFilters.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      galleryItems.forEach((item) => {
        const category = item.dataset.category;
        const show = filter === 'all' || category === filter;
        item.style.display = show ? '' : 'none';
      });
    });
  });
}

// Simple form handling (demo only)
if (form && formStatus) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || 'there';

    formStatus.textContent = `Thank you, ${name}. Your request has been received. Joshua will contact you soon.`;
    formStatus.style.color = '#94e99a';

    form.reset();
  });
}