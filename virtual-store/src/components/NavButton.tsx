import { Link } from 'react-router-dom';
import styles from './NavButton.module.css';

interface NavButtonProps {
	title: string;
	href: string;
}

function NavButton(props: NavButtonProps) {
	const { title, href } = props;
	return (
		<Link className={styles.navButton} to={href}>
			{title}
		</Link>
	);
}

export default NavButton;
