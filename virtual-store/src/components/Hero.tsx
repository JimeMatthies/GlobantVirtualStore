import styles from './Hero.module.css';

interface HeroProps {
	mainTitle: string;
	subTitle: string;
}

function Hero(props: HeroProps) {
	const { mainTitle, subTitle } = props;
	return (
		<section className={styles.section}>
			<div className={styles.container + ' container'}>
				<div className={styles.heroTitle}>
					<span>{mainTitle}</span>
					<span>{subTitle}</span>
				</div>
			</div>
		</section>
	);
}

export default Hero;
