import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addDoorModel: function(){
		
			var label = this.get('label');
			var description = this.get('description');
			var modelGroup = this.get('modelGroup');

			//Create New door model
			var newDoorModel = this.store.createRecord('door-model', {
				label: label,
				description: description,
				modelGroup: modelGroup
			});

			//Save to Database
			newDoorModel.save();
			
			//Clear Form
			this.setProperties({
				label: '',
				description: '',
				modelGroup: ''
			});				

			//alert(label + description);
			
		}
	}
});
