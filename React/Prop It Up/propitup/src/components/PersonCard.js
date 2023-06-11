import React, { components } from 'react';

const PersonCard = ({ firstName, lastName, age, hairColor }) => {
    return (
        <div style={{ textAlign: 'left', display: 'flex', justifyContent: 'center' }}>
            <div style={{ maxWidth: '300px' }}>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
        </div>
    );
}

export default PersonCard;