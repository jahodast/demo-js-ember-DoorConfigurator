import Ember from 'ember';

export default Ember.Route.extend({
	
	model: function(params){
		return this.store.query('post', {userId: params.user_id })
	},

	setupController(controller, model) {
		Ember.set(controller, 'posts', model);
	}
});
