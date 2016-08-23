import { Component } from '@angular/core';
import { GameService } from '../shared/index';

@Component({
    selector: 'detail-part',
    template: `<div class="detail {{color}}"></div>`,
    styleUrls: ['./app/gameboard/detail.component.css']
})

export class DetailComponent {
    color: string;

    constructor( private gameService: GameService ){
        this.color = this.gameService.getColor();
    }
}