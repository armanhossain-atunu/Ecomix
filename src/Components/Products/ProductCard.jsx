
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
    const { title, image, price, rating } = product;

    return (
        <div className=' group'>
            <Link href={`/products/${product.id}`}>
                <div className="card bg-base-100 shadow-sm">
                    <figure>
                        <Image src={image} width={300} height={300} alt="Shoes" className='w-[300px] h-[150px]' />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <div className='flex justify-between'>
                            <div>
                                <p>Price: ${price}</p>
                                <p>Rating: {rating}</p>
                            </div>

                            <div className=" hidden group-hover:block">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>

                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard;