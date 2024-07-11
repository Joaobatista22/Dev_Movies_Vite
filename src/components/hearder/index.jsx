import { HeaderContainer, LogoImage } from './style';

export const Header = () => {
	return (
		<HeaderContainer>
			<LogoImage />
			<nav>
				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a href="">Lançamentos</a>
				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a href="">Em Alta</a>
				{/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
				<a href="">Estreias</a>
			</nav>
		</HeaderContainer>
	);
};
