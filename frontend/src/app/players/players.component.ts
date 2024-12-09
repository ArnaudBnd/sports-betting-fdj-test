import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
})
export class PlayersComponent implements OnInit {
  players: any[] = [];
  hasNoPlayers: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const teamId = this.route.snapshot.paramMap.get('id');
    if (teamId) {
      this.loadPlayers(teamId);
    }
  }

  loadPlayers(teamId: string): void {
    this.apiService.getPlayersByTeam(teamId).subscribe((response: any) => {
      this.players = response.players || [];
      this.hasNoPlayers = this.players.length === 0;
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
