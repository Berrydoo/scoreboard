import {Component, Input} from '@angular/core';
import {Team} from "./games/game.model";

@Component({
    selector: 'team-info',
    templateUrl:'./team-info.component.html',
    styles:[`
        input {
            width: 85%;
        }
    `]
})
export class TeamInfoComponent {

    @Input() team:Team;
    isEditing:boolean = false;

    editTeamName(){
        this.isEditing = true;
    }

    saveTeamName(){
        this.isEditing = false;
    }

}