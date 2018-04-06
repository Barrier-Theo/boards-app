import DS from 'ember-data';

export default DS.Model.extend({
  title:DS.attr('string'),
  toString:function(){
    return this.get('content');
  }
});
