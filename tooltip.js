class Tooltip extends HTMLElement {
    constructor() {
        super();
        this._tooltipContainer;

        // initializing tooptipText with some value
        this._tooltipText = "I'm the default when you hover over me!";

        // if you leave this code below what will happen it that it will be executed
        // when wasn't inserted into the page. Therefore it won't work. The correct thing
        // to do is to move it down below inside the connectedCallback method.
        // this._tooltipText = this.getAttribute('text');
    }
    
    connectedCallback() {
        const tooltipIcon = document.createElement('span');
        if(this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }
        tooltipIcon.textContent = ' (?)';
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        this.appendChild(tooltipIcon);
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        this.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        this.removeChild(this._tooltipContainer);
    }

}
// customElements is an object builtin JavaScript
customElements.define('uc-tooltip', Tooltip);


