import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'g-table',
    template: `<div>Here will follow my Content</div>`
})
export class ComponentNameComponent implements OnInit {
    constructor() { }

    ngOnInit() {
        console.log('here I will call a service later for my data');

     }


}