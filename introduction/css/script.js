// 1. GREETING
// This runs when the page loads
window.onload = function() {
    const greetingElement = document.getElementById('dynamic-greeting');
    
    // Set a static professional message
    let message = "Welcome to my Personal Website  Information Technology";

    // Update the HTML
    if (greetingElement) {
        greetingElement.innerText = message;
    }
};

// 2. SCROLL TO TOP BUTTON VISIBILITY
const backToTopBtn = document.getElementById('backToTop');

window.onscroll = function() {
    if (backToTopBtn) {
        // If we scroll down more than 300px, show the button
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }
};

// 3. FUNCTION TO SCROLL UP
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 4. HORIZONTAL SCROLL FOR GALLERY
const gallery = document.querySelector('.gallery-wrapper');
if (gallery) {
    gallery.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        gallery.scrollLeft += evt.deltaY;
    });
}