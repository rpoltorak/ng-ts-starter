import * as angular from 'angular';

//////////////////////////////////////

angular.module('app').config(config);
	
function config(
    $stateProvider: ng.ui.IStateProvider, 
    $urlRouterProvider: ng.ui.IUrlRouterProvider
) : void {
    $urlRouterProvider.otherwise('/');
	
	$stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: './app/dashboard/dashboard.html'
        })
        .state('items', {
            url: '/items',
            templateUrl: './app/items/itemlist.html',
            controller: 'ItemListCtrl as vm'
        });
        
}