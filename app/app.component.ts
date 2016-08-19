import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<div>{{title}}</div>'
})
export class AppComponent {
    title: string;


    constructor(){
        this.title = "Hello foxy!";
    }

}