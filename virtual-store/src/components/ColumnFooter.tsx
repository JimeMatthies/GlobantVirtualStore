import styles from './ColumnFooter.module.css';

interface ColumnFooterProps {
	mainTitle: string;
	oneTitle: string;
	twoTitle: string;
	threeTitle: string;
	mainHref: string;
	oneHref: string;
	twoHref: string;
	threeHref: string;
}

function ColumnFooter(props: ColumnFooterProps) {
	const {
		mainTitle,
		oneTitle,
		twoTitle,
		threeTitle,
		mainHref,
		oneHref,
		twoHref,
		threeHref,
	} = props;
	return (
		<div className={styles.col}>
			<ul>
				<li className={styles.colMain}>
					<a href={mainHref}>{mainTitle}</a>
				</li>
				<li>
					<a href={oneHref}>{oneTitle}</a>
				</li>
				<li>
					<a href={twoHref}>{twoTitle}</a>
				</li>
				<li>
					<a href={threeHref}>{threeTitle}</a>
				</li>
			</ul>
		</div>
	);
}

export default ColumnFooter;
