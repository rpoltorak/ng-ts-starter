import {Item, IItem} from './item';
import {ItemService} from './item.service';

export interface IItemListModel {
	title: string;
	items: IItem[];

	removeItem(id: number): void;
}

export class ItemListCtrl implements IItemListModel {
	public title: string;
	public items: IItem[];
	
	static $inject = ['ItemService']; 
	
	constructor(private itemService: ItemService) {
		this.title = 'Item list';
		this.items = itemService.getItems();
	}
	
	public removeItem(id: number) {
		let i = this.items.length;
		
		while(i--) {
			let item = this.items[i];
			if (item.id === id) {
				this.items.splice(i, 1);
			}
		}
	}
}