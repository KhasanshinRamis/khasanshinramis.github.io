import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import {Card, Rating, Tag, Button, Divider, Review, ReviewForm} from '../index';
import Image from 'next/image';
import { declOfNum, priceRu } from '../../helpers/helpers';
import cn from 'classnames';
import { ForwardedRef, forwardRef, useRef, useState } from 'react';
import { motion } from 'framer-motion';



export const Product = motion(forwardRef(({ product,className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
	
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const reviewRef = useRef<HTMLDivElement>(null);

	const variants = {
		visible: { opacity: 1, height: 'auto'},
		hidden: { opacity: 0, height: 0}
	};

	// при нажатии на отзывы будет скролить вниз к самим отзывам
	const scrollToReview = () => {
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	return (
		<div className={className} {...props} ref={ref}>
			<Card className={styles.product}>
				{/* Шапка продукта */}
				<div className={styles.logo}>
					
					<Image
						src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
						alt={product.title}
						width={70}
						height={70}
					/>

				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{priceRu(product.price)}
					{product.oldPrice && <Tag className={styles.oldPrice} color='green'>-{priceRu(product.oldPrice-product.price)}</Tag>}	
				</div>
				<div className={styles.credit}>{product.credit} &#x20bd;<span className={styles.month}>/мес</span></div>
				<div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}></Rating></div>
				
				<div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
				<div className={styles.priceTitle}>цена</div>
				<div className={styles.creditTitle}>кредит</div>
				<div className={styles.rateTitle}><a href="#ref" onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>

				<Divider className={cn(styles.hr, styles.hr2)}/>		
				{/* Описание продукта */}
				<div className={styles.description}>{product.description}</div>

				<div className={cn(styles.feature, {
					[styles.fullScreenFeature]: !product.advantages ||  !product.advantages
				})}>
					{product.characteristics.map(characteristic => (
						<div className={styles.characteristics} key={characteristic.name}>
							<span className={styles.characteristicName}>{characteristic.name}</span>
							<span className={styles.characteristicDots}></span>
							<span className={styles.characteristicValue}>{characteristic.value}</span>
						</div>
					))}
				</div>

				<div className={cn(styles.advBlock, {
					[styles.fullScreenAdvBlock]: !product.characteristics
				})}>
					{product.advantages && <div className={styles.advantages}>
						<div className={styles.advTitle}>Преимущества</div>
						<div>{product.advantages}</div>
					</div>}

					
					{product.disadvantages && <div className={styles.disadvantages}>
						<div className={styles.advTitle}>Недостатки</div>
						<div>{product.disadvantages}</div>
					</div>}
				</div>

				<Divider className={styles.hr}/>

				{/* Кнопки продукта */}
				<div className={styles.action}>

					<Button
						appearance='primary'>
							Узнать подробнее
					</Button>
					
					<Button 
						appearance='ghost'
						arrow={isReviewOpened ? 'down' : 'right'}
						className={styles.reviewButton}
						onClick={() => setIsReviewOpened(!isReviewOpened)}
						>
							Читать отзывы
					</Button>
				</div>

			</Card>	
			<motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
				<Card 
					color='blue' 
					className={cn(styles.reviews)}
					ref={reviewRef}
				>
					
					{product.reviews.map(r => (
						<div key={r._id}>
							<Review review={r} />
							<Divider />
						</div>	
					))}

					<ReviewForm productId={product._id}/>
					
				</Card>
			</motion.div>
		</div>
);
}));