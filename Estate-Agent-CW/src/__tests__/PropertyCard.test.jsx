import { render, screen, fireEvent } from '@testing-library/react';
import PropertyCard from '../components/PropertyCard';

const mockProperty = {
  id: '1',
  type: 'House',
  price: 500000,
  bedrooms: 3,
  location: 'BR1 3HQ, London',
  pictures: ['house1.jpg', 'house2.jpg'],
  description: 'Beautiful 3-bedroom house'
};

describe('PropertyCard Component Tests', () => {
  test('renders property information correctly', () => {
    const mockOnSelect = jest.fn();
    
    render(
      <PropertyCard
        property={mockProperty}
        onSelect={mockOnSelect}
        isDraggable={false}
      />
    );
    
    // Check all key information is displayed
    expect(screen.getByText('House')).toBeInTheDocument();
    expect(screen.getByText(/£500,000/i)).toBeInTheDocument();
    expect(screen.getByText(/BR1 3HQ, London/i)).toBeInTheDocument();
  });

  test('calls onSelect when View More button is clicked', () => {
    const mockOnSelect = jest.fn();
    
    render(
      <PropertyCard
        property={mockProperty}
        onSelect={mockOnSelect}
        isDraggable={false}
      />
    );
    
    const viewMoreButton = screen.getByText(/View More/i);
    fireEvent.click(viewMoreButton);
    
    expect(mockOnSelect).toHaveBeenCalledWith(mockProperty);
  });
});