import Ember from 'ember';

export default Ember.Component.extend({
	
	modelGroup: Ember.inject.service('configurator/modelselection/model-group'),

	actions: {
		setValue(option) {
			let modelGroup = Ember.get(this, 'modelGroup');
			modelGroup.setValue(option);
		}
	}

});
