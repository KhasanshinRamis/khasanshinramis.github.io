import { motion, useAnimation } from 'framer-motion';
import styles from './Up.module.css';
import { useScrollY } from '../../hooks/useScrollY';
import { useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';


export const Up = (): JSX.Element => {
	
	const controls = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls]);

	//при нажатии в самый верх
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	return (
		<motion.div
			className={styles.up} 
			animate={controls}
			initial={{ opacity: 0 }}
		>
			<ButtonIcon 
			appearance='primary' 
			icon='up' 
			onClick={scrollToTop}
			/>
		</motion.div>
	);
};