// @ts-ignore
import { Component, OnInit } from '@angular/core';


const X = 1;
const O = 2;
const NONE = 0;

@Component({
  selector: 'app-area',
  template: `
    <style>
    .row{
      width:120px;display:flex
    }

    .container{
      font-family:sans-serif;
    }
  
    .square{
      width:40px;
      height:40px;
      background: transparent; 
      border: 2px solid #000; 
      border-radius:none; 
      max-height:40px; 
      font-size:12px; 
      font-weight:important; 
      text-align:center;
      border-left:none;
      border-top:none;
      font-family: Verdana, sans-serif;
      font-weight:bold;
    }

    .color-X{
      color:red;
    }

    .color-O{
      color:blue;
    }


    .color-none{
      color:#ccc;
    }

    .square:nth-of-type(3){
      border-right:none;
    }

    .row:nth-of-type(3) .square{
      border-bottom:none;
    }

    .container{
      display:flex;
      justify-content:space-between;
      align-items:center;
      font-family:sans-serif;
      font-size:12px;
      padding:20px;
      box-sizing:border-box;
    }

    .leftArea{
      margin-right:30px;
      display:flex;
      flex-direction:column;
      font-weight:bold;
      height:100px;
      justify-content:space-between;

    }

    .gridArea{
      position:relative;
    }

    .winner-overlay{
      background: rgba(255,255,255,0.9);
    font-weight: bold;
    font-size: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    #winnerArea .winner-name{
      font-size:14px;
    }

    .btn{
      background:#555;
      color:#fff;
      transition:all 0.2s ease;
      border:none;
      padding:5px 10px;
      border-radius:2px;
      cursor:pointer;
      text-transform:uppercase;
      font-size:10px;
      font-weight:bold;
      letter-spacing:1px;
    }

    .btn:hover{

      background:#000;
    }

    </style>
    <div class="container">
    <div class="leftArea">
      <div id="statusArea" className="status">Next player: <span class="color-{{currentPlayer}}">{{currentPlayer}}</span></div>
      <div id="winnerArea" className="winner">Winner: <span class="winner-name color-{{winnerPlayer}}">{{winnerPlayer}}</span></div>
    </div>
    <section class="gridArea">
      <div class="row" *ngFor="let row of matrix; let i = index;" >
        <button *ngFor="let symbol of matrix[i]; let j = index;" class="square" (click)="select(i,j)">
        <ng-container *ngIf="symbol === 1"><span class="color-x">X</span></ng-container>
        <ng-container *ngIf="symbol === 2"><span class="color-o">O</span></ng-container>
        </button>
      </div>
      <div class="winner-overlay color-{{winnerPlayer}}" *ngIf="winnerPlayer !== 'none'">{{winnerPlayer}} wins!!</div>
    </section>
    <button class="btn" (click)="reset()">Reset</button>
    </div>
  `,
  styles: ['']
})

export class MainAppComponent implements OnInit {
  current = X;
  matrix = [[NONE,NONE,NONE],[NONE,NONE,NONE],[NONE,NONE,NONE]];
  winner = NONE;

  select(i,j){
    if (this.matrix[i][j] === 0 && this.winner === NONE){
      this.matrix[i][j] = this.current;
      this.switchCurrent();
      this.checkWinner();
    }
  }

  switchCurrent(){
    this.current = (this.current === X)?O:X;
  }

  get currentPlayer(){
    return (this.current === X)?'X':'O';
  }

  get winnerPlayer(){
    return (this.winner === X)?'X':(this.winner === O)?'O':'none';
  }

  
  checkWinner(){

    this.checkMatrix();

  }


  reset(){
    this.switchCurrent();
    this.matrix = [[NONE,NONE,NONE],[NONE,NONE,NONE],[NONE,NONE,NONE]];
    this.winner = NONE;
  }



  checkMatrix(){
    if (this.winner === NONE){
      let countColumn = [{X:0,O:0},{X:0,O:0},{X:0,O:0}];

      this.matrix.every((row,i)=>{
        let countRow = {X:0,O:0};
        row.forEach((cell,j)=>{

          if (cell === X){
            countRow.X++;
            countColumn[j].X++;
          }
          if (cell === O){
            countRow.O++;
            countColumn[j].O++;
          }
        });
        // Check Rows
        if (countRow.X === 3){
          this.winner = X;
          return false;
        }
        if (countRow.O === 3){
          this.winner = O;
          return false;
        }
        // Check Columns
        countColumn.every((count)=>{
          if (count.X === 3 || count.O === 3){
            this.winner = (count.X === 3)?X:O;
            return false;
          }
          return true;
        });


        if (this.winner !== NONE){
          return false;
        }
        return true;
      });
      // Check Diagonals
      if (this.winner === NONE){
        // Check Normal Diagonal
        let j = 0;
        const normalDiag = this.matrix.map((row)=>{
          const el = row[j];
          j++;
          return el;
        });
        if (normalDiag.every(v => (v === X) || (v === O))){
          this.winner = normalDiag.every(v => (v === X))?X:O;
          return false;
        }else{
          // Check Inverse Diagonal
          let jInv = 2;
          const inverseDiag = this.matrix.map((row,i)=>{
            console.log(i,jInv);
            const el = row[jInv];
            jInv--;
            return el;
          });
          if (inverseDiag.every(v => (v === X) || (v === O))){
            this.winner = inverseDiag.every(v => (v === X))?X:O;
            return false;
          }
        }
      }

    }
  }

 }
