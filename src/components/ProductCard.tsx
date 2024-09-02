'use client';

import { Product } from '@/utils/types';
import { Delete, Edit } from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  product: Product;
  onView: (product: Product) => void;
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}


const ProductCard: React.FC<ProductCardProps> = ({ product, onView, onEdit, onDelete }) => {
  return (
    <article className="rounded-lg flex flex-col justify-between shadow-lg bg-[#00000020] backdrop-blur-sm transition-transform duration-300 ease-in-out transform hover:translate-y-1">
      
      <div className='items-start'>
        {/* Product Image */}
        <div className="relative w-full h-48 mb-4 self-start cursor-pointer rounded-t-md overflow-hidden" onClick={() => onView(product)}>
          <Image
            tabIndex={0}
            onKeyDown={(e) => {          
              if (e.key === 'Enter') {onView(product)}
            }}
            src={product.image || '/images/imagePlaceholder.jpeg'}
            alt={`${product.name} preview`}
            fill
            className="object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>        
        <p 
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {onView(product)}
        }}
        className="md:text-lg hover:text-theme font-semibold md:font-bold px-1 md:px-2 cursor-pointer" onClick={() => onView(product)}
          >
            {product.name} ({product.category})
        </p>
        <p className="text-sm px-1 md:px-2">{product.description}</p>
      </div>
      
      <div className="mt-4 flex justify-between items-end p-2 md:p-4">
        <p className="text-sm font-semibold">${product.price}</p>
        <div className='flex items-center justify-center gap-2'>
          <button onClick={() => onEdit(product)} className="text-sm text-[#aa5600] hover:text-[#aa5500e6] md:hover:text-white md:text-white md:bg-[#aa5600] md:hover:bg-[#aa5500e6] md:p-2 rounded-full">
            <Edit/>
          </button>
          <button className="text-sm text-red-500 hover:red-600 md:text-white md:bg-red-500 md:hover:bg-red-600 md:p-2 rounded-full" onClick={() => onDelete(product.id)}>
            <Delete/>
          </button>
        </div>
      </div>

    </article>
  );
};

export default ProductCard;
