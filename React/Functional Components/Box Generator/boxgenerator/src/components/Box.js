import React, { useState } from 'react';

const Box = (props) => {
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.showForm(color, size)
        setColor('');
        setSize('');
    };

    return (
        <div style={{ margin: '100px' }}>
            <form onSubmit={handleSubmit}>
                <label style={{ marginRight: '20px' }}>Color</label>
                <input className="col-form-label" type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                <label style={{ marginRight: '20px', marginLeft: '20px' }}>Size</label>
                <input className="col-form-label" type="text" value={size} onChange={(e) => setSize(e.target.value)} />
                <input className="btn btn-outline-secondary" style={{ marginLeft: '20px' }} type="submit" value="Add" />
            </form>
        </div>
    );
};

export default Box;
