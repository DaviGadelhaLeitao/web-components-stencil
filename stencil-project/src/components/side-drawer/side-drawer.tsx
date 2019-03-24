import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'uc-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    // this decoration annotation brings the functionally that if we set or change this
    // attribute, or if we directly or programatically set or change the title property
    // from outside JavaScript then Stencil will automatically this change and it will
    // rerun the render() and will do so in a very efficiency manner so that is does not
    // rerender the entire DOM that was generated based on it, but only the parts of the
    // DOM that changed. This is what the @Prop() decorator does, it adds an automated
    // watcher you could say. 
    @Prop() title: string;

    render() {
        return (
            <aside>
                <header><h1>{this.title}</h1></header>
                <main>
                    <slot></slot>
                </main>
            </aside>
        );
    }
}

