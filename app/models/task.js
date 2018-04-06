import DS from 'ember-data';

export default DS.Model.extend({
  content:DS.attr('string'),
  toString:function(){
    return this.get('content');
  }
});
