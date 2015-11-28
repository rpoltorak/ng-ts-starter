import {Item, IItem} from './Item';

export interface IItemService {
	getItems(): IItem[];
}

export class ItemService implements IItemService {
	getItems(): IItem[] {
		return [
			new Item(1, 'Item 1', 'Description 1'),
			new Item(2, 'Item 2', 'Description 2'),
			new Item(3, 'Item 3', 'Description 3')
		];	
	}
}