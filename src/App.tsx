import { Header, LoginPage } from '@utd-argo/ux-master-library';
import MovieList from './components/MovieList/MovieList';
import ReviewForm from './components/ReviewForm/ReviewForm';
import NewsPanel from './components/NewsPanel/NewsPanel';
import './App.css';

function App() {
	return (
		<div className="root">
			<LoginPage
				logo={
					<h1
						style={{
							color: 'orange',
							fontWeight: 'bold',
							fontSize: '2.5rem'
						}}
					>
						Fresh Oranges
					</h1>
				}
				bgColor1="#ff9500"
				bgColor2="#ff4d00"
				accentColor="orange"
			>
				<>
					<Header
						variant="global"
						title="Fresh Oranges"
						backgroundColor="#fc9f00"
					/>
					<div className="content">
						<div className="movies">
							<MovieList />
						</div>
						<div className="panel">
							<ReviewForm />
							<NewsPanel />
						</div>
					</div>
				</>
			</LoginPage>
		</div>
	);
}

export default App;
