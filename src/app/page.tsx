'use client';

import React, { useState, useEffect } from 'react';
import useProducts from '@/hooks/useProducts';
import ProductModal from '@/components/ProductModal';
import Filter from '@/components/Filter';
import { Product } from '@/utils/types';
import ProductCard from '@/components/ProductCard';
import DeleteModal from '@/components/DeleteModal';
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import InitializeProducts from '@/components/InitializeProducts';

const HomePage: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, deleteAllProducts } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [deleteMessage, setDeleteMessage] = useState('');
  const [isDeleteAll, setIsDeleteAll] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [modalMode, setModalMode] = useState<'view' | 'edit'>('view');

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setModalMode('view');
    setIsModalOpen(true);
  };

  const handleAddEditProduct = (product?: Product) => {
    setSelectedProduct(product || null);
    setModalMode(product ? 'edit' : 'edit');
    setIsModalOpen(true);
  };

  const handleSaveProduct = (product: Product) => {
    if (selectedProduct) {
      updateProduct(selectedProduct.id, product);
    } else {
      addProduct(product);
    }
    setIsModalOpen(false);
  };

  const handleDeleteProduct = (product: Product) => {
    setSelectedProduct(product);
    setDeleteMessage(`Are you sure you want to delete "${product.name}" ?`);
    setIsDeleteModalOpen(true);
    setIsDeleteAll(false);
  };

  const handleDeleteAllProducts = () => {
    setDeleteMessage('Are you sure you want to delete all products?');
    setIsDeleteModalOpen(true);
    setIsDeleteAll(true);
  };

  const confirmDelete = () => {
    if (isDeleteAll) {
      deleteAllProducts();
    } else if (selectedProduct) {
      deleteProduct(selectedProduct.id);
    }
    setIsDeleteModalOpen(false);
  };

  const handleFilter = (category: string, minPrice: number, maxPrice: number) => {
    const filtered = products.filter(product =>
      (category ? product.category === category : true) &&
      (minPrice || minPrice === 0 ? product.price >= minPrice : true) &&
      (maxPrice || maxPrice === 0 ? product.price <= maxPrice : true)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <InitializeProducts/>
      <Header />
      <section className="flex flex-col gap-36 md:gap-52 items-center justify-center px-2 sm:px-14 md:px-16 lg:px-30 xl:px-40">
        <div id='productsContent' className='w-full relative mt-8 py-14 px-1 md:px-4 lg:px-6 xl:px-16 border md:border-2 border-theme rounded-2xl md:rounded-3xl'>
          <div className="pageTitle absolute my-2 -top-12 sm:-top-9 md:-top-16 lg:-top-16 left-1/2 transform -translate-x-1/2 bg-theme h-fit w-fit py-2 md:py-4 px-4 sm:px-6 md:px-10 lg:px-14 rounded-xl">
            <h2 className='text-center text-base sm:text-xl md:text-2xl lg:text-3xl text-white font-bold my-2 md:my-4'>Checkout Our Products</h2>
          </div>

          <Filter onFilter={handleFilter} />

          <div className="flex items-center justify-between border-t md:border-t-2 border-theme pt-2">
            <button onClick={() => handleAddEditProduct()} className="bg-btn hover:bg-btn-hover text-white text-sm px-6 py-2 md:py-3 rounded-lg mb-4">Add Product</button>
            <button onClick={handleDeleteAllProducts} className="bg-red-500 hover:bg-red-600 text-white text-sm px-6 py-2 md:py-3 rounded-lg mb-4 ml-2">Delete All</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-2 md:gap-y-8 md:gap-x-6 flex-wrap">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onView={() => handleViewProduct(product)}
                  onEdit={() => handleAddEditProduct(product)}
                  onDelete={() => handleDeleteProduct(product)}
                />
              ))
            ) : (
              <p className='text-center text-lg'>No products available</p>
            )}
          </div>

          {isModalOpen && (
            <ProductModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              product={selectedProduct}
              onSave={handleSaveProduct}
              mode={modalMode}
            />
          )}

          {isDeleteModalOpen && (
            <DeleteModal
              isOpen={isDeleteModalOpen}
              onClose={() => setIsDeleteModalOpen(false)}
              onConfirm={confirmDelete}
              message={deleteMessage}
            />
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
