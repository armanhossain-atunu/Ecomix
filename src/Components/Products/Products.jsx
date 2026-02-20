import React from 'react';
import products from '@/data/data.json';
import ProductCard from './ProductCard';
const Products = () => {


    return (
        <div className='w-11/12 mx-auto my-10'>
            <h1 className='text-2xl font-bold text-center'>New Arrivals</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5'>

                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;