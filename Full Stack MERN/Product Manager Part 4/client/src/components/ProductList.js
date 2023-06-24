import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteButton from './DeleteButton';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProducts(res.data));
    }, [])

    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, idx) => {
                return <p key={idx}>
                    <Link to={"/products/" + product._id}>
                        {product.title}, $ {product.price}, {product.description}
                    </Link>
                    |
                    <button><Link to={"/products/" + product._id + "/edit"}>
                        Edit
                    </Link></button>
                    |
                    <DeleteButton productId={product._id} successCallback={props.successCallback} />
                </p>
            })}
        </div>
    )
}

export default ProductList;