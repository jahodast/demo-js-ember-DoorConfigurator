import Ember from 'ember';

export default Ember.Controller.extend({
	modelGroup: Ember.inject.service('configurator/modelselection/model-group'),

	actions: {
		setAnswer(param) {
			let modelGroup = Ember.get(this, 'configurator/modelselection/model-group');
			modelGroup.setAnswer(param);
		}
	}
	

	//answer = modelGroup.getAnswer();
});
