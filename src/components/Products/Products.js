import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    console.log(products)

    return (
        <div className='flex justify-center'>
            <section className='my-10'>
                <h1 className='text-4xl'>Our Products</h1>
                <div className='flex flex-wrap justify-around px-10  gap-10 my-5'>
                    {
                        products.map(product => <Product key={product.id} product={product} />)
                    }
                </div>
            </section>
        </div>
    );
};

export default Products;