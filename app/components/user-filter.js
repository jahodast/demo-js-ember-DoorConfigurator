import Ember from 'ember';

const {
	get,
	set
} = Ember;

export default Ember.Component.extend({
	tagName: 'form',
	firstName: null,
	users: null,	
	filteredUsers: null,

	didReceiveAttrs() {
		this._super(...arguments);
		let users = get(this, 'users');
		set(this, 'filteredUsers', users);
	},

	actions: {
		filterListOfUsers() {
			let firstName = get(this, 'firstName');
			let users = get(this, 'users');
			let narrowedUserList = users.findBy('name', firstName);
			if (narrowedUserList) {
				set(this, 'filteredUsers', [ narrowedUserList ]);
			} else {
				set(this, 'filteredUsers', users);
			}
		},
		newTest() {
			let heyThere = get(this, 'heyThere');
			heyThere();
		}
	}



});

