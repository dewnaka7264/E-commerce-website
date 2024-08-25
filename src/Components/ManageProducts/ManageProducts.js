import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import all_products from "../all_products";
import axios from 'axios'; // You can use Axios or Fetch API for making HTTP requests

const ManageProducts = () => {
    const [user, setUser] = useState(null);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user && user.email === 'lithilakavi@gmail.com') {
                setUser(user);
            } else {
                setUser(null);
                setErrorMessage('You do not have permission to access this page.');
            }
        });
    }, []);

    const handleImageChange = (e) => {
        setProductImage(e.target.files[0]);
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();

        if (!productImage) {
            setErrorMessage('Please select an image to upload.');
            return;
        }

        // Create form data to send the image
        const formData = new FormData();
        formData.append('image', productImage);

        try {
            // Make an API call to upload the image
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            const newProduct = {
                id: all_products.length + 1, // Assuming unique IDs are generated this way
                name: productName,
                description: productDescription,
                price: parseFloat(productPrice),
                image: response.data.fileName, // Get the file name from the server response
            };

            // Update the local product array
            all_products.push(newProduct);

            // Reset form fields
            setProductName('');
            setProductDescription('');
            setProductPrice('');
            setProductImage(null);
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error uploading image:', error);
            setErrorMessage('Failed to upload image. Please try again.');
        }
    };

    if (!user) {
        return <div>{errorMessage}</div>;
    }

    return (
        <div>
            <h2>Add New Product</h2>
            <form onSubmit={handleAddProduct}>
                <div>
                    <label>Product Name:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Product Description:</label>
                    <textarea
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Product Price:</label>
                    <input
                        type="number"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Product Image:</label>
                    <input type="file" onChange={handleImageChange} required />
                </div>
                <button type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ManageProducts;
