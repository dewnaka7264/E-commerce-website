
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebaseConfig';
import './ProductList.css';

const ProductList = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsRef = firestore.collection(category);
                const snapshot = await productsRef.get();
                if (snapshot.empty) {
                    console.log('No matching documents.');
                    return;
                }
                let productsList = [];
                snapshot.forEach((doc) => {
                    productsList.push({ id: doc.id, ...doc.data() });
                });
                setProducts(productsList);
            } catch (error) {
                console.error('Error fetching products: ', error);
            }
        };
        fetchProducts();
    }, [category]);

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <h2>{product.name}</h2>
                    <img src={product.images[0]} alt={product.name} className="product-image" />
                    <p className="product-description">{product.description}</p>
                    <p className="product-price">${product.price.toFixed(2)}</p>
                    <div className="product-sizes">
                        Sizes: {product.sizes.join(', ')}
                    </div>
                    <button className="add-to-cart-button">Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
