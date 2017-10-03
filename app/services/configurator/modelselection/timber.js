import Ember from 'ember';

export default Ember.Service.extend({
	value: 			null,
	label: 			null,
	question: 		'What timber should be used?',
	questionShort: 	'Timber', 
	tooltip: 		'Every timber has different characteristics, but you have to find out yourself',
	placeholder: 	'Select timber ...',

	price: 			null,

	options: [
		{
			id: 	'0',
			label: 	'Merbau',
			price: 	40
		},{
			id: 	'1',
			label: 	'Meranti',
			price: 	20
		}
		,{
			id: 	'2',
			label: 	'Spruce',
			price: 	0
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
