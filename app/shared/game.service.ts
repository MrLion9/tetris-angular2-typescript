import { Injectable } from '@angular/core';
import { hexColors, start_point, Details, BOARD_SIZE, COLORS, KEYS } from './index';
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
                case KEYS.LEFT:
                    this.moveLeftDetail();
                    break;
                case KEYS.RIGHT:
                    this.moveRightDetail();
                    break;
            }
        });
    }

    start(){
        this.isStarted = true;
        this.isGameOver = false;
        this.score = 0;
        this.interval = 800;

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

    moveLeftDetail(){
        let self = this;

        if( this.bypassDetailPart(function(i, j, pos){
            if( self.board[self.activePoint[0] + i][self.activePoint[1] + j - 1] != "empty") return false;
            j = pos[i].length;
        }) )
        {
            self.activePoint[1] = self.activePoint[1] - 1;
        }
    }

    moveRightDetail(){
        let self = this;

        if( this.bypassDetailPartSinceTheEnd(function(i, j, pos){
                if( self.board[self.activePoint[0] + i][self.activePoint[1] + j + 1] != "empty") return false;
                j = -1;
            }) )
        {
            self.activePoint[1] = self.activePoint[1] + 1;
        }
    }

    bypassDetailPart(callback){
        let pos = this.activeDetail['positions'][this.activeDetail['actualPosition'] ];
        for(let i = 0; i < pos.length; i++){
            for (let j = 0; j < pos[i].length; j++){
                if(pos[i][j] == 1){
                    callback(i, j, pos);
                }
            }
        }

        return true;
    }

    bypassDetailPartSinceTheEnd(callback){
        let pos = this.activeDetail['positions'][this.activeDetail['actualPosition'] ];
        for(let i = 0; i < pos.length; i++){
            for (let j = pos[i].length-1; j >= 0 ; j--){
                if(pos[i][j] == 1){
                    callback(i, j, pos);
                }
            }
        }

        return true;
    }

    resetDetail(){
        if(typeof this.activeDetail != "undefined"){
            let pos = this.activeDetail['positions'][this.activeDetail['actualPosition'] ];
            let self = this;
            for(let i = 0; i < pos.length; i++){
                for (let j = 0; j < pos[i].length; j++){
                    if(pos[i][j] == 1) {
                        self.board[this.activePoint[0] + i][this.activePoint[1] + j] = self.activeDetail['color'];
                    }
                }
            }
        }

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

    getStyling(y: number, x: number){
        if(this.board[y][x] != "empty"){
            return hexColors[ this.board[y][x] ];
        }else return "transparent";
    }

    getColor (){
        return this.activeDetail['color'];
    }
}