import React from 'react';
import './styles.css';

function Arrays (props) {
    return (
        <div className="arrays">
            <h1>Resultados</h1>
            <ul>
                {props.arrTerms.map((value, index) => {
                    return <h2 key={index}>{index+1}º Termo: {value}</h2>
                })
                }
            </ul>
        </div>
    )
};

export default Arrays;