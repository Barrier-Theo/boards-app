import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  model(){
    return RSVP.hash({
      tasks:this.get('store').findAll('task'),
      fields:['content'],
      operations:[{icon:'red remove',link:'tasks.delete'},{icon:'edit',link:'tasks.update'}]
    });
  }
});
