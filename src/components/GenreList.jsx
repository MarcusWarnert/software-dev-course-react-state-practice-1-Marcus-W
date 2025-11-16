import React from 'react';

export default function GenreList ({ currentGenre, onGenreSelect, genres}) {
    return (
        <div>
            <h2>Select a Genre</h2>
            <div> 
                <button onClick={() => onGenreSelect('All')}>Show All</button>
                {genres.map(genre => (
                    <button key={genre.id} onClick={() => onGenreSelect(genre.name)}>{genre.name}</button>
                ))}
            </div>
        </div>
    );
}