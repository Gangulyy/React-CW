import './App.css';
import propertiesData from './data/properties.json';
import { useState } from 'react';

function App() {

  const properties = propertiesData.properties;
  const [selectedType, setSelectedType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [maxBedrooms, setMaxBedrooms] = useState('');
  const [addedAfter, setAddedAfter] = useState('');
  const [addedBefore, setAddedBefore] = useState('');
  const [postcode, setPostcode] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null);




  // empty list to store what we want to show
  const propertyElements = [];

  // Normal for loop
  for (let i = 0; i < properties.length; i++) {

    const property = properties[i];

    // filter by type
    if (selectedType !== '' && property.type !== selectedType) {
      continue;
    }

    // filter by minimum price
    if (minPrice !== '' && property.price < Number(minPrice)) {
      continue;
    }

    // filter by maximum price
    if (maxPrice !== '' && property.price > Number(maxPrice)) {
      continue;
    }


    // filter by minimum bedrooms
    if (minBedrooms !== '' && property.bedrooms < Number(minBedrooms)) {
      continue;
    }

    // filter by maximum bedrooms
    if (maxBedrooms !== '' && property.bedrooms > Number(maxBedrooms)) {
      continue;
    }

    // filter by postcode area
    if (postcode !== '' && !property.location.toUpperCase().includes(postcode.toUpperCase())) {
      continue;
    }

    // filter by date added (before selected date)
    if (addedBefore !== '') {

      const propertyDate = new Date(
        property.added.year,
        new Date(Date.parse(property.added.month + " 1, " + property.added.year)).getMonth(),
        property.added.day
      );

      const selectedBeforeDate = new Date(addedBefore);

      if (propertyDate > selectedBeforeDate) {
        continue;
      }
    }


    // filter by date added (after selected date)
    if (addedAfter !== '') {

      const propertyDate = new Date(
        property.added.year,
        new Date(Date.parse(property.added.month + " 1," + property.added.year)).getMonth(),
        property.added.day
      );

      const selectedDate = new Date(addedAfter);

      if (propertyDate < selectedDate) {
        continue;
      }
    }


//make each card cickable
    propertyElements.push(
      <div 
        key={property.id}
        onClick={() => setSelectedProperty(property)}
        style={{
          border: '1px solid #ccc',
          padding: '15px',
          marginBottom: '20px', 
          cursor: 'pointer'
        }}
      >
        <img
          src={property.picture}
          alt="Property"
          style={{ width: '100%', maxWidth: '300px' }}
        />
        
        <h3>{property.type}</h3>
        <p>Price: £{property.price}</p>
        <p>Bedrooms: {property.bedrooms}</p>
        <p>Location: {property.location}</p>
      </div>
    );
  }
   
  // inputs
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



      <label>
        Maximum Price:
        <input
          type="number"
          value={maxPrice}
          onChange={(event) => setMaxPrice(event.target.value)}
        />
      </label>
    </div>


    <div>
      <label>
        Minimum Bedrooms:
        <input
          type="number"
          value={minBedrooms}
          onChange={(event) => setMinBedrooms(event.target.value)}
        />
      </label>
    </div>


    <div>
      <label>
        Maximum Bedrooms:
        <input
          type="number"
          value={maxBedrooms}
          onChange={(event) => setMaxBedrooms(event.target.value)}
        />
      </label>
    </div>

    <div>
      <label>
        Date From:
        <input
          type="date"
          value={addedAfter}
          onChange={(event) => setAddedAfter(event.target.value)}
        />
      </label>
    </div>

    <label>
      Date To:
      <input
        type="date"
        value={addedBefore}
        onChange={(event) => setAddedBefore(event.target.value)}
      />
    </label>


    <div>
      <label>
        Postcode Area:
        <input
          type="text"
          value={postcode}
          onChange={(event) => setPostcode(event.target.value)}
          placeholder="Ex: BR1, NW1"
        />
      </label>
    </div>






      {selectedProperty === null ? (
        propertyElements
      ):(
      <div>
        <h2>Property Details</h2>

        <img
          src={selectedProperty.picture}
          alt="Property"
          style={{ width: '300px' }}
        />

        <p><strong>Type:</strong> {selectedProperty.type}</p>
        <p><strong>Price:</strong> £{selectedProperty.price}</p>
        <p><strong>Bedrooms:</strong> {selectedProperty.bedrooms}</p>
        <p><strong>Location:</strong> {selectedProperty.location}</p>
        <p>{selectedProperty.description}</p>

        <button onClick={() => setSelectedProperty(null)}>
          Back to Search
        </button>
      </div>

      )}

    </div>
  );
}

export default App;
