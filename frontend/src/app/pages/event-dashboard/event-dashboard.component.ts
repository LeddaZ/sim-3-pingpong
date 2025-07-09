import { Component, OnDestroy, OnInit } from '@angular/core'
import { ReplaySubject, Subject, switchMap, takeUntil } from 'rxjs'
import { EventSourceService } from '../../services/event-source.service'

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html'
})
export class EventDashboardComponent implements OnInit, OnDestroy {
  showCompleted!: boolean

  protected destroyed$ = new Subject<void>()

  protected _events$ = new ReplaySubject<void>()
  events$ = this._events$.pipe(
    switchMap(() => this.eventSrv.fetch()),
    takeUntil(this.destroyed$)
  )

  constructor(protected eventSrv: EventSourceService) {}

  ngOnInit(): void {
    this._events$.next()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  addEvent(data: [string, string, string]) {
    this.eventSrv.add(data[0], data[1], data[2]).subscribe(() => {
      this._events$.next()
    })
  }

  updateEvent(data: [string, string, string, string]) {
    this.eventSrv
      .update(
        data[0], // id
        data[1], // title
        data[2], // description
        data[3] // date
      )
      .subscribe(() => {
        this._events$.next()
      })
  }

  delEvent(id: string) {
    this.eventSrv.remove(id).subscribe(() => {
      this._events$.next()
    })
  }
}
