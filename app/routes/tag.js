import Route from '@ember/routing/route';
import RSVP from 'rsvp';
export default Route.extend({
  model(){
    return RSVP.hash({
      projects:this.get('store').findAll('tag'),
      fields:['Name'],
      operations:[{icon:'red remove',link:'tag.delete'},{icon:'edit',link:'tag.update'}]
    });
  }
});
