import { Component, OnDestroy, OnInit } from '@angular/core'
import { ReplaySubject, Subject, switchMap, takeUntil } from 'rxjs'
import { MatchService } from '../../services/match.service'

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html'
})
export class MatchesComponent implements OnInit, OnDestroy {
  protected destroyed$ = new Subject<void>()

  protected _matches$ = new ReplaySubject<void>()
  matches$ = this._matches$.pipe(
    switchMap(() => this.matchSrv.fetch()),
    takeUntil(this.destroyed$)
  )

  constructor(protected matchSrv: MatchService) {}

  ngOnInit(): void {
    this._matches$.next()
  }

  ngOnDestroy(): void {
    this.destroyed$.next()
    this.destroyed$.complete()
  }
}
