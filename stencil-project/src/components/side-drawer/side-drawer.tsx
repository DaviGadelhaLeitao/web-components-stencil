import { Component } from '@stencil/core';

@Component({
    tag: 'uc-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    render() {
        return (
            <aside>
                <h1>The side drawer</h1>
            </aside>
        );
    }
}

