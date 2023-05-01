import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <div class="row">
        <div *ngFor="let ev of eventsList" class="col-md-5">
          <event-thumbnail [event]="ev"></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})

// eventClick has to match the evenClick Output in the Child  Component.
// event1 has to match the event1 in the parent.
// event has to match the event Input in the Child Component.
export class EventsListComponent implements OnInit {
  eventsList: any[];
  constructor (private eventService:EventService){
    console.log("cons")
  }

  ngOnInit(){
    console.log("ngOnInit")
    this.eventsList = this.eventService.getEvents();
  }
}
