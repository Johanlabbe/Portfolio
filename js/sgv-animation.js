// Récupérez la référence de l'élément SVG
const svg = document.getElementById("mp-logo");

// Récupérez tous les éléments de texte (les lettres) dans l'élément SVG
const letters = svg.querySelectorAll("text");

letters.forEach((letter, index) => {
  // Récupérez le tracé du texte
  const path = letter.querySelector("path");

  // Calculez la longueur du tracé
  const length = path.getTotalLength();

  // Réinitialisez le tracé pour l'animation
  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  // Animez le tracé
  path.style.animation = `line-animation 2s ease forwards ${index * 0.5}s`;
});

// Définissez l'animation des tracés
const keyframes = `
@keyframes line-animation {
  to {
    stroke-dashoffset: 0;
  }
}
`;

const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(keyframes));
document.head.appendChild(style);
