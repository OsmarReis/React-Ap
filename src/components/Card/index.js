import React from 'react';
import './styles.css';

const Card = (props) => (
    <div id="card-container">
        <div className="Card">
            {props.children}
        </div>
    </div>
);


export default Card;

