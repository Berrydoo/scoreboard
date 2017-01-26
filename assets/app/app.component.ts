import {Component, OnInit} from '@angular/core';
import {Game, Shot} from "./games/game.model";
import {GameService} from "./games/game.service";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

    currentGame:Game;

    constructor( private gameService:GameService ){}

    ngOnInit(){
        this.gameService.createGame();
        this.currentGame = this.gameService.getCurrentGame();
    }

    registerShot( shot:Shot ){
        console.log('register shot: ', shot );
    }
}