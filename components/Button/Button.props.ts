import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

//наследуем у DetailedHTMLProps атрибуты ButtonHTMLAttributes, а именно HTMLButtonElement
export interface ButtonProps extends Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'> {
	children: ReactNode;
	appearance: 'primary' | 'ghost';
	//передаём куда будет смотреть у кнопки svg(знак вопроса - необязательный параметр)
	arrow?: 'right' | 'down' | 'none';
}