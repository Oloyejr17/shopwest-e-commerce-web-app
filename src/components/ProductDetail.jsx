import React, { useState } from 'react';
import { useParams } from 'react-router';
import DATA from '../Data';
import { useDispatch } from 'react-redux';
import { addItem, delItem } from '../redux/actions/index';

const ProductDetail = () => {
    const [cartBtn, setCartBtn] = useState("Add to Cart");
    
    // Get the product id from the URL params
    const proid = useParams();
    const proDetail = DATA.filter(x => x.id === parseInt(proid.id));  // Ensure correct comparison with id
    const product = proDetail[0];  // Access the first product from filtered list
    
    // Initialize Redux dispatch
    const dispatch = useDispatch();

    // Handle cart button state and dispatch actions
    const handleCart = (product) => {
        if (cartBtn === "Add to Cart") {
            dispatch(addItem(product));  // Add to cart
            setCartBtn("Remove from Cart");  // Change button text
        } else {
            dispatch(delItem(product));  // Remove from cart
            setCartBtn("Add to Cart");  // Change button text back
        }
    };

    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    {/* Product Image Section */}
                    <div className="col-md-6 d-flex justify-content-center mx-auto">
                        <img 
                            src={product.img} 
                            alt={product.title} 
                            height="400px" 
                            className="img-fluid"
                        />
                    </div>
                    
                    {/* Product Details Section */}
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        
                        {/* Delete Icon */}
                        <div className="delete-icon">
                            <span 
                                className="delete-btn" 
                                onClick={() => handleCart(product)} // Functionality for deleting
                            >
                                &times; {/* Unicode for the X symbol */}
                            </span>
                        </div>

                        {/* Product Price */}
                        <h2 className="my-4">₦{product.price.toLocaleString()}</h2> {/* Apply .toLocaleString() */}

                        {/* Product Description */}
                        <p className="lead">{product.desc}</p>
                        
                        {/* Cart Button */}
                        <button 
                            onClick={() => handleCart(product)} 
                            className="btn btn-outline-primary my-5"
                        >
                            {cartBtn}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
