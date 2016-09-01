import { Component } from '@angular/core';
import { GameService } from '../shared/index';

@Component({
    selector: 'info',
    template: `
        <div><i class="trophy icon"></i> Score {{score()}} </div>
        <div>
            <button class="ui right labeled icon button play">
                <i class="play icon"></i>
                 Play
            </button>
        </div>
        <div>
            <button class="ui right labeled icon button pause">
                <i class="pause icon"></i>
                 Pause
            </button>
        </div>`,
    styles: [
        'div {margin: 30px;}'
    ]

})

export class InfoComponent{

    constructor(private gameService: GameService){
    }

    score() : number{
        return this.gameService.score;
    }
}