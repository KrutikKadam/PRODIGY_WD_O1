// JavaScript to change navbar style on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#000000'; // Darker color on scroll
        navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.backgroundColor = '#964B00'; // Original color
        navbar.style.boxShadow = 'none';
    }
});
