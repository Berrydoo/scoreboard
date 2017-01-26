import {Component, OnInit} from "@angular/core";
import {Game} from "./games/game.model";
import {GameService} from "./games/game.service";


@Component({
    selector:'scoreboard-container',
    template:`
    <div class="row">
        <div class="col-md-2">
            <team-info [team]="currentGame?.teams[0]"></team-info>
        </div>
        <div class="col-md-10">
            <player-list [team]="currentGame?.teams[0]"></player-list>
        </div>
    </div>
    <div class="row">
        <div class="col-md-2">
            <team-info [team]="currentGame?.teams[1]"></team-info>
        </div>
        <div class="col-md-10">
            <player-list [team]="currentGame?.teams[1]" ></player-list>
        </div>
    </div>
    <div class="row">
        <div class="col-md-8 col-md-offset-2">
            <scoreboard></scoreboard>
        </div>
    </div>
`
})
export class ScoreboardContainerComponent implements OnInit{

    currentGame:Game;

    constructor( private gameService:GameService ){}

    ngOnInit(){
        this.gameService.createGame();
        this.currentGame = this.gameService.getCurrentGame();
    }

}