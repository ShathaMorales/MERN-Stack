import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm';
import { useParams, useNavigate } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';

const Update = () => {
    const { id } = useParams();
    const [product, setProduct] = useState('');
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, []);

    const editProduct = product => {
        axios.put('http://localhost:8000/api/products/' + id, product)
            .then(res => navigate('/'))
            .catch(err => console.error(err));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <>
                    <ProductForm
                        onSubmitProp={editProduct}
                        initialTitle={product.title}
                        initialPrice={product.price}
                        initialDescription={product.description}
                    />
                    <DeleteButton productId={product._id} successCallback={() => navigate('/')} />
                </>
            )}
        </div>
    )
}

export default Update;