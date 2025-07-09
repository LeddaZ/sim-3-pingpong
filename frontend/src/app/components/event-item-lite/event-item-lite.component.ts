import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { Event } from '../../entities/event.entity'
import { EventSourceService } from '../../services/event-source.service'
import { AuthService } from '../../services/auth.service'
import Swal from 'sweetalert2-neutral'
import { RegistrationService } from '../../services/registration.service'

@Component({
  selector: 'app-event-item-lite',
  templateUrl: './event-item-lite.component.html',
  styleUrl: './event-item-lite.component.css'
})
export class EventItemLiteComponent implements OnInit {
  @Input()
  event!: Event

  user = this.authSrv.currentUser$
  isUserSignedUp: boolean = false

  @Output() signUp = new EventEmitter<[string, string]>()

  currentUserId: string | undefined

  constructor(
    protected eventSrv: EventSourceService,
    protected authSrv: AuthService,
    protected registrationSrv: RegistrationService
  ) {
    this.authSrv.currentUser$.subscribe((user) => {
      this.currentUserId = user?.id
    })
  }

  ngOnInit(): void {
    if (this.currentUserId && this.event?.id) {
      this.registrationSrv
        .getRegistrationsForUser(this.currentUserId)
        .subscribe((userRegistrations) => {
          this.isUserSignedUp = userRegistrations.some(
            (reg) => (reg.event as unknown as Event).id === this.event.id
          )
        })
    }
    console.log(this.isUserSignedUp)
  }

  onSignUp(eventData: [string, string]) {
    this.signUp.emit(eventData)
    Swal.fire({
      title: 'Registration successful',
      text: 'You have successfully registered for the event.',
      icon: 'success',
      confirmButtonText: 'OK'
    })
  }
}
