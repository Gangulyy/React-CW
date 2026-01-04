import './App.css';
import propertiesData from './data/properties.json';
import { useState } from 'react'; /* Import React state hook */
import PropertyDetails from './components/PropertyDetails';
import SearchForm from './components/SearchForm';
import PropertyList from './components/PropertyList';
import FavouritesList from './components/FavouritesList';
import Header from './components/Header';
import Footer from './components/Footer';
import RemoveZone from './components/RemoveZone';


function App() {
  /* Extract properties array from imported JSON data */  
  const properties = propertiesData.properties;
  const [selectedType, setSelectedType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [maxBedrooms, setMaxBedrooms] = useState('');
  const [addedAfter, setAddedAfter] = useState('');
  const [addedBefore, setAddedBefore] = useState('');
  const [postcode, setPostcode] = useState('');
  const [selectedProperty, setSelectedProperty] = useState(null); /* Currently selected property for detailed view */
  const [selectedImage, setSelectedImage] = useState(0); /* Currently displayed image index in property details gallery */
  const [activeTab, setActiveTab] = useState('description');   /* Currently active tab in property details */
  const [favourites, setFavourites] = useState([]);


 /* Filter properties based on all selected criteria */
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
    /* Convert property date to Date object */
    const propertyDate = new Date(
      property.added.year,
      new Date(Date.parse(property.added.month + " 1, " + property.added.year)).getMonth(),
      property.added.day
    );
    /* Exclude if property is newer than addedBefore date */
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

    /* Exclude if property is older than addedAfter date */
    if (propertyDate < new Date(addedAfter)) {
      return false;
    }
  }

  return true;
});



function clearFavourites() {
  setFavourites([]);
}

   
/* ----Main render-----*/
return (
  <>
    <Header /> {/* Page header with title and tagline */}
    <div className="app"> {/* Main app container */}

      {/* shown when no property is selected */}
      {selectedProperty === null ? (
        <div className="searchLayout">

          {/* Search filters - left column*/}
          <div className="searchColumn">
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
          </div>

          {/* Available Properties -center column */}
          <div className="resultsColumn">
            <PropertyList
              /* Pass filtered properties */
              properties={filteredProperties}

              /* Handle property card click - shows details view */
              onSelect={(property) => {
                setSelectedProperty(property);
                setSelectedImage(0);
                setActiveTab('description');
              }}

              /* Pass favorite state for add/remove buttons */
              favourites={favourites}
              setFavourites={setFavourites}
            />
          </div>

          {/* Favourites - right column */}
          <div className="favouritesColumn">
            <FavouritesList
            /* Pass favorite properties */
              favourites={favourites}

              onSelect={(property) => {
                setSelectedProperty(property);
                setSelectedImage(0); /* Reset to first image */
                setActiveTab('description');
              }}
              setFavourites={setFavourites}
            />

            {/* Remove Zone - for dragging favourites out */}
            {/* appears when there are favorites */}
            {favourites.length > 0 && (
              <RemoveZone setFavourites={setFavourites} />
            )}
          </div>

        </div>
      /*detail view--shown when a property is selected */
      ) : (
        <PropertyDetails
          property={selectedProperty} /* Pass selected property data */
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          favourites={favourites}
          setFavourites={setFavourites}
          onBack={() => setSelectedProperty(null)} /* Go back to search view */
        />
      )}
    </div>
    
    {/* Page footer */}
    <Footer />
  </>
);
}

export default App;
