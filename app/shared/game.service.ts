import { Injectable } from '@angular/core';
import { start_point, Details, BOARD_SIZE, COLORS, KEYS } from './index';
import * as _ from 'lodash';

@Injectable()
export class GameService{
    board: string[][];
    activeDetail: {};
    activePoint: number[];

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
        this.activeDetail = Details[_.random(0, 4)];

        this.activePoint = start_point;
    }

    setDetailPart(y: number, x: number){
        let pos = this.activeDetail['positions'][0];
        for(let i = 0; i < pos.length; i++){
            for (let j = 0; j < pos[i].length; j++){
                if(pos[i][j] == 1) {
                    if(this.activePoint[0] + i == y && this.activePoint[1] + j == x) return true;
                }
            }
        }
        return false;
    }
}