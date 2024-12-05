import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
})
export class LeaguesComponent implements OnInit {
  @Output() leagueSelected = new EventEmitter<string>();
  searchControl = new FormControl();
  filteredSuggestions: string[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((query) => {
          if (!query.trim()) {
            return [];
          }
          return this.apiService.getAutocompleteSuggestions(query);
        })
      )
      .subscribe((suggestions) => {
        this.filteredSuggestions = suggestions || [];
      });
  }

  onOptionSelected(event: any): void {
    const selectedLeague = event.option.value;
    this.leagueSelected.emit(selectedLeague);
  }
}
