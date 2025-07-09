import { Component, OnDestroy, OnInit } from '@angular/core'
import { ReplaySubject, Subject, switchMap, takeUntil } from 'rxjs'
import { MatchService } from '../../services/match.service'

@Component({
  selector: 'app-manage-matches',
  templateUrl: './manage-matches.component.html'
})
export class ManageMatchesComponent implements OnInit, OnDestroy {
  protected destroyed$ = new Subject<void>()

  protected _matches$ = new ReplaySubject<void>()
  matches$ = this._matches$.pipe(
    switchMap(() => this.matchSrv.fetch()),
    takeUntil(this.destroyed$)
  )

  constructor(protected matchSrv: MatchService) {}

  addMatch(data: [string, string, string]) {
    this.matchSrv.add(data[0], data[1], data[2]).subscribe(() => {
      this._matches$.next()
    })
  }

  ngOnInit(): void {
    this._matches$.next()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }

  onEditEvent(eventData: [string, string, string, string, number, number, boolean]) {
    console.log(eventData)
    this.matchSrv
      .update(
        eventData[0],
        eventData[1],
        eventData[2],
        eventData[3],
        eventData[4],
        eventData[5],
        eventData[6]
      )
      .subscribe(() => {
        this._matches$.next()
      })
  }
}
