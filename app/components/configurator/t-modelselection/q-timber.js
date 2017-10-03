import Ember from 'ember';

export default Ember.Component.extend({
	timber: Ember.inject.service('configurator/modelselection/timber'),

	actions: {
		setValue(option) {
			let timber = Ember.get(this, 'timber');
			timber.setValue(option);
		}
	}
});
