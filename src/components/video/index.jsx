import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Player, Youtube } from '@vime/react';
import * as C from './style';

export const Video = ({ playVideo, handleClosePlayVideo }) => {
	return playVideo ? (
		<C.Container>
			<C.Button onClick={handleClosePlayVideo}>
				<ArrowCircleLeftIcon />
				Back
			</C.Button>
			<Player controls>
				<Youtube videoId="Qno808u9NEY" />
			</Player>
		</C.Container>
	) : null;
};
