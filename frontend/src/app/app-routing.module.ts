import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';
import { PlayersComponent } from './players/players.component';

const routes: Routes = [
  { path: '', component: LeaguesComponent },
  { path: 'players/:id', component: PlayersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
