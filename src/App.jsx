import { Background } from './components/background';
import { MovieCarousel } from './components/carrousel';
import { DescriptionMovie } from './components/descriptions';
import { Header } from './components/hearder';

function App() {
	return (
		<Background>
			<Header />
			<DescriptionMovie />
			<MovieCarousel />
		</Background>
	);
}

export default App;
