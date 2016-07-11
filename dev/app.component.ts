import {Component} from 'angular2/core';
import { GTableComponent } from './table.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>This is Gehda´s Website</h1>
        <g-table title="Here we go!"></g-table>
    `,
    directives:[GTableComponent]
})
export class AppComponent {

}