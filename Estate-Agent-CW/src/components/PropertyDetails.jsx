import FavouriteButton from './FavouriteButton';

function PropertyDetails({
  property,
  selectedImage,
  setSelectedImage,
  activeTab,
  setActiveTab,
  onBack,
  favourites,
  setFavourites
}) {
  return (
    <div>
      <h2>Property Details</h2>

      {/* Tabs */}
      <div>
        <button onClick={() => setActiveTab('description')}>
          Description
        </button>

        <button onClick={() => setActiveTab('floorplan')}>
          Floor Plan
        </button>

        <button onClick={() => setActiveTab('map')}>
          Map
        </button>
      </div>

      {/* Main image */}
      <img
        src={property.pictures[selectedImage]}
        alt="Property"
        style={{ width: '300px' }}
      />

      {/* Thumbnails */}
      <div>
        {property.pictures.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Thumbnail"
            style={{
              width: '60px',
              marginRight: '10px',
              cursor: 'pointer',
              border:
                selectedImage === index
                  ? '2px solid black'
                  : '1px solid #ccc'
            }}
            onClick={() => setSelectedImage(index)}
          />
        ))}
      </div>

      {/* Property info */}
      <p><strong>Type:</strong> {property.type}</p>
      <p><strong>Price:</strong> £{property.price}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Location:</strong> {property.location}</p>

      <FavouriteButton
      property={property}
      favourites={favourites}
      setFavourites={setFavourites}
      />


      {/* Tabs content */}
      {activeTab === 'description' && (
        <p>{property.description}</p>
      )}

      {activeTab === 'floorplan' && (
        <div>
          <p>Floor plan will be shown here.</p>
        </div>
      )}

      {activeTab === 'map' && (
        <div>
          <p>Map will be shown here.</p>
        </div>
      )}

      <button onClick={onBack}>
        Back to Search
      </button>
    </div>
  );
}

export default PropertyDetails;
