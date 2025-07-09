import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environment'
import { Event } from '../entities/event.entity'

@Injectable({
  providedIn: 'root'
})
export class EventSourceService {
  constructor(protected http: HttpClient) {}

  fetch() {
    return this.http.get<Event[]>(`${environment.apiUrl}/api/events`)
  }

  add(title: string, date: string, description: string): Observable<Event> {
    return this.http.post<Event>(`${environment.apiUrl}/api/events`, {
      title,
      date,
      description
    })
  }

  update(id: string, title: string, description: string, date: string): Observable<Event> {
    console.log('Updating event:', { id, title, description, date })
    return this.http.patch<Event>(`${environment.apiUrl}/api/events/${id}`, {
      newName: title, // Changed from newName
      newDate: date, // Changed from newDate
      newDescription: description // Changed from newDescription
    })
  }

  remove(id: string): Observable<Event> {
    return this.http.delete<Event>(`${environment.apiUrl}/api/events/${id}`)
  }
}
