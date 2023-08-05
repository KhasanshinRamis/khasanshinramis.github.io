import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonProps):JSX.Element => {
	return (
		<motion.button
			whileHover={{ scale: 1.03 }}
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost',
			})}
			{...props}
		>	
			{children}
			{/* берём элемент arrow и смотрим какой у него значение, если оно совпадает, то это true, а значит мы её выводим  */}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down' 
			})}>
				{/* 1 способ:через папку public добавляем svg */}
				{/* <img src="/arrow.svg" alt="" /> */}
				
				{/* 2 способ: через webpack */}
				<ArrowIcon/>
			</span>}
		</motion.button>
	);
};