import React, { useState } from 'react';
import GenreList from './components/GenreList';
import MovieList from './components/MovieList';
import {movies} from './mock-data/movies';
import {genres} from './mock-data/genres';
import './App.css';

export default function App() {
	const [movies1] = useState(movies);
	const [currentGenre, setCurrentGenre] = useState('All');
	const filteredMovies = currentGenre === 'All'
		? movies
		: movies.filter(movie => movie.genre === currentGenre);
	const handleGenreSelect = (genre) => {
		setCurrentGenre(genre);
	};

	return (
		<div>
			<h1>Movies</h1>
			
			<GenreList
				currentGenre={currentGenre}
				onGenreSelect={handleGenreSelect}
				genres={genres}
			/>

			<MovieList
				movies={filteredMovies}
				currentGenre={currentGenre}
			/>
		</div>
	)
}
