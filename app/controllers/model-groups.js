import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		deleteModelGroup: function(id){
			this.store.findRecord('model-group', id).then(function(modelGroup){
				modelGroup.deleteRecord();
				modelGroup.save();
			});
		}
	}
});
