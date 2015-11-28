import * as angular from 'angular';
import {ItemListCtrl} from './ItemListCtrl';
import {ItemService} from './ItemService';

angular.module('app.items', [])
	.service('ItemService', ItemService)
	.controller('ItemListCtrl', ItemListCtrl)
	.config(config);

function config(
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider
): void {
	$stateProvider
        .state('items', {
            url: '/items',
            templateUrl: './app/items/itemList.html',
            controller: 'ItemListCtrl as vm'
        });
};;