import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import * as C from './style';

export const DescriptionMovie = ({ handleOpenPlayVideo }) => {
	return (
		<C.Container>
			<C.Title>Boku no Hero Academia</C.Title>
			<C.Description>
				A trama se passa em um mundo onde a maioria das pessoas tem superpoderes
				chamados de “Quirks”. O personagem principal é Izuku Midoriya, um jovem
				que nasceu sem um Quirk, mas que sonha em se tornar um herói. Sua vida
				muda quando ele encontra o herói número um, All Might, que decide
				compartilhar seu poder com ele, fazendo de Midoriya seu sucessor.
			</C.Description>
			<C.Button onClick={handleOpenPlayVideo}>
				<SmartDisplayIcon size={24} />
				Watch Now
			</C.Button>
		</C.Container>
	);
};
