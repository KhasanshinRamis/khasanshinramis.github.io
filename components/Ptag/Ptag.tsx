import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';
import cn from 'classnames';


export const Ptag = ({ size='medium', children, className, ...props}: PtagProps): JSX.Element => {
	return <p 
				className={cn(styles.p, className, {
				[styles.large]: size == 'large',
				[styles.medium]: size == 'medium',
				[styles.small]: size == 'small'
				})}
				{...props}
			>
				{children}
			</p>;
};