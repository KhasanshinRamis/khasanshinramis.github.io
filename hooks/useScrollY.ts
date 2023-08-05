import { use, useEffect, useState } from 'react';


export const useScrollY = (): number => {
	//смотрим кто выполняет действеи сервер или браузер
	const isBrowser = typeof window != 'undefined';

	const [scrollY, setScrollY] = useState<number>(0);

	//берём текущую позицию скролла
	const handleScroll = () => {
		const currentScrollY = isBrowser ? window.scrollY : 0;
		setScrollY(currentScrollY);
	};

	//подписались на скролл(смотрим за поведением у scroll)
	useEffect(() => {
		//Если у нас есть событие скролла, то мы выполняем ф-цию handleScroll
		window.addEventListener('scroll', handleScroll, {passive: true});
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return scrollY;
	
};