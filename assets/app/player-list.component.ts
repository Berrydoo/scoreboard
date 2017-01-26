import {Component, Input} from "@angular/core";
import {Team} from "./games/game.model";



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
            min-width: 150px;
        }
    `]
})
export class PlayerListComponent {

    @Input() team:Team;

    constructor(){}

}