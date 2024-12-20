import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LeaguesComponent } from './leagues.component';
import { LeaguesRoutingModule } from './leagues-routing.module';

@NgModule({
  declarations: [LeaguesComponent],
  imports: [
    CommonModule,
    FormsModule,
    LeaguesRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteModule,
  ],
  exports: [LeaguesComponent],
})
export class LeaguesModule {}
