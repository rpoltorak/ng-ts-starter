import * as angular from 'angular';
import 'angular-ui-router';

import './app/home/config';
import './app/items/config';

import './assets/css/bootstrap.css';
import './assets/scss/app.scss';
    
angular.module('app', [
    'ui.router',
    'app.items',
    'app.home'
]).config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider
): void {
	$urlRouterProvider.otherwise('/');
};;