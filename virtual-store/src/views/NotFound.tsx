import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';

function NotFound() {
	return (
		<>
			<NavBar />
			<Hero mainTitle='tecnología' subTitle='renovada' />
			<main>
				<h2>NOT FOUND</h2>
			</main>
			<Footer />
		</>
	);
}

export default NotFound;
