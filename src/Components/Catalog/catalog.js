import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './catalog.css';

const Catalog = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const categoriesResponse = await axios.get('https://660e9abb356b87a55c4f8eaa.mockapi.io/mera-russia-api/Categories');
            setCategories(categoriesResponse.data);

            const productsResponse = await axios.get('https://660e9abb356b87a55c4f8eaa.mockapi.io/mera-russia-api/Products');
            setProducts(productsResponse.data);
        };

        fetchData();
    }, []);

    const renderCategories = () => {
        return categories.map((category) => {
            const filteredProducts = products.filter((product) => product.category_id === category.id);

            return (
                <div className="category-card" key={category.id}>
                    <h2>{category.name}</h2>
                    <div className="products-grid">
                        {filteredProducts.map((product) => (
                            <div className="product-card" key={product.id}>
                                <img src={product.image_url} alt={product.name} />
                                <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="catalog">
            {renderCategories()}
        </div>
    );
};

export default Catalog;
