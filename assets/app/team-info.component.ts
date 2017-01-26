import {Component, Input} from '@angular/core';
import {Team} from "./games/game.model";

@Component({
    selector: 'team-info',
    template:`
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">
                {{team.teamName}}
            </h3>        
        </div>
        <div class="panel-body">
            {{ team.score() }}&nbsp;pts<br/>
            {{ team.numberOfMadeShots()}}/{{ team.numberOfShots()}} ({{team.shotMadePct().toFixed(0)+'%'}})
        </div>
    </div>
    `
})
export class TeamInfoComponent {

    @Input() team:Team;

}