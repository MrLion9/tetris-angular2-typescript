import { Injectable } from '@angular/core';
import { BOARD_SIZE, COLORS, KEYS } from './index';

@Injectable()
export class GameService{
    board: boolean[][];

    constructor (){
        this.setupBoard();
    }

    setupBoard(){
        this.board = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            this.board[i] = [];
            for (let j = 0; j < BOARD_SIZE; j++) {
                this.board[i][j] = false;
            }
        }
    }
}