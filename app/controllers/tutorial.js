import Ember from 'ember';

export default Ember.Controller.extend({
	users: [
		{
			id: 1,
			name: 'Bob',
			occupation: 'Plumber'
		}, {
			id: 2,
			name: 'Lisa',
			occupation: 'Lawyer'
		}, {
			id: 3,
			name: 'Sheryl',
			occupation: 'Bitch'
		}
	],

	actions: {
		testAction() {
			alert('Hey there');
		}
	}


});
