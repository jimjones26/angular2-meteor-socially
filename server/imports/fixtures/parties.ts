import { Party } from './../../../both/models/party.model';
import { Parties } from './../../../both/collections/parties.collection';

export function loadParties() {
  if (Parties.find().cursor.count() === 0) {
    const parties: Party[] = [
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

    parties.forEach((party: Party) => Parties.insert(party));
  }
}
