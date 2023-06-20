import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

const People = () => {
    const [data, setData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(response => { setData(response.data) })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <h1>{data.name}</h1>
            <h4>Height: </h4><h6>{data.height}</h6>
            <h4>Mass: </h4><h6>{data.mass}</h6>
            <h4>Hair Color: </h4><h6>{data.hair_color}</h6>
            <h4>Skin Color: </h4><h6>{data.skin_color}</h6>
        </div>
    )
}

export default People;