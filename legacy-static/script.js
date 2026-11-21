document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle.addEventListener('click', () => {
  mainNav.classList.toggle('mobile-open');
});

// Accordion
document.querySelectorAll('#accordion .accordion-head').forEach(head => {
  head.addEventListener('click', () => {
    const item = head.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('#accordion .accordion-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
