/**
 * HIGH NOON POOL CARE - JAVASCRIPT
 * Minimal vanilla JavaScript for interactivity
 * Features:
 * - Mobile menu toggle
 * - Smooth scroll to sections (already handled by CSS scroll-behavior)
 * - Close mobile menu when clicking a link
 */

// ===== MOBILE MENU TOGGLE =====
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    /**
     * Toggle mobile menu visibility
     */
    mobileMenuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    /**
     * Close mobile menu when a nav link is clicked
     */
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    /**
     * Close mobile menu when clicking outside of it
     */
    document.addEventListener('click', function (event) {
        const navbar = document.querySelector('.navbar-container');
        if (!navbar.contains(event.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });

    // ===== FORM SETUP NOTE =====
    // The contact form is pre-configured to work with Formspree.
    // To enable it, visit https://formspree.io/ and:
    // 1. Sign up for a free account
    // 2. Create a new form project
    // 3. Copy the form ID
    // 4. Replace 'YOUR_FORM_ID' in index.html with your actual form ID
    // Example: action="https://formspree.io/f/xvqkzpqw"
});

// ===== KEYBOARD ACCESSIBILITY =====
// Ensure proper keyboard navigation by using semantic HTML
// Focus states are handled in CSS for accessibility
