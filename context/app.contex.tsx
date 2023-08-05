

import { PropsWithChildren, createContext, useState } from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export interface IAppContext {
	menu: MenuItem[];
	//для рендера меню
	firstCategory: TopLevelCategory;
	//функция для обновления меню
	setMenu?: (newMenu: MenuItem[]) => void;

}

//создание контекста
export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Courses });

//создание провайдера для управдения контекста
export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>): JSX.Element => {
	
	const [menuState, setMenuState] = useState<MenuItem[]>(menu);
	//мы переходя на ссылки меню изиеняется state меню
	const setMenu = (newMenu: MenuItem[]) => {
		setMenuState(newMenu);
	};

	return <AppContext.Provider value={{ menu: menuState, firstCategory, setMenu }}>
		{children}
	</AppContext.Provider>;
};