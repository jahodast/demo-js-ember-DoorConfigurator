import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function(params) {
		return this.store.findRecord('post', params.post_id);
	},

	setupController(controller, model) {
		Ember.set(controller, 'post', model);
	}

});