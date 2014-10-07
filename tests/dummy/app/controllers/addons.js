import Ember from 'ember';
import SearchableArray from 'ember-cli-searchable-array/mixins/searchable-array';

var debounce = Ember.run.debounce;

export default Ember.ArrayController.extend(SearchableArray, {
	queryParams: ['term'],
	term: '',
	searchProperties: ['name'],
	setSearchTerm: function() {
		debounce(this, 'set', 'searchTerm', this.get('term'), 150);
	}.observes('term'),
	actions: {
		clear: function() {
			this.set('term', '');
		}
	}
});