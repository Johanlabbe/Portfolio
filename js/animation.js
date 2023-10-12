// Animation "On Sroll" --> 'hidden' -> toggle 'show'
// Créez un ensemble pour stocker les éléments déjà animés
const animatedElements = new Set();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const element = entry.target;
        console.log(entry);
        // Vérifiez si l'élément est visible et n'a pas été animé
        if (entry.isIntersecting && !animatedElements.has(element)) {
            const animationType = element.getAttribute('data-animation');
            if (animationType) {
                element.classList.add('show', animationType);
                animatedElements.add(element);
            }
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => observer.observe(element));