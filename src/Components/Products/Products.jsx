'use client'
import React, { useEffect, useState } from 'react';
import products from '@/data/data.json';
import ProductCard from './ProductCard';
import ProductsSkeleton from '../Skeleton/ProductsSkeleton';

const PRODUCTS_PER_PAGE = 8;

const Products = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ hydration fix
  useEffect(() => {
    setMounted(true);

    setTimeout(() => {
      setProductList(products);
      setLoading(false);
    }, 2000);
  }, []);

  // ⛔ prevent server/client mismatch
  if (!mounted) return null;

  // Pagination logic
  const totalPages = Math.ceil(productList.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = productList.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-2xl font-bold text-center">
        New Arrivals
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
        {loading
          ? [...Array(PRODUCTS_PER_PAGE)].map((_, index) => (
              <ProductsSkeleton key={index} />
            ))
          : currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
        }
      </div>

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2 flex-wrap">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 border rounded ${
                  currentPage === page
                    ? 'bg-black text-white'
                    : 'hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;