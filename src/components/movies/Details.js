import React,  {useState, useEffect } from 'react';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import { MOVIE_PLACEHOLDER_URL } from '../../constants/commons';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import { Link, useParams } from "react-router-dom";
import { findMovie } from '../../services/HttpClient';
import Button from '@material-ui/core/Button';
import { useStyles } from '../shared/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Details =()=> {
  let { movieId } = useParams();
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [errorGetMovie, setErrorGetMovie] = useState(null);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    processFindMovie();
  }, []);

  const processFindMovie = async () => {
    setLoading(true);
    const response = await findMovie(movieId);
    if (response.ok) {
      const data = await response.json();
      setMovie(data)
      console.log('one movie', data)
    } else {
      // error fetching
      setMovie(null)
      setErrorGetMovie('Désolé, nous ne parvenons pas à récupérer le film. Veuillez réessayer plus tard svp.')
    }
    setLoading(false);
  }

  return (
    <main>
      <Container className={classes.cardGrid} maxWidth="md">
        <Box mb={2}>
          <Button
            variant="contained"
            color="default"
            size="large"
            startIcon={<KeyboardBackspaceIcon />}
          >
            <Link to="/" className={classes.link}>Retour aux films</Link>
          </Button>
        </Box>
        { loading &&
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.cardContentCenter}
          >
            Chargement...
          </Typography>}
        { !loading && <>
          { errorGetMovie &&
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.cardContentCenter}
            >
              {errorGetMovie}
            </Typography>
          }
          { !errorGetMovie &&
            <Grid container spacing={4}>
              { movie &&
                <>
                  <Grid item xs={12} sm={6} md={6}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={movie.image ? movie.image.original : MOVIE_PLACEHOLDER_URL }
                      title={movie.name}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6}>
                      <Card className={classes.card}>
                        <CardContent className={classes.cardContent}>
                          <Typography gutterBottom variant="h5" component="h2">
                            {movie.name}
                          </Typography>
                          <div
                            dangerouslySetInnerHTML={{__html: movie.summary }}
                            className={classes.cardContentDescription}
                          />
                        </CardContent>
                      </Card>
                  </Grid>
                </>
              }
              {!movie &&
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.cardContentCenter}
                >
                  Le film n'a pas été retrouvé.
                </Typography>
              }
            </Grid>
          }
          </>
        }
      </Container>
    </main>
  );
};

export default Details;
