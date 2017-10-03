import Ember from 'ember';

export default Ember.Service.extend({
	value: 			null,
	label: 			null,
	question: 		'What glass do you like?', 
	questionShort: 	'Glass',
	tooltip: 		'Choose type of glass. If you are lucky, we deliver something similar ...',
	placeholder: 	'Select glass ...',

	price: 			null,

	options:[
		{
			id: 		'0',
			label: 		'Regular',
			price: 		40 
		},{
			id: 		'1',
			label: 		'Facet',
			price: 		55
		}
		,{
			id: 		'2',
			label: 		'Leaded',
			price: 		85
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
