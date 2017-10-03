import Ember from 'ember';

export default Ember.Controller.extend({
	glass: [
		{
			id: 1,
			name: 'Regular',
			description: 'Regular glass without any texture'
		}, {
			id: 2,
			name: 'Facet',
			description: 'Facet glass has angled edges'
		}, {
			id: 3,
			name: 'Leaded',
			description: 'Leaded glass has nice leaded mozaic pictures'
		}
	],

});
