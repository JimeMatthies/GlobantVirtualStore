import ColumnFooter from './ColumnFooter';
import styles from './Footer.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container + ' container'}>
				<div className={styles.columns}>
					<ColumnFooter
						mainTitle='Ofertas de la semana'
						oneTitle='Laptops'
						twoTitle='Audio'
						threeTitle='Auticulares'
						mainHref='/ofertas.html'
						oneHref='/laptops.html'
						twoHref='/audio.html'
						threeHref='/auriculares.html'
					/>
					<ColumnFooter
						mainTitle='Cómo comprar'
						oneTitle='Formas de pago'
						twoTitle='Envíos'
						threeTitle='Devoluciones'
						mainHref='/como.html'
						oneHref='/pago.html'
						twoHref='/envios.html'
						threeHref='/devoluciones.html'
					/>
					<ColumnFooter
						mainTitle='Costos y tarifas'
						oneTitle='Impuestos'
						twoTitle='Facturación'
						threeTitle=''
						mainHref='/costos.html'
						oneHref='/impuestos.html'
						twoHref='/facturacion.html'
						threeHref=''
					/>
					<ColumnFooter
						mainTitle='Mis pedidos'
						oneTitle='Pedir nuevamente'
						twoTitle='Lista de deseos'
						threeTitle=''
						mainHref='/pedidos.html'
						oneHref='/nuevamente.html'
						twoHref='/deseos.html'
						threeHref=''
					/>
					<ColumnFooter
						mainTitle='Garantía de Entrega'
						oneTitle=''
						twoTitle=''
						threeTitle=''
						mainHref='/garantia.html'
						oneHref=''
						twoHref=''
						threeHref=''
					/>
				</div>
				<div className={styles.copyright}>
					Curso de HTML + CSS - Made By JM 2024
				</div>
			</div>
		</footer>
	);
}

export default Footer;
