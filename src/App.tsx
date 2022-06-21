import React, { useEffect, useState } from 'react';

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

	interface ICard {
		id: number;
		name: string;
		price: string;
	}

	const listItems = cards.map((item: ICard) => {
		return (
			<li key={item.id}>
				{item.name} {item.price}
			</li>
		);
	});

	if (error) {
		return <div>Ошибка</div>;
	} else if (!isLoaded) {
		return <div>Загрузка...</div>;
	} else {
		return (
			<div className={styles.app}>
				<ul>{listItems}</ul>
			</div>
		);
	}
};

export default App;
