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

        // define if you can access this DOM tree from outside this component or not.
        // closing if typically something you won't do because even so there are ways to access it
        // and it simply does not worth the effort. Now this element has it's own shadow DOM tree attached
        // to it.
        this.attachShadow({mode: 'open'});
    }
    
    connectedCallback() {
        const tooltipIcon = document.createElement('span');
        if(this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }
        tooltipIcon.textContent = ' (?)';
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        //this.appendChild(tooltipIcon);
        this.shadowRoot.appendChild(tooltipIcon);
        this.style.position = 'relative';
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        this._tooltipContainer.style.backgroundColor = 'black';
        this._tooltipContainer.style.color = 'white';
        this._tooltipContainer.style.position = 'absolute';
        this._tooltipContainer.style.zIndex = '10';
        this.shadowRoot.appendChild(this._tooltipContainer);
        //this.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        //this.removeChild(this._tooltipContainer);
        this.shadowRoot.removeChild(this._tooltipContainer);
        this.removeChild(this._tooltipContainer);
    }

}
// customElements is an object builtin JavaScript
customElements.define('uc-tooltip', Tooltip);


