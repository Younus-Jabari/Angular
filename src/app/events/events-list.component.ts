import { Component } from '@angular/core';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr />
      <event-thumbnail [event]="event1"></event-thumbnail>
    </div>
  `,
})

// eventClick has to match the evenClick Output in the Child Component.
// event1 has to match the event1 in the parent.
// event has to match the event Input in the Child Component.
export class EventsListComponent {
  handleEventClicked(data) {
    console.log('recieved: ', data);
  }
  event1 = {
    id: 1,
    name: 'Angular Connnect',
    date: '09/26/2036',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect-schield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  };
}
