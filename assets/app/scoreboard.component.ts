
import {Component, OnInit} from "@angular/core";
import {Game, Shot} from "./games/game.model";
import {GameService} from "./games/game.service";
import { FormGroup, Validators, FormControl} from "@angular/forms";

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
        
        .table>tbody>tr>td {
            border-top: 0;
        }
        .topAlign {
            vertical-align: top;
        }
    `]
})
export class ScoreboardComponent implements OnInit {

    currentGame:Game;
    mouseClick:MouseEvent;
    displayValue:string = 'none';

    myForm:FormGroup;
    teamIndex:FormControl;
    playerIndex:FormControl;
    points:FormControl;
    madeIt:FormControl;



    constructor( private gameService:GameService){}

    ngOnInit(){
        this.currentGame = this.gameService.getCurrentGame();
        this.createFormControls();
        this.createForm();
    }

    createFormControls(){
        this.teamIndex = new FormControl('', Validators.required );
        this.playerIndex = new FormControl('', Validators.required );
        this.points = new FormControl('', Validators.required );
        this.madeIt = new FormControl('', Validators.required );
    }

    createForm(){
        this.myForm = new FormGroup({
            teamIndex: this.teamIndex,
            playerIndex: this.playerIndex,
            points: this.points,
            madeIt: this.madeIt
        });
    }

    registerClick( clickEvent:MouseEvent ){
        this.mouseClick = clickEvent;
        this.displayValue = 'block';
    }

    saveShot(){
        const svg = document.querySelector('svg');
        let mouseClickPosition = svg.createSVGPoint();
        mouseClickPosition.x = this.mouseClick.clientX;
        mouseClickPosition.y = this.mouseClick.clientY;

        const matrix = svg.getScreenCTM();
        let svgCoord = mouseClickPosition.matrixTransform(matrix.inverse());

        let shot:Shot = new Shot( this.myForm.value['teamIndex'], this.myForm.value['playerIndex'],  this.myForm.value['points'],  this.myForm.value['madeIt'], svgCoord.x, svgCoord.y);
        this.gameService.registerShot(shot);

        this.hideShotDialogue();
    }

    hideShotDialogue(){
        this.displayValue = 'none';
    }

}