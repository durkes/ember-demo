import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		editItem: function () {
			this.toggleProperty('isEditing');
		},
		editDone: function () {
			this.toggleProperty('isEditing');
		}
	}
});