import { Component } from '@angular/core';
import { GameService } from '../shared/index';

@Component({
    selector: 'game-board',
    template: `
        <div class="row" *ngFor="let column of board; let y=index">
			<div class="column"
			     *ngFor="let row of column; let x=index; trackBy:x">
			</div>
		</div>`,
    styles: [
        ':host {margin: 10px; ' +
        'box-shadow: 0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12);' +
        'display: block;}',
        '.row {height: 28px;}',
        '.column {border: 1px dotted #455A64; width: 28px; height: 28px; display: inline-block; vertical-align: middle;' +
        'text-align: center;}'
    ]
})

export class GameBoardComponent{
    board: string[][];

    constructor ( private gameService: GameService ){
        this.board = this.gameService.board;
    }
}