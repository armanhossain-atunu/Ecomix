import React from 'react';

const ProductsSkeleton = () => {
    return (
        <div className='border rounded-lg p-4 space-y-4 animate-pulse'>
            <div className="w-full h-40 bg-gray-200"></div>
            <div className="h-5 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className='flex gap-2'>
                {
                    [...Array(4)].map((_, i) => (
                        <div key={i} className="h-4 bg-gray-200 rounded w-1/3"></div>
                    ))
                }
            </div>
        </div>
    );
};

export default ProductsSkeleton;