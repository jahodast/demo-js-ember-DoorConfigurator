import Ember from 'ember';

export default Ember.Component.extend({
	postbox: Ember.inject.service('configurator/accessories/postbox'),

	actions: {
		setValue(option) {
			let postbox = Ember.get(this, 'postbox');
			postbox.setValue(option);
		}
	}
});
