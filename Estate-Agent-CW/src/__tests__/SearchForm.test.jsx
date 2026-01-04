import { render, screen, fireEvent } from '@testing-library/react';
import SearchForm from '../components/SearchForm';

describe('SearchForm Component Tests', () => {
  const defaultProps = {
    selectedType: '',
    setSelectedType: jest.fn(),
    minPrice: '',
    setMinPrice: jest.fn(),
    maxPrice: '',
    setMaxPrice: jest.fn(),
    minBedrooms: '',
    setMinBedrooms: jest.fn(),
    maxBedrooms: '',
    setMaxBedrooms: jest.fn(),
    addedAfter: '',
    setAddedAfter: jest.fn(),
    addedBefore: '',
    setAddedBefore: jest.fn(),
    postcode: '',
    setPostcode: jest.fn()
  };

  test('renders all form fields correctly', () => {
    render(<SearchForm {...defaultProps} />);
    
    expect(screen.getByText(/Search Properties/i)).toBeInTheDocument();
    expect(screen.getByText(/Property Type/i)).toBeInTheDocument();
    expect(screen.getByText(/Minimum Price/i)).toBeInTheDocument();
    expect(screen.getByText(/Maximum Price/i)).toBeInTheDocument();
    expect(screen.getByText(/Postcode Area/i)).toBeInTheDocument();
  });

  test('calls setPostcode when postcode input changes', () => {
    const setPostcodeMock = jest.fn();
    
    render(<SearchForm {...defaultProps} setPostcode={setPostcodeMock} />);
    
    const postcodeInput = screen.getByPlaceholderText(/e.g., BR1, NW1/i);
    fireEvent.change(postcodeInput, { target: { value: 'BR1' } });
    
    expect(setPostcodeMock).toHaveBeenCalledWith('BR1');
  });
});