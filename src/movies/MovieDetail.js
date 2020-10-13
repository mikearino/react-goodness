import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BASE_URL = 'https://api.themoviedb.org/3/movie/';

const API_KEY = '?api_key=941007440b9046ef5468ea86902a8290';

export function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = async () => {
    try {
      const res = await fetch(BASE_URL + id + API_KEY);
      const newMovie = await res.json();
      setMovie(newMovie);
      console.log('movie', newMovie);
    } catch (e) {
      console.error(e);
    }
  };
  //Any time id changes, fetch information
  useEffect(() => {
    getMovie();
  }, [id]);

  if (!movie.title) return null;
  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
}
