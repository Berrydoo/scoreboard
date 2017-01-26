import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {HeaderComponent} from "./header.component";
import {GameService} from "./games/game.service";
//import {ROUTING} from "./client_root.router";
import {FormsModule} from "@angular/forms";
import {ScoreboardComponent} from "./scoreboard.component";
import {PlayerListComponent} from "./player-list.component";
import {PlayerComponent} from "./player.component";
import {TeamInfoComponent} from "./team-info.component";

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        ScoreboardComponent,
        PlayerListComponent,
        PlayerComponent,
        TeamInfoComponent
    ],
    imports: [
        BrowserModule,
        FormsModule
        // ROUTING
    ],
    providers: [GameService],
    bootstrap: [AppComponent]
})
export class AppModule {

}