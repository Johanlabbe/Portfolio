// tilt-effect.js

document.addEventListener('DOMContentLoaded', function () {
  function createTiltEffect(elementId) {
      const tiltElement = document.getElementById(elementId);
      let tiltX = 0;
      let tiltY = 0;

      tiltElement.addEventListener('mousemove', (e) => {
          const { clientX, clientY } = e;
          const { left, top, width, height } = tiltElement.getBoundingClientRect();
          const x = (clientX - left) / width;
          const y = (clientY - top) / height;

          // Ajustez la sensibilité de l'effet en modifiant les valeurs 40 ci-dessous.
          const sensitivity = 40;

          tiltX = (x - 0.5) * sensitivity;
          tiltY = (y - 0.5) * sensitivity;
          requestAnimationFrame(updateTilt);
      });

      function updateTilt() {
          tiltElement.style.transform = `perspective(1000px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
      }

      tiltElement.addEventListener('mouseleave', () => {
          tiltX = 0;
          tiltY = 0;
          requestAnimationFrame(updateTilt);
      });
  }

  // Créez l'effet de tilt pour chaque élément en appelant createTiltEffect avec l'ID de l'élément
  createTiltEffect('tiltElement');
  createTiltEffect('tiltElement2');
  createTiltEffect('tiltElement3');
});
