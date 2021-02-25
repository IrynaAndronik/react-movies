import React from 'react';
import {Main} from '../layout/Main'
import {Movie} from "./Movie";

function MoviesListComponent(props) {
    const {movies} = props;
    return <div className="movies">
        {
            movies.map (movie => (
                <Movie key={movie.imdbID}
                       title={movie.Title}
                       poster={movie.Poster}
                       type={movie.Type}
                       year={movie.Year}
                />
            ))}
    </div>
}
export { MoviesListComponent };
