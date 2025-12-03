// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    this.innerHTML = mobileMenu.classList.contains('hidden') ? '<i class="fas fa-bars text-2xl"></i>' : '<i class="fas fa-times text-2xl"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('hidden');
        document.getElementById('mobile-menu-button').innerHTML = '<i class="fas fa-bars text-2xl"></i>';
    });
});

// Sticky header effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('shadow-lg');
        header.classList.add('bg-white');
    } else {
        header.classList.remove('shadow-lg');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize tooltips if needed
document.addEventListener('DOMContentLoaded', function() {
    // Any initialization code here
});