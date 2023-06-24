import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, i) => (
                <Link to={`/products/${product._id}`} key={i}>
                    <p>
                        {product.title}
                    </p>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;