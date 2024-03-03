import NavButton from './NavButton';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

function NavBar() {
	return (
		<header className={styles.header}>
			<div className={styles.container + ' container'}>
				<div className={styles.search}>
					<div className='logo'>
						<Link to={'/'}>
							<img
								src='../assets/tiendamia-logo.svg'
								width='218'
								alt='Logo store'
							/>
						</Link>
					</div>
					<div className={styles.form}>
						<form>
							<input id='search' type='text' placeholder='Search' />
						</form>
					</div>
					<div className={styles.social}>
						<ul>
							<li>
								<Link to={'https://facebook.com'}>
									<img src='../assets/facebook.png' alt='Logo Facebook' />
								</Link>
							</li>
							<li>
								<Link to={'https://instagram.com'}>
									<img src='../assets/instagram.png' alt='Logo instagram' />
								</Link>
							</li>
							<li>
								<Link to={'/cart'}>
									<img
										className={styles.cartLogo}
										src='../assets/cart.png'
										alt='Logo cart'
									/>
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className={styles.nav}>
					<ul>
						<li>
							<NavButton title='Ofertas de la semana' href='/ofertas.html' />
						</li>
						<li>
							<NavButton title='Cómo comprar' href='/como.html' />
						</li>
						<li>
							<NavButton title='Costos y tarifas' href='/costos.html' />
						</li>
						<li>
							<NavButton title='Mis pedidos' href='/pedidos.html' />
						</li>
						<li>
							<NavButton title='Invita y gana' href='/invita.html' />
						</li>
						<li>
							<NavButton title='Garantía de Entrega' href='/garantía.html' />
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default NavBar;
