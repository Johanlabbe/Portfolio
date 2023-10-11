function createTooltip(targetElement, tooltipText) {
    const tooltipContainer = document.createElement('div');
    tooltipContainer.classList.add('tooltip-container');

    const tooltipTrigger = document.createElement('span');
    tooltipTrigger.classList.add('tooltip-trigger');
    tooltipTrigger.textContent = targetElement.textContent;

    const infoTooltip = document.createElement('div');
    infoTooltip.classList.add('tooltip');
    infoTooltip.textContent = tooltipText;

    tooltipContainer.appendChild(tooltipTrigger);
    tooltipContainer.appendChild(infoTooltip);

    document.body.appendChild(tooltipContainer);

    tooltipTrigger.addEventListener('mouseover', () => {
        infoTooltip.style.display = 'block';
    });

    tooltipTrigger.addEventListener('mouseout', () => {
        infoTooltip.style.display = 'none';
    });
}

// Liste des tooltips
createTooltip(document.getElementById('element1'), 'Ceci est le tooltip pour Element 1');
createTooltip(document.getElementById('element2'), 'Ceci est le tooltip pour Element 2');
