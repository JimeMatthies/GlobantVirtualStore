import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import styles from './Home.module.css';
import { products } from '../data/products.ts';

function Home() {
	return (
		<>
			<NavBar />
			<Hero mainTitle='tecnología' subTitle='renovada' />
			<main className={styles.main}>
				<div className='container'>
					<div className={styles.productContainer}>
						{products.map((each) => (
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
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Home;
