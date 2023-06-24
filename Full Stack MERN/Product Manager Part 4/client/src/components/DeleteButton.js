import React from 'react'
import axios from 'axios';

const DeleteButton = props => {
    const { productId, successCallback } = props;

    const deleteProduct = e => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                successCallback(productId);
            })
            .catch(err => console.error(err));
    }

    return (
        <button onClick={(e) => deleteProduct(e, productId)}>
            Delete
        </button>
    )
}

export default DeleteButton