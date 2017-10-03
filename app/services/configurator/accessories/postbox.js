import Ember from 'ember';

export default Ember.Service.extend({
	value: 			null,
	label: 			null,
	question: 		'Do you like to have a postbox?', 
	questionShort: 	'Postbox',
	tooltip: 		'Postbox is a hole where postman delivers letters ...',
	placeholder: 	'Select postbox ...',

	price: 			null,

	options:[
		{
			id: 	'1',
			label: 	'Rounded horizontal ASBC',
			price: 	15 
		}, {
			id: 	'2',
			label: 	'Squered horizontal ASBC',
			price: 	20 
		}
		, {
			id: 	'3',
			label: 	'Squered vertical ASBC',
			price: 	10 
		}, {
			id: 	'4',
			label: 	'Thin rvs ASBC',
			price: 	25 
		}
	],

	setValue(value) {
		this.set('value', value);
		let obj = this.get('options').findBy('id', value);
		this.set('label', obj.label);
		this.set('price', obj.price);
	},

	getValue() {
		return this.get('value');
	}

});
