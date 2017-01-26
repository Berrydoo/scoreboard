
import {Component, Input} from "@angular/core";
import {Player, Team} from "./games/game.model";
import {GameService} from "./games/game.service";
@Component({
    selector: 'player',
    template:`
<div class="panel panel-default" *ngIf="isEditing == false">
    <div class="panel-heading">
        <h3 class="panel-title">
            {{player.playerName}}<br/># {{player.jerseyNumber}}
                <!--<i class="glyphicon glyphicon-pencil" (click)="editPlayer()"></i>-->
                <!--<i class="glyphicon glyphicon-remove" (click)="editPlayer()"></i>-->
        </h3>        
    </div>
    <div class="panel-body">
        {{player.score()}} pts<br/>
        {{player.numberOfMadeShots()}}/{{ player.numberOfShots()}} ({{player.shotMadePct().toFixed(0)+'%'}})
    </div>
</div>
<div class="panel panel-default" *ngIf="isEditing == true">
    <div class="panel-heading">
        <h3 class="panel-title">
            <span class="pull-left">{{player.playerName}}, Number #{{player.jerseyNumber}}</span>
            <span class="pull-right">
                <i class="glyphicon glyphicon-save" (click)="savePlayer()"></i>
            </span>
        </h3>                    
    </div>
    <div class="panel-body">
        <input type="text" 
            [(ngModel)]="player.playerName" 
            name="player.playerName" 
            id="playerName" 
            placeholder="Player Name" 
            style="width:90px;"/> 
            
        <input type="number" 
            [(ngModel)]="player.jerseyNumber" 
            name="player.jerseyNumber" 
            id="jerseyNumber" 
            placeholder="Jersey Number" 
            maxlength="2" max="99" min="0"/>
    </div>
</div>
`
})
export class PlayerComponent {

    @Input() team:Team;
    @Input() player:Player;

    constructor( private gameService:GameService){}

    isEditing:boolean = false;

    editPlayer(){
        this.isEditing = true;

    }

    savePlayer(){
        this.isEditing = false;
        this.gameService.updatePlayer( this.team, this.player);
    }

}