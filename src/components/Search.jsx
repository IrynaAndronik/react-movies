import React from 'react'
import {MoviesType} from '../components/MoviesType'

class Search extends React.Component {
    state = {
        search: '',
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            if (this.state.search ) {
                this.props.searchMovie(this.state.search, this.props.typeMovie);
            } else
                alert('Enter title movie');
        }
    }

    render() {
        return <div className="row">
                        <div className="input-field">
                            <input
                                placeholder='search'
                                type="search"
                                className="validate"
                                value={this.state.search}
                                onChange={(event) =>
                                    this.setState({search: event.target.value})}
                                onKeyPress={this.handleKeyPress}
                            />
                            <button className="btn search-btn" onClick={() => this.props.searchMovie(this.state.search, this.props.typeMovie)}
                            >Search</button>
                        </div>
                </div>
    }
}
export {Search}
