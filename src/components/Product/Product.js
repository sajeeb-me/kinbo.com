import React from 'react';
import './Product.css'

const Product = ({ product }) => {
    const { name, price, img } = product
    return (
        <div className='card text-left'>
            <img src={img} alt="" />
            <div className='info w-full'>
                <h1 title={name} className='text-xl font-semibold my-2'>{name.slice(0, 20)}</h1>
                <div className='flex justify-between'>
                    <button className='buy-btn px-3 rounded-md'>Buy Now</button>
                    <p className='text-2xl font-bold'>${price}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;