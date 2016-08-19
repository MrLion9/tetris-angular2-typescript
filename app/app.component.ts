import {Component} from '@angular/core';
import { GameBoardComponent } from './gameboard/gameboard.component';
import { GameService } from './shared/index';

@Component({
    selector: 'my-app',
    template: `
        <tool-bar>{{this.title}}</tool-bar>
        <md-content class="container">
            <game-board></game-board>
        </md-content>
        <footer></footer>`,
    directives:[
        GameBoardComponent
    ],
    providers:[
        GameService
    ]
})
export class AppComponent {
    title: string;


    constructor(){
        this.title = "Hello foxy!";
    }

}