import React from 'react';
import {MoviesListComponent} from '../components/MoviesListComponent';
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'
import {MoviesType} from "../components/MoviesType";

const API_KEY = process.env.REACT_APP_KEY

class Main extends React.Component {
    state = {
        movies: [],
        error: '',
        isPending: true,
        typeMovie: 'all',
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
            .then(response => response.json())
            .then((data) => {
                this.setState({movies: data.Search, isPending: false});
            })
    }

    handleTypeMovie = (typeMovie) => {
        this.setState({typeMovie: typeMovie })
    }

    searchMovie = (titleMovie, typeMovie='all') => {
        this.setState({isPending: true});
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${titleMovie}${typeMovie !== 'all'? `&type=${typeMovie}`: ''}`)
                .then(response => response.json())
                .then(response => {
                    if (response.Error) {
                        throw Error('Movie not found');
                    }
                    this.setState({movies: response.Search, isPending: false});
                })
                .catch(err =>
                    this.setState({movies: [], error: err.message, isPending: false})
                )
    }

    render() {
        const {movies, error, isPending, typeMovie} = this.state;
        return <main className='container content'>
            <Search searchMovie={this.searchMovie} typeMovie={typeMovie}/>
            <MoviesType handleTypeMovie={this.handleTypeMovie}/>
            {error && <div>{error}</div>}
            {isPending && <Preloader /> }
            {<MoviesListComponent movies={movies} /> }
        </main>
    }
}

export {Main};
