import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react';


export const Rating = forwardRef(({ isEditable = true, rating, setRating, error, className, ...props}: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	// создаём через useState пустой массив звёздочек-рейтингов
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>)); 
	
	//при один раз взаимодействии с рейтингом вызывается useEffect
	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, index: number) =>{
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: index < currentRating,
						[styles.editable]: isEditable
					})}
					// событие при наведении на рейтинг-звёздочки
					onMouseEnter={() => changeDisplay(index + 1)}
					//событие после наведения на рейтинг-звёздочки
					onMouseLeave={() => changeDisplay(rating)}
					//событие при клике на рейтинг-звёздочки
					onClick={() => onClickRating(index + 1)}
				>	
					<StarIcon
						//переход через табиндекс
						tabIndex={isEditable ? 0 : -1}
						//обработка нажатия через клавишу
						onKeyDown={(event: KeyboardEvent<SVGElement>) => isEditable && HandleSpace(index + 1, event)}
					/>
				</span>
			);
		});
		setRatingArray(updatedArray);
	};

	const HandleSpace = (index: number, event: KeyboardEvent<SVGElement>) => {
		//только на клавишу пробел будет срабатывать событие и когда есть setRating, т.е не underfiend
		if(event.code != 'Space' || !setRating) {
			return;
		}
		setRating(index);
	};
	
	const onClickRating = (index: number) => {
		if(!isEditable || !setRating){
			return;
		}
		setRating(index);
	};

	const changeDisplay = (index: number) => {
		if(!isEditable){
			return;
		}
		constructRating(index);
	};

	return (
		<div {...props} ref={ref} className={cn(styles.ratingWrapper, {
			[styles.error]: error
		})}>
			{ratingArray.map((r, index) => (<span key={index}>{r}</span>))}
			{error && <span className={styles.errorMessage}>{error.message}</span>}
		</div>);
});