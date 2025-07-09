import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs'
import { Match } from '../entities/match.entity'

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  constructor(private http: HttpClient) {}

  fetch() {
    return this.http.get<any[]>(`${environment.apiUrl}/api/matches`)
  }

  add(date: string, playerA: string, playerB: string): Observable<Match> {
    return this.http.post<Match>(`${environment.apiUrl}/api/matches`, {
      date,
      playerA,
      playerB,
      scoreA: 0,
      scoreB: 0,
      played: false
    })
  }

  update(
    id: string,
    date: string,
    playerA: string,
    playerB: string,
    scoreA: number,
    scoreB: number,
    played: boolean
  ): Observable<Match> {
    return this.http.patch<Match>(`${environment.apiUrl}/api/matches/${id}`, {
      date,
      playerA,
      playerB,
      scoreA,
      scoreB,
      played
    })
  }
}
