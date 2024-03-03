import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import styles from './Product.module.css';
import { products } from '../data/products.ts';
import Thumbs from '../components/Thumbs.tsx';
import Description from '../components/Description.tsx';
import ToAdd from '../components/ToAdd.tsx';
import Suggestions from '../components/Suggestions.tsx';

function Product() {
	const { id } = useParams();
	const product = products.find((each) => each.id === id);
	if (product == null) {
		return (
			<>
				<NavBar />
				<main className={styles.main}>
					<div className='container'>
						<div>
							<h1>Producto No encontrado</h1>
						</div>
						<Suggestions />
					</div>
				</main>
				<Footer />
			</>
		);
	} else {
		return (
			<>
				<NavBar />
				<main className={styles.main}>
					<div className='container'>
						<div className={styles.columns}>
							<Thumbs product={product} />
							<Description product={product} />
							<ToAdd product={product} />
						</div>
						<Suggestions />
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

export default Product;
