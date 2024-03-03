import { useState } from 'react';
import styles from './ToAdd.module.css';

interface ToAddProps {
	product: any;
}

function ToAdd(props: ToAddProps) {
	const [quantity, setQuantity] = useState(1);
	const [button, setButton] = useState(false);
	return (
		<>
			<div className={styles.productCheckoutBlock}>
				<div className={styles.checkoutContainer}>
					<span className={styles.checkoutTotalLabel}>Total:</span>
					<h2 className={styles.checkoutTotalPrice} id='price'>
						{'$' + (props.product?.price * quantity).toLocaleString('de-DE')}
					</h2>
					<p className={styles.checkoutDescription}>
						Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
						haciendo la solicitud en AFIP.
					</p>
					<ul className={styles.checkoutPolicyList}>
						<li>
							<span className={styles.policyIcon}>
								<img src='../assets/truck.png' alt='Truck' />
							</span>
							<span className={styles.policyDesc}>
								Agrega el producto al carrito para conocer los costos de envío
							</span>
						</li>
						<li>
							<span className={styles.policyIcon}>
								<img src='../assets/plane.png' alt='Plane' />
							</span>
							<span className={styles.policyDesc}>
								Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
								envío normal
							</span>
						</li>
					</ul>
					<div className={styles.checkoutProcess}>
						<div className={styles.top}>
							<input
								id='input-quantity'
								type='number'
								min='1'
								defaultValue={quantity}
								onChange={(event) => {
									setQuantity(Number(event?.target.value));
								}}
							/>
							<button className={styles.btnPrimary}>Comprar</button>
						</div>
						<div className={styles.bottom}>
							<button
								className={button ? styles.btnOff : styles.btnOutline}
								id='btn-add-to-cart'
								onClick={() => {
									setButton(!button);
								}}>
								{' '}
								{button ? 'Quitar' : 'Añadir'} al Carrito{' '}
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default ToAdd;
