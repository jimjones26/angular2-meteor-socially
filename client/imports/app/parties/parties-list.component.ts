import { InjectUser } from 'angular2-meteor-accounts-ui';
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Parties } from '../../../../both/collections/parties.collection';
import { Party } from '../../../../both/models/party.model';

import template from './parties-list.component.html';

@Component({
  selector: 'app-parties-list',
  template
})
@InjectUser('user')
export class PartiesListComponent {
  parties: Observable<Party[]>;
  user: Meteor.User;

  constructor() {
    this.parties = Parties.find({}).zone();
  }

  removeParty(party: Party): void {
    Parties.remove(party._id);
  }
}
