import './App.css';
import propertiesData from './data/properties.json';
import { useState } from 'react';
import PropertyDetails from './components/PropertyDetails';
import SearchForm from './components/SearchForm';
import PropertyList from './components/PropertyList';
import FavouritesList from './components/FavouritesList';



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
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [favourites, setFavourites] = useState([]);



const filteredProperties = properties.filter((property) => {

  if (selectedType !== '' && property.type !== selectedType) {
    return false;
  }

  if (minPrice !== '' && property.price < Number(minPrice)) {
    return false;
  }

  if (maxPrice !== '' && property.price > Number(maxPrice)) {
    return false;
  }

  if (minBedrooms !== '' && property.bedrooms < Number(minBedrooms)) {
    return false;
  }

  if (maxBedrooms !== '' && property.bedrooms > Number(maxBedrooms)) {
    return false;
  }

  if (postcode !== '' && !property.location.toUpperCase().includes(postcode.toUpperCase())) {
    return false;
  }

  if (addedBefore !== '') {
    const propertyDate = new Date(
      property.added.year,
      new Date(Date.parse(property.added.month + " 1, " + property.added.year)).getMonth(),
      property.added.day
    );

    if (propertyDate > new Date(addedBefore)) {
      return false;
    }
  }

  if (addedAfter !== '') {
    const propertyDate = new Date(
      property.added.year,
      new Date(Date.parse(property.added.month + " 1," + property.added.year)).getMonth(),
      property.added.day
    );

    if (propertyDate < new Date(addedAfter)) {
      return false;
    }
  }

  return true;
});



function clearFavourites() {
  setFavourites([]);
}

   
  // inputs
  return (

    <div>
      <h1>Estate Agent App</h1>

      <SearchForm
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        minBedrooms={minBedrooms}
        setMinBedrooms={setMinBedrooms}
        maxBedrooms={maxBedrooms}
        setMaxBedrooms={setMaxBedrooms}
        addedAfter={addedAfter}
        setAddedAfter={setAddedAfter}
        addedBefore={addedBefore}
        setAddedBefore={setAddedBefore}
        postcode={postcode}
        setPostcode={setPostcode}
      />



      {selectedProperty === null ? (
        <>
          <FavouritesList
            favourites={favourites}
            onSelect={(property) => {
              setSelectedProperty(property);
              setSelectedImage(0);
              setActiveTab('description');
            }}
            clearFavourites={clearFavourites}
          />

          <PropertyList
            properties={filteredProperties}
            onSelect={(property) => {
              setSelectedProperty(property);
              setSelectedImage(0);
              setActiveTab('description');
            }}
          />
        </>
      ) : (
        <PropertyDetails
          property={selectedProperty}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          favourites={favourites}
          setFavourites={setFavourites}
          onBack={() => setSelectedProperty(null)}
        />
      )}




    </div>
  );
}

export default App;
