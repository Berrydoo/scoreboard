
import {Component, OnInit} from "@angular/core";
import {Team, Game, Shot} from "./games/game.model";
import {GameService} from "./games/game.service";
import {Form} from "@angular/forms";
@Component({
    selector: 'scoreboard',
    templateUrl:'scoreboard.component.html',
    styles: [`
        .backdrop {
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
    `]
})
export class ScoreboardComponent implements OnInit {

    currentGame:Game;
    mouseClick:MouseEvent;
    displayValue:string = 'none';
    playerIndex:number;

    constructor( private gameService:GameService){}

    ngOnInit(){
        this.currentGame = this.gameService.getCurrentGame();
    }

    registerClick( clickEvent:MouseEvent ){
        this.mouseClick = clickEvent;
        this.displayValue = 'block';
    }

    setPlayerIndex( index:number ){
        this.playerIndex = index;
    }

    saveShot(f:Form){
        let svg = document.querySelector('svg');
        let position = svg.createSVGPoint();
        position.x = this.mouseClick.clientX;
        position.y = this.mouseClick.clientY;

        let matrix = svg.getScreenCTM();
        let correct = position.matrixTransform(matrix.inverse());

        let shot:Shot = new Shot( parseInt(f.value.teamIndex), this.playerIndex,  parseInt(f.value.points),  (f.value.madeIt == "true") , correct.x, correct.y);
        this.gameService.registerShot(shot);

        this.playerIndex = null;
        this.hideShotDialogue();
    }

    hideShotDialogue(){
        this.displayValue = 'none';
    }

}