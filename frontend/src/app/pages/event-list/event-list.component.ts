import { Component, OnDestroy, OnInit } from '@angular/core'
import { ReplaySubject, Subject, switchMap, takeUntil } from 'rxjs'
import { EventSourceService } from '../../services/event-source.service'
import { RegistrationService } from '../../services/registration.service'

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html'
})
export class EventListComponent implements OnInit, OnDestroy {
  showCompleted!: boolean

  protected destroyed$ = new Subject<void>()

  protected _events$ = new ReplaySubject<void>()
  events$ = this._events$.pipe(
    switchMap(() => this.eventSrv.fetch()),
    takeUntil(this.destroyed$)
  )

  constructor(
    protected eventSrv: EventSourceService,
    protected registrationSrv: RegistrationService
  ) {}

  ngOnInit(): void {
    this._events$.next()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  newRegistration(data: [string, string]) {
    this.registrationSrv.add(data[0], data[1]).subscribe(() => {
      this._events$.next()
    })
  }
}
