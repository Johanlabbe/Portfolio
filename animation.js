// Animation "On Sroll" --> 'hidden' -> toggle 'show'
// Créez un ensemble pour stocker les éléments déjà animés
const animatedElements = new Set();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        // Vérifiez si l'élément est visible et n'a pas été animé
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
            entry.target.classList.add('show');
            animatedElements.add(entry.target);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));


