import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <div className="col-md-4 d-flex">
            <div className="card mb-4 flex-fill">
                <img src={props.img} className="card-img-top" alt={props.title} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text flex-grow-1">{props.des}</p>
                    <NavLink className="btn-cat-des mt-auto" to={props.btnLink}>Learn More</NavLink>
                </div>
            </div>
        </div>
    );
}

export default Card;
