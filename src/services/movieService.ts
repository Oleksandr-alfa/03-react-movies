import axios from 'axios';

import type { Movie } from '../types/movie';
const myKey = import.meta.env.VITE_API_KEY;
interface MovieHttpResponse {
  results: Movie[];
}


export const fetchMovies = async (topic: string) => {
    const response = await axios.get<MovieHttpResponse>(
  `https://api.themoviedb.org/3/search/movie?`,
     {
   params:
         {query: topic,
      page: 1,},
      headers: {Authorization: `Bearer ${myKey}`},
        });
    return response.data.results;
}