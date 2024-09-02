import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '../components/ProductCard';
import { Product } from '@/utils/types';

test('renders product card with correct information', () => {
  const mockProduct: Product = {
    id: '1',
    name: 'Test Product',
    price: 10,
    category: 'Test Category',
    description: 'This is a test product.',
    image: '/images/testImage.jpeg',
  };

  const handleView = jest.fn();
  const handleEdit = jest.fn();
  const handleDelete = jest.fn();

  render(
    <ProductCard
      product={mockProduct}
      onView={handleView}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );

  // Check if the product name and category are rendered
  expect(screen.getByText('Test Product (Test Category)')).toBeInTheDocument();
  
  // Check if the product description is rendered
  expect(screen.getByText('This is a test product.')).toBeInTheDocument();
  
  // Check if the price is rendered
  expect(screen.getByText('$10')).toBeInTheDocument();
  
  // Check if the image is rendered with correct src
  expect(screen.getByAltText('Test Product preview')).toBeInTheDocument();
  
  // Check if the view button works
  fireEvent.click(screen.getByAltText('Test Product preview'));
  expect(handleView).toHaveBeenCalledWith(mockProduct);
  
  // Check if the edit button works
  fireEvent.click(screen.getByRole('button', { name: /edit/i }));
  expect(handleEdit).toHaveBeenCalledWith(mockProduct);
  
  // Check if the delete button works
  fireEvent.click(screen.getByRole('button', { name: /delete/i }));
  expect(handleDelete).toHaveBeenCalledWith(mockProduct.id);
});
