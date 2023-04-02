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
	<Box sx={{  backgroundColor: '#ffffff', color: '#000000'}}>
		<Grid container spacing={2}>
		    <Grid item xs={12}>
				<Header variant="global" title="Fresh Oranges" backgroundColor="#fc9f00" />
			</Grid>
			<Grid container direction="row" alignItems="stretch">
				<Grid item xs={7}>
					<MovieList />
				</Grid>
				<Grid direction="column" sx={{ paddingLeft: '40px'}}>
				<Grid item xs={5}>
					<ReviewForm />
				</Grid>
				<Grid item xs={5}>
					<NewsPanel />
				</Grid>
				</Grid>
			</Grid>
		</Grid>
	</Box>

  )
}

export default App
