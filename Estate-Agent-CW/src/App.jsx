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
  const [postcode, setPostcode] = useState('');



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

    // filter by date added (after selected date)
    if (addedAfter !== '') {

      const propertyDate = new Date(
        property.added.year,
        new Date(Date.parse(property.added.month + " 1, 2022")).getMonth(),
        property.added.day
      );

      // filter by postcode area
    if (postcode !== '' && !property.location.toUpperCase().includes(postcode.toUpperCase())) {
      continue;
    }


      const selectedDate = new Date(addedAfter);

      if (propertyDate < selectedDate) {
        continue;
      }
    }





    propertyElements.push(
      <div key={property.id} style={{ marginBottom: '20px' }}>
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
        Added After:
        <input
          type="date"
          value={addedAfter}
          onChange={(event) => setAddedAfter(event.target.value)}
        />
      </label>
    </div>

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






      {propertyElements}
    </div>
  );
}

export default App;
