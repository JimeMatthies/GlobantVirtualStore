import styles from './Description.module.css';

interface DescriptionProps {
	product: any;
}

function Description(props: DescriptionProps) {
	return (
		<>
			<div className={styles.productDescriptionBlock}>
				<h1 className={styles.title} id='title'>
					{props.product.title}
				</h1>
				<form className={styles.selector}>
					<fieldset>
						<label className={styles.label} htmlFor='color'>
							Color
						</label>
						<select>
							{props.product.colors.map((each) => (
								<option key={each} value={each}>
									{each}
								</option>
							))}
						</select>
					</fieldset>
					<fieldset>
						<label className={styles.label} htmlFor='size'>
							Tamaño
						</label>
						<select>
							<option value='a'>Mediano</option>
							<option value='a'>Grande</option>
						</select>
					</fieldset>
				</form>
				<div className={styles.description}>
					<span className={styles.label}>Descripción</span>
					<p id='description'>{props.product.description}</p>
				</div>
			</div>
		</>
	);
}

export default Description;
