import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import all_products from "../all_products";
import axios from 'axios'; //Axios or Fetch API for making HTTP requests
import "./ManageProducts.css";
const ManageProducts = () => {
    const [user, setUser] = useState(null);
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');
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
                newPrice: parseFloat(newPrice),
                oldPrice: parseFloat(oldPrice),
                image: response.data.fileName, // Get the file name from the server response
            };

            // Update the local product array
            all_products.push(newProduct);

            // Reset form fields
            setProductName('');
            setProductDescription('');
            setNewPrice('');
            setOldPrice('');
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
            <div className="manageContainer">
                <h2 className="formTitle">Add New Product</h2>
                <form className="productForm" onSubmit={handleAddProduct}>
                    <div className="formGroup">
                        <label className="formLabel">Product Name:</label>
                        <input
                            type="text"
                            className="formInput"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                            required
                        />
                    </div>
                    <label className="formLabel">Category</label>
                    <div className="formGroup formRadioGroup">

                        <input type="radio" id="men" name="category" value="men" className="formRadio" />
                        <label htmlFor="men" className="formRadioLabel">Men's</label>

                        <input type="radio" id="women" name="category" value="women" className="formRadio" />
                        <label htmlFor="women" className="formRadioLabel">Women's</label>

                        <input type="radio" id="accessories" name="category" value="accessories" className="formRadio" />
                        <label htmlFor="accessories" className="formRadioLabel">Accessories</label>
                    </div>
                    <div className="formGroup">
                        <label className="formLabel">Product Description:</label>
                        <textarea
                            className="formTextarea"
                            value={productDescription}
                            onChange={(e) => setProductDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="formGroup">
                        <label className="formLabel">New Price:</label>
                        <input
                            type="number"
                            className="formInput"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label className="formLabel">Old Price:</label>
                        <input
                            type="number"
                            className="formInput"
                            value={oldPrice}
                            onChange={(e) => setOldPrice(e.target.value)}
                            required
                        />
                    </div>
                    <div className="formGroup">
                        <label className="formLabel">Product Image:</label>
                        <input type="file" className="formFileInput" onChange={handleImageChange} required />
                    </div>
                    <button type="submit" className="formButton">Add Product</button>
                </form>
            </div>
        </div>

    );
};

export default ManageProducts;
