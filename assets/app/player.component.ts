import {Component, Input} from "@angular/core";
import {Player, Team} from "./games/game.model";

@Component({
    selector: 'player',
    template:`
<div class="panel panel-default">
    <div class="panel-heading">
        <h3 class="panel-title">
            {{player.playerName}}: #{{player.jerseyNumber}}
        </h3>        
    </div>
    <div class="panel-body">
        {{player.score()}} pts<br/>
        {{player.numberOfMadeShots()}}/{{ player.numberOfShots()}} ({{player.shotMadePct().toFixed(0)+'%'}})
    </div>
</div>
`
})
export class PlayerComponent {

    @Input() team:Team;
    @Input() player:Player;

    constructor(){}

}