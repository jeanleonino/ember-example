import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
	host: 'http://ec2-54-172-57-71.compute-1.amazonaws.com:5000',
	namespace: 'api'
});
