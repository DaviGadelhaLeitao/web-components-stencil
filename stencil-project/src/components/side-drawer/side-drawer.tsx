import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'uc-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {

    // This decoration annotation brings the functionally that if we set or change this
    // attribute, or if we directly or programmatically set or change the title property
    // from outside JavaScript then Stencil will automatically change this property and it will
    // rerun the render() and will do so in a very efficiency manner so that is does not
    // rerender the entire DOM that was generated based on it, but only the parts of the
    // DOM that changed.
    
    // This is what the @Prop() decorator does, it adds an automated watcher you could say.
    
    // The reflectToAttr property makes the changed property have his HTML attribute value
    // changed as well.
    @Prop({reflectToAttr: true}) title: string;
    @Prop({reflectToAttr: true}) open: boolean;

    onCloseDrawer() {
        this.open = false;
    }

    render() {
        return (
            <aside>
                <header>
                    <h1>{this.title}</h1>
                    <button onClick={this.onCloseDrawer.bind(this)}>X</button>
                </header>
                <section id="tabs">
                    <button class="active">Navigation</button>
                    <button>Contact</button>
                </section>
                <main>
                    <slot></slot>
                </main>
            </aside>
        );
    }
}

