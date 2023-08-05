import { SearchProps } from './Search.props';
import styles from './Search.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { useState } from 'react';
import { Button } from '../Button/Button';
import GlassIcon from './glass.svg';
import { useRouter } from 'next/router';
import { KeyboardEvent } from 'react';

export const Search = ({ className, ...props}: SearchProps): JSX.Element => {
	
	//value поиска
	const [search, setSearch] = useState<string>('');

	//создаём маршруты 
	const router = useRouter();

	//переходим по маршрутам с .../search?query
	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		});
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if(e.key == 'Enter'){
			goToSearch();
		}
	};

	return <div className={cn(className, styles.search)} {...props}>
		<Input
			className={styles.input}
			placeholder="Поиск..."
			//будем сохранять данные которые вводит пользователь в state
			value={search}
			//при изменения делаем update value
			onChange={(e) => setSearch(e.target.value)}
			onKeyDown={handleKeyDown}
		/>
		<Button
			appearance="primary"
			className={styles.button}
			onClick={goToSearch}
		>
			<GlassIcon/>
		</Button>
	</div>;
};