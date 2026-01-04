import { render, screen, fireEvent } from '@testing-library/react';
import PropertyDetails from '../components/PropertyDetails';

const mockProperty = {
  id: '1',
  type: 'House',
  price: 500000,
  bedrooms: 3,
  location: 'BR1 3HQ, London',
  pictures: ['house1.jpg', 'house2.jpg', 'house3.jpg'],
  description: 'Beautiful 3-bedroom house in excellent condition',
  floorPlan: 'floorplan.jpg'
};

describe('PropertyDetails Component Tests', () => {
  test('renders property details correctly', () => {
    const mockSetSelectedImage = jest.fn();
    const mockSetActiveTab = jest.fn();
    const mockOnBack = jest.fn();
    const mockSetFavourites = jest.fn();
    
    render(
      <PropertyDetails
        property={mockProperty}
        selectedImage={0}
        setSelectedImage={mockSetSelectedImage}
        activeTab="description"
        setActiveTab={mockSetActiveTab}
        onBack={mockOnBack}
        favourites={[]}
        setFavourites={mockSetFavourites}
      />
    );
    
    expect(screen.getByText('House')).toBeInTheDocument();
    expect(screen.getByText(/£500,000/i)).toBeInTheDocument();
    expect(screen.getByText(/Beautiful 3-bedroom house/i)).toBeInTheDocument();
  });

  test('back button calls onBack function', () => {
    const mockSetSelectedImage = jest.fn();
    const mockSetActiveTab = jest.fn();
    const mockOnBack = jest.fn();
    const mockSetFavourites = jest.fn();
    
    render(
      <PropertyDetails
        property={mockProperty}
        selectedImage={0}
        setSelectedImage={mockSetSelectedImage}
        activeTab="description"
        setActiveTab={mockSetActiveTab}
        onBack={mockOnBack}
        favourites={[]}
        setFavourites={mockSetFavourites}
      />
    );
    
    const backButton = screen.getByText(/Back to Search/i);
    fireEvent.click(backButton);
    
    expect(mockOnBack).toHaveBeenCalled();
  });
});