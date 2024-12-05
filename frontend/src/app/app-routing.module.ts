import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeaguesComponent } from './leagues/leagues.component';

const routes: Routes = [
  { path: '', redirectTo: 'leagues', pathMatch: 'full' },
  { path: 'leagues', component: LeaguesComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
