import React from 'react'

class MoviesType extends React.Component {
    state = {
        type: 'all'
    }

    handleChange = (event) => {
        this.setState({type: event.target.value});
        this.props.handleTypeMovie(event.target.value);

}

    render() {
        const {type} = this.state;
        return <div className="type-movie">
            <p>
                <label>
                    <input className="with-gap"
                           name="type"
                           type="radio"
                           value="all"
                           checked={type === "all"}
                           onChange={this.handleChange}
                    />
                    <span>All</span>
                </label>
            </p>
            <p>
                <label>
                    <input className="with-gap"
                           name="type"
                           type="radio"
                           value="movie"
                           checked={type === "movie"}
                           onChange={this.handleChange}

                    />
                    <span>Movie only</span>
                </label>
            </p>
            <p>
                <label>
                    <input className="with-gap"
                           name="type"
                           type="radio"
                           value="series"
                           checked={type === "series"}
                           onChange={this.handleChange}

                    />
                    <span>Series only</span>
                </label>
            </p>
        </div>
    }
}

    export {MoviesType}
