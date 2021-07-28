import React from 'react';
import './CardContainer.scss';

import Card from '../Card/Card';

const CardContainer = ({ cards }) => {
    return (
        <div className="card-container">
            { cards.map(card => {
                return <Card key={card.title} imageUrl={card.images['Poster Art'].url} title={card.title} />;
            }) }
        </div>
    );
}

export default CardContainer;