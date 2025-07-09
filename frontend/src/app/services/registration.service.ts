import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { environment } from '../../environments/environment'
import { Registration } from '../entities/registration.entity'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(protected http: HttpClient) {}

  fetch() {
    return this.http.get<Registration[]>(`${environment.apiUrl}/api/registrations`)
  }

  add(user: string, event: string): Observable<Registration> {
    return this.http.post<Registration>(`${environment.apiUrl}/api/registrations`, {
      user,
      event
    })
  }

  checkRegistration(userId: string): Observable<Registration[]> {
    return this.http.get<Registration[]>(`${environment.apiUrl}/api/registrations/${userId}`, {})
  }

  getRegistrationsForUser(userId: string): Observable<Registration[]> {
    return this.http.get<Registration[]>(`${environment.apiUrl}/api/registrations/${userId}`)
  }
}
