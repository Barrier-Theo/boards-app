import Route from '@ember/routing/route';
import EmberObject from '@ember/object';
import RSVP from 'rsvp';
import Ember from 'ember';


export default Route.extend({
  model(params){
    return RSVP.hash({
      colors:['black','blue','green','orange','pink','purple','red','teal','yellow','positive','negative'],
    });
  },
  actions:{
    didTransition() {
      Ember.run.next(this, 'initUI');
    },
    save(oldTag, newTag){
      let model = this.modelFor(this.routeName);
      let newColor = model.color;
      newTag = this.get('store').createRecord('tag',{color: newColor, title: newTag.title});

      let self=this;
      newTag.save().then(()=>{
        this.transitionTo("tags");
    });
    },
    cancel(){
      this.transitionTo("tags");
    },
  }
  ,
  initUI() {
    Ember.$('.ui.dropdown').dropdown();
  }
});
