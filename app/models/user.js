import DS from 'ember-data';
import Ember from 'ember';

const { 
	attr,
	hasMany
} = DS;

const {
	computed,
	get,
	set
} = Ember;

export default DS.Model.extend({
	post: hasMany('post'),

	name: attr('string'),
	username: attr('string'),
	email: attr('string'),
	phone: attr('string'),
	website: attr('string'),
	income: 50000,
	contribution: 5000,

	fullname: computed('name','username', {
		get() {
			return get(this, 'name') + " " + get(this, 'username'); 
		}
	}),

	contributionPerc: computed('contribution', 'income', {
		get() {
			let contribution = get(this, 'contribution');
			let income = get(this, 'income');
			return (contribution / income * 100).toFixed(2);
		},
		set(key, value) {
			let newContribution = value / 100 * get(this, 'income');
			set(this, 'contribution', newContribution);
			return value;
		}
	})



});
