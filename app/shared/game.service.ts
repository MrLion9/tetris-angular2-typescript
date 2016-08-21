import { Injectable } from '@angular/core';
import { Details, BOARD_SIZE, COLORS, KEYS } from './index';
import * as _ from 'lodash';

@Injectable()
export class GameService{
    board: string[][];

    constructor (){
        this.setupBoard();

        this.resetDetail();
    }

    setupBoard(){
        this.board = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            this.board[i] = [];
            for (let j = 0; j < BOARD_SIZE/2; j++) {
                this.board[i][j] = "empty";
            }
        }
    }

    resetDetail(){
        console.log(Details[_.random(0, 4)]);
    }
}