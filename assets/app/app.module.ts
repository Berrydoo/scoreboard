import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header.component";
import {GameService} from "./games/game.service";
import {ROUTING} from "./client_root.router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ScoreboardComponent} from "./scoreboard.component";
import {PlayerListComponent} from "./player-list.component";
import {PlayerComponent} from "./player.component";
import {TeamInfoComponent} from "./team-info.component";
import {ScoreboardContainerComponent} from "./scoreboard-container.component";
import {EditTeamsComponent} from "./edit-teams.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ScoreboardComponent,
        PlayerListComponent,
        PlayerComponent,
        TeamInfoComponent,
        ScoreboardContainerComponent,
        EditTeamsComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        ROUTING
    ],
    providers: [GameService],
    bootstrap: [AppComponent]
})
export class AppModule {

}