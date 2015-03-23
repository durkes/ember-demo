import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		deleteItem: function () {
			var _this = this;
			this.store.find('cars', this.get('model.id')).then(function (item) {
				item.destroyRecord();
				_this.transitionToRoute('makes');
			});
		}
	}
});