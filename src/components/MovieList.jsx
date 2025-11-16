import React from 'react';

export default function MovieList ({ movies, currentGenre }) {
    if (movies.length===0) {
        return (
            <div>
                There are no movies for this genre.  Maybe try checking your spelling?
            </div>
        )
    }
    
    return (
        <div>
            <h2>
                {currentGenre === 'All'
                ? 'All Movies (${movies.length})'
                : '${currentGenre } Movies (${movies.length})'}
            </h2>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <div>
                            <strong>{movie.title}</strong>
                            <span>({movie.yearReleased})</span>
                        </div>
                        <div>
                            <span>Director: {movie.director}</span>
                            <span>Genre: {movie.genre}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}