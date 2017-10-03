import Ember from 'ember';

export default Ember.Component.extend({
	glass: Ember.inject.service('configurator/accessories/glass'),

	actions: {
		setValue(option) {
			let glass = Ember.get(this, 'glass');
			glass.setValue(option);
		}
	}
});