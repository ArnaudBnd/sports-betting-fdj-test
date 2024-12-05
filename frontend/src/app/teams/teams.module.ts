import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [TeamsComponent],
})
export class TeamsModule {}
