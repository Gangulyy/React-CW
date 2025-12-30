import './App.css';
import propertiesData from './data/properties.json';
import { useState } from 'react';

function App() {

  const properties = propertiesData.properties;
  const [selectedType, setSelectedType] = useState('');
  const [minPrice, setMinPrice] = useState('');


  // Create an empty list to store what we want to show
  const propertyElements = [];

  // Normal for loop
  for (let i = 0; i < properties.length; i++) {

    const property = properties[i];

    propertyElements.push(
      <div key={property.id} style={{ marginBottom: '20px' }}>
        <h3>{property.type}</h3>
        <p>Price: £{property.price}</p>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Location: {property.location}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Estate Agent App</h1>
      <label>
        Property Type:
        <select
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
        >
          <option value="">Any</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
        </select>
      </label>

    <div>
      <label>
        Minimum Price:
        <input
          type="number"
          value={minPrice}
          onChange={(event) => setMinPrice(event.target.value)}
        />
      </label>
    </div>



      {propertyElements}
    </div>
  );
}

export default App;
