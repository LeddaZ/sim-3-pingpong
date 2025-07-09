import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Match } from '../../entities/match.entity'
import { MatchService } from '../../services/match.service'

@Component({
  selector: 'app-edit-match-modal',
  templateUrl: './edit-match-modal.component.html'
})
export class EditMatchModalComponent {
  minDate = Date()
  date!: string

  @Input() match!: Match

  @Output() editEvent = new EventEmitter<[string, string]>()

  constructor(protected matchSrv: MatchService) {}

  edit() {
    this.editEvent.emit([this.match.id, this.date])
  }

  onDateChange(date: string) {
    this.date = date
  }

  reset() {
    this.date = ''
  }
}
