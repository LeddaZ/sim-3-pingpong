import { ComponentFixture, TestBed } from '@angular/core/testing'

import { EventItemLiteComponent } from './event-item-lite.component'

describe('EventItemLiteComponent', () => {
  let component: EventItemLiteComponent
  let fixture: ComponentFixture<EventItemLiteComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventItemLiteComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(EventItemLiteComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
