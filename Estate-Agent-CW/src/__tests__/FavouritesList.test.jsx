import { render, screen, fireEvent } from '@testing-library/react';
import FavouritesList from '../components/FavouritesList';

const mockProperty = {
  id: '1',
  type: 'House',
  price: 500000,
  bedrooms: 3,
  location: 'BR1 3HQ',
  pictures: ['test.jpg'],
  description: 'Test property'
};

describe('FavouritesList Component Tests', () => {
  test('displays empty state when no favourites exist', () => {
    const mockSetFavourites = jest.fn();
    const mockOnSelect = jest.fn();
    
    render(
      <FavouritesList
        favourites={[]}
        onSelect={mockOnSelect}
        setFavourites={mockSetFavourites}
      />
    );
    
    expect(screen.getByText(/No favourite properties yet/i)).toBeInTheDocument();
  });

  test('displays favourite properties correctly', () => {
    const mockSetFavourites = jest.fn();
    const mockOnSelect = jest.fn();
    
    render(
      <FavouritesList
        favourites={[mockProperty]}
        onSelect={mockOnSelect}
        setFavourites={mockSetFavourites}
      />
    );
    
    expect(screen.getByText(/Favourites \(1\)/i)).toBeInTheDocument();
    expect(screen.getByText(/House/i)).toBeInTheDocument();
  });

  test('clears all favourites when clear button clicked', () => {
    const mockSetFavourites = jest.fn();
    const mockOnSelect = jest.fn();
    
    render(
      <FavouritesList
        favourites={[mockProperty]}
        onSelect={mockOnSelect}
        setFavourites={mockSetFavourites}
      />
    );
    
    const clearButton = screen.getByText(/Clear All/i);
    fireEvent.click(clearButton);
    
    // Check that setFavourites was called with empty array
    expect(mockSetFavourites).toHaveBeenCalledWith([]);
  });
});