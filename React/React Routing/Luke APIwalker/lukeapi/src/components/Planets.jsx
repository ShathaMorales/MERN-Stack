import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';

const Planets = () => {
    const [data, setData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
            .then(response => { setData(response.data) })
            .catch(err => console.log(err))
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    return (
        <div>
            <h1>{data.name}</h1>
            <h4>Climate: </h4><h6>{data.climate}</h6>
            <h4>Terrain: </h4><h6>{data.terrain}</h6>
            <h4>Surface Water: </h4><h6>{data.surface_water}</h6>
            <h4>Population: </h4><h6>{data.population}</h6>
        </div>
    )
}

export default Planets