import { Header, CustomTab } from '@utd-argo/ux-master-library';
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
      <Header
        variant="global-tabs"
        title="Fresh Oranges"
        backgroundColor="#fc9f00"
        titleFontWeight="500"
        titleColor="#ffffff"
        menuOptions={[
          ['Top Rated', 'Action', 'Comedy', 'Mystery'],
          ['Popular', 'Fan Favorites', 'Upcoming Series', 'Episode Recaps'],
          ['New Releases', 'Industry News', 'Awards', 'Behind the Scenes'],
          ['Profile', 'My List', 'Settings & Privacy', 'Log Out']
        ]}
        customTab={
          <CustomTab
            labels={['MOVIES', 'TV SHOWS', 'NEWS', 'NAME']}
            fontColor="#fff"
            fontSize="18px"
            hoverColor="#fff"
            borderRadius="4px"
            height="64px"
          />
        }
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
    </div>
  )
}

export default App
