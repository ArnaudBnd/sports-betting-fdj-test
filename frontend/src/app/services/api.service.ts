import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAutocompleteSuggestions(query: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/leagues/autocomplete`, {
      params: { query },
    });
  }

  getTeamsByLeague(leagueName: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/leagues/search?name=${leagueName}`);
  }
}
