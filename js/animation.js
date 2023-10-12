// Animation "On Sroll" --> 'hidden' -> toggle 'show'
// Créez un ensemble pour stocker les éléments déjà animés
const animatedElements = new Set();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        const element = entry.target;
        // Vérifiez si l'élément est visible et n'a pas été animé
        if (entry.isIntersecting && !animatedElements.has(element)) {
            element.classList.add('show');
            animatedElements.add(element);
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));