import React from 'react';
import { ICard } from '../../interfaces/card.interface';

import styles from './Card.module.css';

const Card = ({
	id,
	slogan,
	name,
	second_name,
	number_of_servings,
	number_of_gifts,
	weight,
	img,
}: ICard): JSX.Element => {
	return (
		<div className={styles.card}>
			<div className={styles.slogan}>{slogan}</div>
			<div className={styles.name}>{name}</div>
			<div className={styles.secondName}>{second_name}</div>
			<div className={styles.numberOfServings}>{number_of_servings}</div>
			<div className={styles.numberOfGifts}>{number_of_gifts}</div>
			<div className={styles.weight}>{weight}</div>
			<img src={img} alt="" className={styles.img} />
		</div>
	);
};

export default Card;
