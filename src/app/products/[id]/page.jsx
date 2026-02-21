"use client";

import { useParams } from 'next/navigation';
import React from 'react';
import products from '@/data/data.json';
import Image from 'next/image';

const ProductDetails = () => {
    const { id } = useParams();

    // id string → number convert
    const product = products.find(
        (product) => product.id === Number(id)
    );

    if (!product) {
        return <p>Product not found</p>;
    }
    // console.log(product);
    return (
        <div className='w-11/12 mx-auto flex justify-center items-center gap-10 my-10'>
            <div>
                <Image src={product.image} width={300} height={300} alt="Shoes" className='w-[300px] h-[300px]' />
            </div>
            <div>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <p>Rating: {product.rating}</p>

            </div>

        </div>
    );
};

export default ProductDetails;