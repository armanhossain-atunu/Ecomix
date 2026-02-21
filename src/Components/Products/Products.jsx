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
  const [sortOrder, setSortOrder] = useState('');

  // hydration fix
  useEffect(() => {
    setMounted(true);

    setTimeout(() => {
      setProductList(products);
      setLoading(false);
    }, 2000);
  }, []);

  if (!mounted) return null;

  // ✅ SORT FIRST
  const sortedProducts = [...productList].sort((a, b) => {
    if (sortOrder === "low") return a.price - b.price;
    if (sortOrder === "high") return b.price - a.price;
    return 0;
  });

  // ✅ PAGINATION FROM SORTED DATA
  const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const currentProducts = sortedProducts.slice(
    startIndex,
    startIndex + PRODUCTS_PER_PAGE
  );

  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-2xl font-bold text-center">
        New Arrivals
      </h1>

      {/* 🔽 Sort Filter */}
      <div className="flex justify-end mb-6">
        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={(e) => {
            setSortOrder(e.target.value);
            setCurrentPage(1); // 🔥 reset page on sort
          }}
        >
          <option value="">Sort by price</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {/* Products */}
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
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
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
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
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