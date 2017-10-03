import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Service.extend({
	value: 			null,
	label: 			null,
	question: 		'Where do you need your door?',
	questionShort: 	'Model group', 
	tooltip: 		'If you don\'t know difference between Interior and Exterior door, we do not want you to order anything',
	placeholder: 	'Select model group ...',

	price: 			null,

	options: [
		{
			id: 	'0',
			label: 	'Interior',
			price:  0
		},{
			id: 	'1',
			label: 	'Exterior',
			price:  0
		}
	],

	setValue(value) {
		this.set('value', value);
		let obj = this.get('options').findBy('id', value);
		this.set('label', obj.label);
		this.set('price', obj.price);
	},

	getValue(){
		return this.get('value');
	}

});
