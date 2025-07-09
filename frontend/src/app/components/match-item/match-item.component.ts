import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Match } from '../../entities/match.entity'

@Component({
  selector: 'app-match-item',
  templateUrl: './match-item.component.html'
})
export class MatchItemComponent {
  @Input()
  match!: Match

  @Input()
  isOrganizer: boolean = false

  @Output() editEvent = new EventEmitter<
    [string, string, string, string, number, number, boolean]
  >()

  constructor() {}

  onEditEvent(eventData: [string, string, string, string, number, number, boolean]) {
    this.editEvent.emit(eventData)
  }
}
