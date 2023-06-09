import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    const { removeFromDom } = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
            .catch(err => console.log(err));
    }
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
                    <button onClick={(e) => { deleteProduct(product._id) }}>
                        Delete
                    </button>
                </p>
            })}
        </div>
    )
}

export default ProductList;