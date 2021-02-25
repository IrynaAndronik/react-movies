import React from 'react';

function Movie(props) {
    return <div className="card movie">
                    <div className="card-image">
                        {
                            props.poster === 'N/A' ?
                                <img className="activator" src={`https://via.placeholder.com/300x450?text=${props.title}`}/>
                                :
                                <img className="activator" src={props.poster} />
                        }
                    </div>
                    <span className="card-title">{props.title}</span>
                    <div className="card-content">
                        <p>{props.type}</p>
                    </div>
    </div>;
};

export { Movie };
