import { Component } from '@angular/core';
import { GameService } from '../shared/index';

@Component({
    selector: 'static-detail-part',
    template: `<div class="detail blue"></div>`,
    styleUrls: ['./app/gameboard/detail.component.css']
})

export class StaticDetailComponent {
    //color: string;

    constructor( private gameService: GameService ){
        //this.color = this.gameService.getColor();
    }
}