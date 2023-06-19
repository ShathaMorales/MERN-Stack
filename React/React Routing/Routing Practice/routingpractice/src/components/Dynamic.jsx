import React from 'react'
import { useParams } from 'react-router-dom'

const Dynamic = () => {
    const { variable, color, color2 } = useParams()
    let text
    if (isNaN(variable)) {
        text = `The word is : ${variable}`
    } else {
        text = `The number is : ${variable}`
    }
    return (
        <div className="container text-center p-4" style={{ color: color, backgroundColor: color2 }}>
            <h3>{text}</h3>
        </div>
    )
}

export default Dynamic