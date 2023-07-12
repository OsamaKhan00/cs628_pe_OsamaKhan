import React, { useState } from 'react';

const moviesData = [
  {
    title: 'The Dark Knight',
    genre: 'Action',
    releaseYear: 2008,
  },
  {
    title: 'Pulp Fiction',
    genre: 'Crime',
    releaseYear: 1994,
  },
  {
    title: 'Inception',
    genre: 'Sci-Fi',
    releaseYear: 2010,
  },
  {
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    releaseYear: 1994,
  },
];

const MovieList = () => {
  const [selectedGenre, setSelectedGenre] = useState('All Genres');

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filteredMovies =
    selectedGenre !== 'All Genres'
      ? moviesData.filter((movie) => movie.genre === selectedGenre)
      : moviesData;

  const handleMovieClick = (title) => {
    alert(`Clicked on movie: ${title}`);
  };

  return (
    <div>
      <h1>Osama's Movie List</h1>
      <label htmlFor="genre-select">Select Genre:</label>
      <select id="genre-select" value={selectedGenre} onChange={handleGenreChange}>
        <option value="All Genres">All Genres</option>
        {Array.from(new Set(moviesData.map((movie) => movie.genre))).map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
      <ul>
        {filteredMovies.map((movie, index) => (
          <li key={index} onClick={() => handleMovieClick(movie.title)}>
            <h3>{movie.title}</h3>
            <p>Genre: {movie.genre}</p>
            <p>Release Year: {movie.releaseYear}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
