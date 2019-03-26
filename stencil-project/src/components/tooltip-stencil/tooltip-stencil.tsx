import { Component, Prop, State } from "@stencil/core";

@Component({
    tag: 'uc-tooltip-stencil',
    styleUrl: './tooltip-stencil.css',
    shadow: true
})
export class TooltipStencil {
    @State() tooltipVisible = false;
    @Prop() text: string;

    onToggleTooltip() {
        this.tooltipVisible = !this.tooltipVisible;
    }
    
    render() {

        let tooltip = null;
        if (this.tooltipVisible) {
            tooltip = <div id="tooltip-text">{this.text}</div>;
        }
        return [
            <slot />,
            <span id="tooltip-icon" onClick={this.onToggleTooltip.bind(this)}>?</span>,
            tooltip
        ];

    }

}