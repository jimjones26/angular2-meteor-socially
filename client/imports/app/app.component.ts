import { Component } from '@angular/core';

import template from './app.component.html';

@Component({
  selector: 'app',
  template
})
export class AppComponent {
  parties: any[];

  constructor() {
    this.parties = [
      {
        'name': 'Dubstep-Free Zone',
        'description': 'Can we please just for an evening not listen to dubstep.',
        'location': 'Palo Alto'
      },
      {
        'name': 'All Dubstep All The Time',
        'description': 'Get it on!',
        'location': 'Palo Alto'
      },
      {
        'name': 'Savage Lounging',
        'description': 'Leisure suit required. And only fiercest manners.',
        'location': 'San Francisco'
      }
    ];
  }
}