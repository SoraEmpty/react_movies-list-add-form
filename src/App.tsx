import './App.scss';
import { MoviesList } from './components/MoviesList';
import { NewMovie } from './components/NewMovie';
import moviesFromServer from './api/movies.json';
import { Movie } from './types/Movie';
import React, {useState} from 'react';



  function getMovieById (movieId: string):Movie | null {
    return moviesFromServer.find(movie => movie.imdbId === movieId)
    || null;
  }

  const initialMovies: Movie[] = moviesFromServer.map(movie => ({
      ...movie,
      user: getMovieById(movie.imdbId)
    }
  ))

export const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>(initialMovies);

  const addMovie = (NewMovie: Movie) => {
    setMovies(currentMovies => [...currentMovies, NewMovie])
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList
        movies={movies}
 />
      </div>
      <div className="sidebar">
        { <NewMovie/* onAdd={(movie) => {}}*/
        onSubmit={addMovie}/> }
      </div>
    </div>
  );
};
