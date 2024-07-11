import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Image from '../../assets/carrousel_imgs/boku_no_hero.jpg';
import demonsleyrs from '../../assets/carrousel_imgs/demon_sleyers.jpg';
import fairytail from '../../assets/carrousel_imgs/fairy_tail.gif';
import jujutsukaisen from '../../assets/carrousel_imgs/jujutsu_kaisen.jpg';
import narutoshippuden from '../../assets/carrousel_imgs/naruto_shippuden.jpg';
import onepiece from '../../assets/carrousel_imgs/one_piece.jpg';
import * as C from './style';

export const MovieCarousel = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 9,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 6,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};
	return (
		<C.Container>
			<C.Text>Movies</C.Text>
			<Carousel responsive={responsive}>
				<C.MovieImage src={Image} alt="image movie" />
				<C.MovieImage src={onepiece} alt="image movie" />
				<C.MovieImage src={narutoshippuden} alt="image movie" />
				<C.MovieImage src={demonsleyrs} alt="image movie" />
				<C.MovieImage src={jujutsukaisen} alt="image movie" />
				<C.MovieImage src={fairytail} alt="image movie" />
				<C.MovieImage src={Image} alt="image movie" />
				<C.MovieImage src={Image} alt="image movie" />
			</Carousel>
		</C.Container>
	);
};
