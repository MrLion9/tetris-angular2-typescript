import {Component} from '@angular/core';
import { GameBoardComponent } from './gameboard/gameboard.component';
import { InfoComponent } from './info/info.component';
import { GameService } from './shared/index';

@Component({
    selector: 'my-app',
    template: `
        <tool-bar>{{this.title}}</tool-bar>
        <md-content class="container">
            <div class="ui two column centered grid">
                <div class="column">
                    <game-board></game-board>
                </div>
                <div class="column">
                    <info></info>
                </div>
            </div>
        </md-content>
        <footer></footer>`,
    directives:[
        GameBoardComponent,
        InfoComponent
    ],
    styles:[
        'game-board {width: 280px;}'
    ],
    providers:[
        GameService
    ]
})
export class AppComponent {
    title: string;


    constructor(){
        this.title = "";
    }

}