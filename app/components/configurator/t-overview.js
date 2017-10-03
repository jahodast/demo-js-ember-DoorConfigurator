import Ember from 'ember';

export default Ember.Component.extend({

	modelGroup: Ember.inject.service('configurator/modelselection/model-group'),
	doorModel: 	Ember.inject.service('configurator/modelselection/door-model'),
	timber: 	Ember.inject.service('configurator/modelselection/timber'),
	glass: 		Ember.inject.service('configurator/accessories/glass'),
	postbox: 	Ember.inject.service('configurator/accessories/postbox'),

	sumPrice: 	null,

	willRender() {
		
		let modelGroup = Ember.get(this, 'modelGroup');
		let doorModel = Ember.get(this, 'doorModel');
		let timber = Ember.get(this, 'timber');
		let glass = Ember.get(this, 'glass');
		let postbox = Ember.get(this, 'postbox');
		
		let newSumPrice = 
			modelGroup.price + 
			doorModel.price + 
			timber.price +
			glass.price +
			postbox.price;

		this.set('sumPrice', newSumPrice); //my second day with git - changed code
	}
	
});
