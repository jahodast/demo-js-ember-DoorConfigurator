import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		addModelGroup: function(){
		
			var label = this.get('label');
			var description = this.get('description');
			
			//Create New Model group
			var newModelGroup = this.store.createRecord('model-group', {
				label: label,
				description: description
			});

			//Save to Database
			newModelGroup.save();
			
			//Clear Form
			this.setProperties({
				label: '',
				description: ''
			});				

			//alert(label + description);
			
		}
	}
});
