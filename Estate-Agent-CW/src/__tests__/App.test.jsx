import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

// Mock properties data for testing
jest.mock('../data/properties.json', () => ({
  properties: [
    {
      id: '1',
      type: 'House',
      price: 500000,
      bedrooms: 3,
      location: 'BR1 3HQ',
      added: { day: 15, month: 'September', year: 2024 },
      pictures: ['test.jpg'],
      description: 'Test house'
    },
    {
      id: '2',
      type: 'Flat',
      price: 300000,
      bedrooms: 2,
      location: 'NW1 2AB',
      added: { day: 20, month: 'October', year: 2024 },
      pictures: ['test2.jpg'],
      description: 'Test flat'
    }
  ]
}));

describe('App Component - Core Filtering Tests', () => {
  test('renders the application with all initial properties', () => {
    render(<App />);
    
    // Check that search heading is rendered (more specific than checking header)
    expect(screen.getByText(/Search Properties/i)).toBeInTheDocument();
    
    // Check that both properties are initially displayed
    expect(screen.getByText(/Available Properties \(2\)/i)).toBeInTheDocument();
  });

  test('filters properties by price range correctly', () => {
    const { container } = render(<App />);
    
    // Get the first range input (minimum price)
    const rangeInputs = container.querySelectorAll('input[type="range"]');
    const minPriceInput = rangeInputs[0];
    
    // Set minimum price to 400000
    fireEvent.change(minPriceInput, { target: { value: '400000' } });
    
    // Should filter out the flat (£300,000)
    expect(screen.getByText(/Available Properties \(1\)/i)).toBeInTheDocument();
  });

  test('filters properties by postcode area correctly', () => {
    render(<App />);
    
    // Find postcode input
    const postcodeInput = screen.getByPlaceholderText(/e.g., BR1, NW1/i);
    
    // Search for BR1 postcode area
    fireEvent.change(postcodeInput, { target: { value: 'BR1' } });
    
    // Should show only BR1 properties
    expect(screen.getByText(/BR1 3HQ/i)).toBeInTheDocument();
    expect(screen.queryByText(/NW1 2AB/i)).not.toBeInTheDocument();
  });
});