// scrolltop.js

const scrolltop = document.getElementById("scrolltop");

// Fonction scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Show/hide the button based on the scroll position
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // You can adjust the scroll position threshold
        scrolltop.style.display = "flex";
    } else {
        scrolltop.style.display = "none";
    }
});

// Add a click event listener to the button
scrolltop.addEventListener("click", scrollToTop);
