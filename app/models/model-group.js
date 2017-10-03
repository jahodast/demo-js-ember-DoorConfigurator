import DS from 'ember-data';
//import Ember from 'ember';

export default DS.Model.extend({
	label: 			DS.attr('string'),
	description: 	DS.attr('string'),
	doorModels: 	DS.hasMany('door-model', {async: true}), 
	created: DS.attr('string', {
		defaultValue: function(){
			return new Date();
		}
	})
});
