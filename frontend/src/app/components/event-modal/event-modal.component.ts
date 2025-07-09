import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html'
})
export class EventModalComponent {
  minDate = Date()
  title!: string
  description!: string
  date!: string

  @Output() addEvent = new EventEmitter<[string, string, string]>()

  constructor() {}

  add() {
    this.addEvent.emit([this.title, this.date, this.description])
  }

  onDateChange(date: string) {
    this.date = date
  }

  reset() {
    this.title = ''
  }
}
