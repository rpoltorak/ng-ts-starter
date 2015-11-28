import * as angular from 'angular';
import HomeBoxDirective from './HomeBoxDirective';

angular.module('app.home', [])
    .directive('homeBox', <any>HomeBoxDirective)
    .config(config);

function config(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider
): void {
	$stateProvider
        .state('home', {
            url: '/',
            templateUrl: './app/home/home.html'
        });
};;