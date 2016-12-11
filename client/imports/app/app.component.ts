import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Party } from './../../../both/models/party.model';
import { Parties } from './../../../both/collections/parties.collection';

import template from './app.component.html';

@Component({
  selector: 'app-root',
  template
})
export class AppComponent {
  parties: Observable<Party[]>;

  constructor() {
    this.parties = Parties.find({}).zone();
  }

  removeParty(party: Party): void {
    Parties.remove(party._id);
  }
}
