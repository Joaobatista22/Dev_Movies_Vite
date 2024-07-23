import { useState } from 'react';
import { Background } from './components/background';
import { MovieCarousel } from './components/carrousel';
import { DescriptionMovie } from './components/descriptions';
import { Header } from './components/hearder';
import { Video } from './components/video';

function App() {
	const [playVideo, setPlayVideo] = useState(false);

	const handleOpenPlayVideo = () => setPlayVideo(true);
	const handleClosePlayVideo = () => setPlayVideo(false);
	return (
		<Background>
			<Header />
			<DescriptionMovie handleOpenPlayVideo={handleOpenPlayVideo} />
			<MovieCarousel />
			<Video
				playVideo={playVideo}
				handleClosePlayVideo={handleClosePlayVideo}
			/>
		</Background>
	);
}

export default App;
