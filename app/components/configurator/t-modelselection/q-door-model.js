import Ember from 'ember';

export default Ember.Component.extend({
	
	doorModel: Ember.inject.service('configurator/modelselection/door-model'),

	actions: {
		setValue(option) {
			let doorModel = Ember.get(this, 'doorModel');
			doorModel.setValue(option);
		}

	}

/*


	doorModels: [
		{
			id: 		'1',
			label: 		'Amelie',
			modelGroup: '0' 
		},{
			id: 		'2',
			label: 		'Bella',
			modelGroup: '0'
		}
		,{
			id: 		'3',
			label: 		'Cecilia',
			modelGroup: '0'
		}, {
			id: 		'4',
			label: 		'Daniella',
			modelGroup: '1'
		}, {
			id: 		'5',
			label: 		'Eleanor',
			modelGroup: '1'
		}
	],

	didReceiveAttrs() {
		this._super(...arguments);
		let narrowedModel = this.doorModels.findBy('modelGroup', '1');
		//set(this, 'filteredModels', [ narrowedModel ]);
	}
*/	
});