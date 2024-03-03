import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
// import styles from './Cart.module.css';

function Cart() {
	return (
		<>
			<NavBar />
			<Hero mainTitle='' subTitle='Mi carrito' />
			<main>
				<button className='btn-primary discount' id='btn-discount'>
					Aplicar 10%
				</button>
				<div className='cart-container'>
					<div className='card resume'>
						<div>
							<h2>Resumen del pedido</h2>
							<div className='subtotal'>
								<h3>Subtotal</h3>
								<strong className='price'></strong>
							</div>
							<small>Incluye impuesto PAIS y percepción AFIP.</small>
						</div>
						<button className='btn-primary'>Finaliza tu compra</button>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default Cart;
