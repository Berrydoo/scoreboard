import {Component, Input} from "@angular/core";
import {Team, Player, Shot} from "./games/game.model";
import {GameService} from "./games/game.service";


@Component({
    selector:'player-list',
    templateUrl:'./player-list.component.html',
    styles:[`
        .horizontal-scroll {
            width:100%;
            overflow-x: scroll;
        } 
        .horizontal-list {
            display:flex; 
            flex-direction: row; 
            justify-content: flex-start;
        }
        .list-group-item {
            padding: 0 5px;
            border: 0;
        }
    `]
})
export class PlayerListComponent {

    @Input() team:Team;

    constructor( private gameService:GameService){}

    addPlayer(){

        let index:number = this.team.players.length + 1;
        let playerName:string = 'Player ' + index;
        let player:Player = new Player(playerName, index, new Array<Shot>() );
        this.gameService.addPlayerToTeam( this.team, player)

    }

}