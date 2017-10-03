import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		deleteDoorModel: function(id){
			this.store.findRecord('door-model', id).then(function(doorModel){
				doorModel.deleteRecord();
				doorModel.save();
			});
		}
	}
});