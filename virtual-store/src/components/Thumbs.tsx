import { useState } from 'react';
import styles from './Thumbs.module.css';

interface ThumbsProps {
	product: any;
}

function Thumbs(props: ThumbsProps) {
	const [thumb, setThumb] = useState(
		props.product?.images[0] || './assets/mock1.jpg',
	);

	return (
		<>
			<div>
				<div className={styles.productImagesBlock}>
					{props.product?.images.map((each, index) => (
						<div className={styles.thumbnailContainer} key={index}>
							<img
								className={styles.thumbnail}
								src={each}
								alt={each}
								onClick={() => {
									setThumb(each);
								}}
							/>
						</div>
					))}
				</div>
			</div>
			<div>
				<img className={styles.selectedThumbnail} src={thumb} alt={thumb} />
			</div>
		</>
	);
}

export default Thumbs;
