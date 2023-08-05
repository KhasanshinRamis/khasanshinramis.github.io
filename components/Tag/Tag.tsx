import { TagProps } from './Tag.props';
import styles from './Tag.module.css';
import cn from 'classnames';


export const Tag = ({ size = 'medium', color = 'ghost', href, children, className, ...props }: TagProps): JSX.Element => {
	return <div
		className={cn(styles.tag, className, {
			[styles.medium]: size == 'medium',
			[styles.small]: size == 'small',
			[styles.ghost]: color == 'ghost',
			[styles.red]: color == 'red',
			[styles.primary]: color == 'primary',
			[styles.grey]: color == 'grey',
			[styles.green]: color == 'green'
		})}
		{...props}
	>{
			href ?
				<a>{children}</a>
				: <>{children}</>
		}
	</div>;
};