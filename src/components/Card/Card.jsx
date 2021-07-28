import React from 'react';
import './Card.scss';

const Card = ({ imageUrl, title }) => {
    return (
        <div className="card">
            <div className="card__image" style={{ backgroundImage: `url('${imageUrl}')`}}></div>
            <p className="card__title">{title}</p>
        </div>
    );
}

export default Card;