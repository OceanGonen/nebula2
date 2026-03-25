// Satellite components
const componentInfo = {
    'X-ray Lens Array': {
        title: 'X-ray Lens Array',
        text: 'Captures high-energy X-ray radiation from neutron stars and black hole binaries.'
    },
    'Solar Panels': {
        title: 'Solar Panels',
        text: 'Converts solar energy into electrical power to run all onboard systems.'
    },
    'top': {
        title: 'Top Module',
        text: 'Houses the primary sensor array and communication equipment.'
    },
    'bottom': {
        title: 'Bottom Module',
        text: 'Contains the propulsion and structural support systems.'
    },
};

const infoPanel = document.getElementById('satInfo');
const infoTitle = document.getElementById('satInfoTitle');
const infoText = document.getElementById('satInfoText');
const componentsWrapper = document.querySelector('.components-wrapper');

function closePanel() {
    infoPanel.classList.remove('visible');
    document.querySelectorAll('.hit-area').forEach(a => a.classList.remove('active'));
    if (window.innerWidth > 768) {
        componentsWrapper.style.transform = '';
    }
}

document.querySelectorAll('.hit-area').forEach(area => {

    area.addEventListener('mouseenter', () => {
        const component = area.dataset.component;
        document.querySelectorAll(`[data-component="${component}"]`)
            .forEach(a => a.classList.add('hovered'));
    });

    area.addEventListener('mouseleave', () => {
        document.querySelectorAll('.hit-area').forEach(a => a.classList.remove('hovered'));
    });

    area.addEventListener('click', (e) => {
        e.stopPropagation();
        const component = area.dataset.component;
        const data = componentInfo[component];

        if (!data) return;

        document.querySelectorAll('.hit-area').forEach(a => a.classList.remove('active'));
        document.querySelectorAll(`[data-component="${component}"]`)
            .forEach(a => a.classList.add('active'));

        infoTitle.textContent = data.title;
        infoText.textContent = data.text;
        infoPanel.classList.add('visible');

        if (window.innerWidth > 768) {
            componentsWrapper.style.transform = 'translateX(-40px)';
        }
    });
});

document.addEventListener('click', closePanel);