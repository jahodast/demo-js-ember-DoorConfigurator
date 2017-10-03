import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		editDoorModel: function(id){
			var self = this;

			var label = this.get('model.label');
			var description = this.get('model.description');

			//Update door model
			this.store.findRecord('door-model', id).then(function(doorModel){
				doorModel.set('label', label);
				doorModel.set('description', description);
				
				//Save to Database
				doorModel.save();

				self.transitionToRoute('door-models');

			});

		}
	}
});
