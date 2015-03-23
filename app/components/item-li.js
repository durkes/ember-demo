import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	actions: {
		editItem: function () {
			this.toggleProperty('isEditing');
		},
		editDone: function () {
			this.toggleProperty('isEditing');
		},
		deleteItem: function () {
			var models = this.get('models');
			models.removeObject(this.get('item'));
		}
	}
});