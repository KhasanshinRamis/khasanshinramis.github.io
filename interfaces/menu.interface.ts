//создаём интерфейс для меню 

import { TopLevelCategory } from './page.interface';

//данные страницы
export interface PageItem {
	alias: string;
	title: string;
	_id: string;
	category: string;
}

//корневой элемент из id и данных страницы
//будем получать несколько MenuItem
export interface MenuItem {
  _id: {
	secondCategory: string;
  };
  isOpened?: boolean;
  pages: PageItem[];
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	icon: JSX.Element;
	id: TopLevelCategory;
}