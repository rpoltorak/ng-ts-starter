import * as angular from 'angular';
import {ItemListCtrl} from './itemlist.ctrl';
import {ItemService} from './item.service';

angular.module('items', [])
	.service('ItemService', ItemService)
	.controller('ItemListCtrl', ItemListCtrl);