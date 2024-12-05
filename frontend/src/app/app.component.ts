import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  selectedLeagueName: string = '';


  onLeagueSelected(leagueName: string): void {
    this.selectedLeagueName = leagueName;
  }
}
