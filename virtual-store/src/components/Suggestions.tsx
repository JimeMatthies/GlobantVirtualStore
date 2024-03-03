import { useState } from 'react';
import ProductCard from './ProductCard';
import styles from './Suggestions.module.css';
import { products } from '../data/products.ts';

function Suggestions() {
	const [from, setFrom] = useState(0);
	const [to, setTo] = useState(4);

	const nextSug = () => {
		if (to === 20) {
			setFrom(0);
			setTo(4);
		} else {
			setFrom(from + 4);
			setTo(to + 4);
		}
	};
	const prevSug = () => {
		if (from === 0) {
			setFrom(16);
			setTo(20);
		} else {
			setFrom(from - 4);
			setTo(to - 4);
		}
	};

	return (
		<div className={styles.salesBlock}>
			<div className={styles.salesTitle}>
				<h2>Productos relacionados</h2>
			</div>
			<img src='/assets/chevron-left-solid-60.png' onClick={prevSug} />
			<div className={styles.productContainer}>
				{products.slice(from, to).map((each) => (
					<ProductCard
						key={each.id}
						id={each.id}
						title={each.title}
						description={each.description}
						price={each.price}
						image={each.images[0]}
					/>
				))}
			</div>
			<img src='/assets/chevron-right-solid-60.png' onClick={nextSug} />
		</div>
	);
}

export default Suggestions;
