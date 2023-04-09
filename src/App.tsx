import { Header } from '@utd-argo/ux-master-library';
import MovieList from './components/MovieList/MovieList';
import ReviewForm from './components/ReviewForm/ReviewForm';
import NewsPanel from './components/NewsPanel/NewsPanel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import './App.css';

function App() {

  return (
		<div className="root">
			<Header variant="global" title="Fresh Oranges" backgroundColor="#fc9f00" />
			<div className="content">
				<div className="movies">
					<MovieList />
				</div>
				<div className="panel">
					<ReviewForm />
					<NewsPanel />
				</div>
			</div>
		</div>
  )
}

export default App
