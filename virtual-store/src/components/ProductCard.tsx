import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

interface ProductCardProps {
	id: string;
	title: string;
	description: string;
	price: number;
	image: string;
}

function ProductCard(props: ProductCardProps) {
	const { id, title, description, price, image } = props;
	return (
		<Link to={'/product/' + id} className={styles.productCard}>
			<img className={styles.productImg} src={image} alt={id} />
			<div className={styles.productInfo}>
				<span className={styles.productTitle}>{title}</span>
				<span className={styles.productDescription}>{description}</span>
				<div className={styles.productPriceBlock}>
					<span className={styles.productPrice}>${price}</span>
					<span className={styles.productDiscount}>50% Off</span>
				</div>
				<div className={styles.productTaxPolicy}>
					Incluye impuesto País y percepción AFIP
				</div>
			</div>
		</Link>
	);
}

export default ProductCard;
