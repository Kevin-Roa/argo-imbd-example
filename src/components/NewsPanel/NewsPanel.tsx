import { List } from '@utd-argo/ux-master-library';
import { Image } from '@utd-argo/ux-master-library';
import img1 from '../../assets/movie-img/lastofus.jpg';
import img2 from '../../assets/movie-img/joker.jpg';
import './NewsPanel.css';

function NewsPanel() {
	const newsTitle = [
		'30 Most Popular TV Shows Right Now, Ranked By Number of Steams',
		'The Biggest and Best Movies from the Last 25 Years'
		]
	const imgs = [img1, img2];
	return (
		<div>
			<div className="formTitle"> Fresh Orange News </div>
			<div className="news">
				{newsTitle.map((news, i) => (
						<Image 
							variant='center'
							img={imgs[i]}
							imgWidth = '340px'
							imgHeight='100%'
							header={news}
							/>
				))}
			</div>
		</div>
	);
}

export default NewsPanel