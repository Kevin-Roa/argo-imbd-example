import { Badge } from '@utd-argo/ux-master-library';
import { Image } from '@utd-argo/ux-master-library'; 
import img1 from '../../assets/movie-img/eeaao.jpg';
import img2 from '../../assets/movie-img/banshees.jpg';
import img3 from '../../assets/movie-img/the-fabelmans.jpg';
import img4 from '../../assets/movie-img/elvis.jpg';
import { MovieInfo } from './MovieInfo.tsx';
import './MovieList.css';

function MovieList() {
	const images = [img1, img2, img3, img4];
	return (
		<div>
			<div className="title"> Oscar-Nominated Movies 2023 </div>
				<div className="movieInfo">
					{MovieInfo.map((movie, i) => (
						<div className="completeMovieDiv">
								<div className="number">
									{i + 1}
								</div>
								<div className="image">
								<Image 
									variant='left'
									img={images[i]}
									imgWidth = '180px'
									imgHeight='250px'
									header = {movie.title}
									subheader = {`Directors: ${movie.directors}`}
									body = {movie.desc}
									badge = {`Score: ${movie.score}`}
									/>
								</div>
						</div>
					))}
				</div>	
		</div>
	);
}

export default MovieList