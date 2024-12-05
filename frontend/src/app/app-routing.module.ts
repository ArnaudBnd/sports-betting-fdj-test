import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';
import { TeamsComponent } from './teams/teams.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  { path: '', component: LeaguesComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'players/:id', component: PlayersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
