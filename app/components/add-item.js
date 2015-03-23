import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addNew: function () {
			this.toggleProperty('isAdding');
		},
		addDone: function () {
			this.toggleProperty('isAdding');

			if (this.get('type') === 'model') {
				var models = this.get('models');
				models.pushObject(this.get('entry'));
			}
			else {
				this.store.createRecord('list', {
					name: this.get('entry'),
					models: []
				});
			}

			/*clear input*/
			this.set('entry');
		},
		addCancel: function () {
			this.toggleProperty('isAdding');
		}
	}
});