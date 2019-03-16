class Tooltip extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const tooltipIcon = document.createElement('span');
        tooltipIcon.textContent = ' (?)';
        this.appendChild(tooltipIcon);
    }

}
// customElements is an object builtin JavaScript
customElements.define('uc-tooltip', Tooltip);


