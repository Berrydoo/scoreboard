import { RouterModule, Routes} from '@angular/router';
import {ScoreboardContainerComponent} from "./scoreboard-container.component";
import {EditTeamsComponent} from "./edit-teams.component";


const APP_ROUTES:Routes = [
    {path:'', redirectTo:'/keepscore', pathMatch:'full' },
    {path:'keepscore', component:ScoreboardContainerComponent},
    {path:'editTeams', component:EditTeamsComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTES);