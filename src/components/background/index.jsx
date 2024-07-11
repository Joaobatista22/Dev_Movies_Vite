import backgroundImage from '../../assets/background.png';
import { BackgroundImage, BackgroundLinear } from './style';

export const Background = ({ children }) => {
	return (
		<BackgroundImage bgImage={backgroundImage}>
			<BackgroundLinear>{children}</BackgroundLinear>
		</BackgroundImage>
	);
};
