import React from 'react'

const DisplayBox = (props) => {
    return (
        <div>
            <div style={{ display: 'flex', margin: '100px', flexWrap: 'wrap' }}>
                {props.displayBox.map((boxes, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: boxes.color,
                            width: `${boxes.size}px`,
                            height: `${boxes.size}px`,
                            margin: '10px'
                        }}
                    ></div>
                ))}
            </div>
        </div>
    )
}

export default DisplayBox