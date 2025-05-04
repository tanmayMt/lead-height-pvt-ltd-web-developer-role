// Smooth scrolling for internal nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('hidden');
});

// Scroll reveal effect
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2,
});

sections.forEach(section => observer.observe(section));



// Toggle mobile nav
document.getElementById('menu-toggle').addEventListener('click', function () {
  const menu = document.getElementById('nav-menu');
  menu.classList.toggle('show');
});
