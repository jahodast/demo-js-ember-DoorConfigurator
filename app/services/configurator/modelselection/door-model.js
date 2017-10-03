import Ember from 'ember';

export default Ember.Service.extend({
	value: 				null,
	label: 				null,
	question: 			'What door model do you like?', 
	questionShort: 		'Door model', 
	tooltip: 			'Choose one of these beautiful models. Hopefully, we will add vizualization soon ...',
	placeholder: 		'Select door model ...',
	description: 		null, 
	descriptionCommon: 	'The model is so nice, do not hesitate to buy it.',
	promoted: 			false, 
	price: 				null,

	options: [
		{
			id: 			'1',
			label: 			'Amelie',
			description: 	'Interior door with nice profile',
			modelGroup: 	'0',
			price: 			350,
			image: 			'6512.jpg',
			promoted: 		false 
		},{
			id: 			'2',
			label: 			'Bella',
			description: 	'Interior door with even nicer profile',
			modelGroup: 	'0',
			price: 			250,
			image: 			'6513.jpg',
			promoted: 		true
		}
		,{
			id: 			'3',
			label: 			'Cecilia',
			description: 	'Glass and profile is the most important choice, otherwice it is sort of boring interior model',
			modelGroup: 	'0',
			price: 			450,
			image: 			'6502.jpg',
			promoted: 		false
		}, {
			id: 			'4',
			label: 			'Daniella',
			description: 	'Exterior door with nice ornament',
			modelGroup: 	'1',
			price: 			150,
			image: 			'1114.jpg',
			promoted: 		true
		}, {
			id: 			'5',
			label: 			'Eleanor',
			description: 	'Dual exterior door with two rainbreakers',
			modelGroup: 	'1',
			price: 			550,
			image: 			'1433.jpg',
			promoted: 		true
		}
	],

	imagePath: Ember.computed('id','image', {
		get() {
			return "images/doormodels/" + Ember.get(this, 'image'); 
		}
	}),

	setValue(value) {
		this.set('value', value);
		let obj = this.get('options').findBy('id', value);
		this.set('label', obj.label);
		this.set('price', obj.price);
		this.set('description', obj.description);
		this.set('image', obj.image);
		this.set('promoted', obj.promoted);
	},

	getValue() {
		return this.get('value');
	}
	

});