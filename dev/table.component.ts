import { Component, OnInit } from 'angular2/core';

@Component({
    selector: 'g-table',
    template: `<div>Here will follow my Content
                    <p>with another {{title}}</p>
                </div>`,
    inputs:['title']
})
export class GTableComponent implements OnInit {
    title:string;
    
    constructor() {
        this.title = '';
     }

    ngOnInit() {
        console.log('here I will call a service later for my data');

     }


}