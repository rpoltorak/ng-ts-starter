import './assets/css/bootstrap.css';
import './assets/scss/app.scss';

//////////////////////////////////////

import * as angular from 'angular';

//////////////////////////////////////

angular.module('app', [
	'ui.router',
	'items'
]);

//////////////////////////////////////

import 'ui-router';
import './app/items/config';
import './routes';

