import React,  {useState, useEffect } from 'react';
import { environment as env } from '../../environments/env.dev';
import ErrorHandler from '../ui/error-handler/ErrorHandler';
import { searchMovies } from '../../services/HttpClient';
import CardContent from '@material-ui/core/CardContent';
import { Link, useRouteMatch } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import InputBase from '@material-ui/core/InputBase';
import Container from '@material-ui/core/Container';
import SearchIcon from '@material-ui/icons/Search';
import NoResult from '../ui/no-result/NoResult';
import { useStyles } from '../shared/styles';
import Loading from '../ui/loaders/Loading';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

const List =()=> {
  let matchRoute = useRouteMatch();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [errorGetMovies, setErrorGetMovies] = useState(null);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    processSearchMovies();
  }, []);

  const onInputSearchMovie = (e) => {
    setSearch(e.target.value);
    processSearchMovies(e.target.value);
  }

  const processSearchMovies = async (query) => {
    setLoading(true);
    const response = await searchMovies(query);
    if (response.ok) {
      const data = await response.json();
      setMovies(data)
      // console.log('data', data)
    } else {
      // error fetching
      setMovies([])
      setErrorGetMovies('Désolé, nous ne parvenons pas à récupérer les films. Veuillez réessayer plus tard svp.')
    }
    setLoading(false);
  }

  return (
    <main>
      <div className={classes.heroContent}>
        <Container maxWidth="md">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom className={classes.typo}>
            Une expérience unique de films
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            Recherchez vos films préférés et faites régalez-vous avec vos proches
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Rechercher un film…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={onInputSearchMovie}
              value={search}
            />
          </div>
        </Container>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        { loading && <Loading message="Chargement..." /> }
        { !loading && <>
          { errorGetMovies && <ErrorHandler message={errorGetMovies} /> }
          { !errorGetMovies &&
            <Grid container spacing={4}>
              {movies.map((movie) => (
                <Grid item key={movie.show.id} xs={12} sm={6} md={4}>
                  <Link to={`${matchRoute.path}movie/${movie.show.id}`} className={classes.link}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={movie.show.image ? movie.show.image.original : env.MOVIE_PLACEHOLDER_URL }
                        title={movie.show.name}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {movie.show.name}
                        </Typography>
                        <div dangerouslySetInnerHTML={{__html: movie.show.summary }} className={classes.cardContentDescription} />
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
              { !movies.length && <NoResult message="Aucun film ne correspond à votre recherche." /> }
            </Grid>
          }
          </>
        }
      </Container>
    </main>
  );
};

export default List;
