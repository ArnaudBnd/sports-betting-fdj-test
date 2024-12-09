import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'leagues',
    pathMatch: 'full',
  },
  {
    path: 'leagues',
    loadChildren: () =>
      import('./leagues/leagues.module').then((m) => m.LeaguesModule),
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./players/players.module').then((m) => m.PlayersModule),
  },
  { path: 'error', component: ErrorComponent },
  {
    path: '**',
    redirectTo: 'leagues',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
