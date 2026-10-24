import styles from './App.module.css';
// import axios from "axios";
import SearchBar from './components/SearchBar/SearchBar';
import { fetchMovies } from './services/movieService';
import MovieGrid from './components/MovieGrid/MovieGrid';
import { useState } from 'react';
import type { Movie } from './types/movie';



export default function App() {
  const [isMovies, setIsMovies] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([])
  const handleOrder = async(topic: string) => {
    const movies = await fetchMovies(topic);
    if (movies) {
      setIsMovies(true);
   }
    console.log(movies);
    setMovies(movies);
  }
  const handleSelectMovie = () => {
    
   }
  return <div className={styles.app}>
    <SearchBar onSubmit={handleOrder} />
    {isMovies && <MovieGrid movies={movies} onSelect={handleSelectMovie} />}
  </div>
}