import React, { useEffect, useState } from 'react';
import Card from './components/Card/Card';
import { ICard } from './interfaces/card.interface';

import styles from './App.module.css';

const App = (): JSX.Element => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [cards, setCards] = useState([]);

	useEffect(() => {
		fetch('/api/db.json')
			.then((res) => res.json())
			.then(
				(result) => {
					setIsLoaded(true);
					setCards(result.cards);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				},
			);
	}, []);

	const listCards = cards.map((card: ICard) => {
		return <Card key={card.id} {...card} />;
	});

	if (error) {
		return <div>Ошибка</div>;
	} else if (!isLoaded) {
		return <div>Загрузка...</div>;
	} else {
		return (
			<div className={styles.app}>
				<div className={styles.list}>{listCards}</div>
			</div>
		);
	}
};

export default App;
