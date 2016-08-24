import { Injectable } from '@angular/core';
import { start_point, Details, BOARD_SIZE, COLORS, KEYS } from './index';
import * as _ from 'lodash';

@Injectable()
export class GameService{
    isStarted: boolean;
    isGameOver: boolean;
    score: number;
    interval: number;
    board: string[][];
    activeDetail: {};
    activePoint: number[];

    constructor (){
        this.setupBoard();

        this.resetDetail();

        window.addEventListener('keyup', (e: any) => {
            switch (e.keyCode) {
                case KEYS.ENTER:
                    this.toggle();
                    break;
            }
        });
    }

    start(){
        this.isStarted = true;
        this.isGameOver = false;
        this.score = 0;
        this.interval = 1000;

        this.update();
    }

    toggle() {
        if (this.isStarted) {
            this.gameOver();
        } else {
            this.start();
        }
    }

    update(){
        let self: GameService = this;
        if (this.isStarted) {
            setTimeout(() => {
                if(self.moveDownDetail()){
                    self.activePoint[0] = self.activePoint[0] + 1;
                }else{
                    self.resetDetail();
                }

                self.update();
            }, self.interval);
        }
    }

    gameOver(){

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

    moveDownDetail(){
        let pos = this.activeDetail['positions'][this.activeDetail['actualPosition'] ];
        for(let i = 0; i < pos.length; i++){
            for (let j = 0; j < pos[i].length; j++){
                if(pos[i][j] == 1) {
                    let y = this.activePoint[0] + i + 1;
                    let x = this.activePoint[1] + j;
                    if( y > (BOARD_SIZE - 1) || this.board[y][x] != "empty") return false;
                }
            }
        }
        return true;
    }

    resetDetail(){

        this.activeDetail = Details[_.random(0, 4)];
        this.activeDetail['actualPosition'] = 0;

        this.activePoint = _.clone(start_point);
    }

    setDetailPart(y: number, x: number){
        let pos = this.activeDetail['positions'][this.activeDetail['actualPosition'] ];
        for(let i = 0; i < pos.length; i++){
            for (let j = 0; j < pos[i].length; j++){
                if(pos[i][j] == 1) {
                    if(this.activePoint[0] + i == y && this.activePoint[1] + j == x) return true;
                }
            }
        }
        return false;
    }

    getColor (){
        return this.activeDetail['color'];
    }
}