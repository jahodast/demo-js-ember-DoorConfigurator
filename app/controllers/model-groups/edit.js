import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		editModelGroup: function(id){
			var self = this;

			var label = this.get('model.label');
			var description = this.get('model.description');

			//Update Model group
			this.store.findRecord('model-group', id).then(function(modelGroup){
				modelGroup.set('label', label);
				modelGroup.set('description', description);
				
				//Save to Database
				modelGroup.save();

				self.transitionToRoute('model-groups');

			});

		}
	}
});
