import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [type, setType] = useState('people')
    const [id, setId] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate(`/${type}/${id}`);
    }

    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
                <label>Search for:</label>
                <select onChange={(e) => setType(e.target.value)}>
                    <option value="people">people</option>
                    <option value="planets">planet</option>
                </select>
                <label>ID:</label>
                <input onChange={(e) => setId(e.target.value)} type="text" />
                <button className='btn btn-primary'>Search</button>
            </form>
        </div>
    )
}

export default Form