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
        this.shadowRoot.innerHTML = `
            <style>
                div {
                    background-color: black;
                    color: white;
                    position: absolute;
                    z-index: 10;
                }

                :host(.important) {
                    background: #ccc;
                }

                :host-context(p) {
                    font-weight: bold;
                }

                .highlight {
                    background-color: red;
                }

                ::slotted(.highlight) {
                    border-bottom: 1px dotted red;
                }

                .icon {
                    background: black;
                    color: white;
                    padding: 0.15rem 0.5rem;
                    text-align: center;
                    border-radius: 50%;
                }
            </style>
            <slot>Some default value</slot>
            <span class="icon">?</span>
        `;
    }
    
    connectedCallback() {
        if(this.hasAttribute('text')) {
            this._tooltipText = this.getAttribute('text');
        }
        const tooltipIcon = this.shadowRoot.querySelector("span");
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
        //this.appendChild(tooltipIcon);
        this.shadowRoot.appendChild(tooltipIcon);
        this.style.position = 'relative';
    }

    _showTooltip() {
        this._tooltipContainer = document.createElement('div');
        this._tooltipContainer.textContent = this._tooltipText;
        this.shadowRoot.appendChild(this._tooltipContainer);
        //this.appendChild(this._tooltipContainer);
    }

    _hideTooltip() {
        //this.removeChild(this._tooltipContainer);
        this.shadowRoot.removeChild(this._tooltipContainer);
    }

}
// customElements is an object builtin JavaScript
customElements.define('uc-tooltip', Tooltip);


