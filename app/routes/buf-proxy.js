import Route from '@ember/routing/route';
import BufferedProxy from 'ember-buffered-proxy/proxy';
import { getOwner } from '@ember/application';
import { Validations } from 'ember-cp-buffered-validations/models/user';

export default Route.extend({
  model() {
    let user = this.store.createRecord('user');
    let owner = getOwner(this);
    return BufferedProxy.extend(Validations).create(owner.ownerInjection(), {
      content: user
    });
  }
});

