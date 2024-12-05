import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
})
export class TeamsComponent implements OnChanges {
  @Input() leagueName: string = '';
  teams: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.leagueName) {
      this.loadTeams();
    }
  }

  loadTeams(): void {
    this.apiService.getTeamsByLeague(this.leagueName).subscribe((response) => {
      this.teams = response[0]?.teams || [];
    });
  }
}
