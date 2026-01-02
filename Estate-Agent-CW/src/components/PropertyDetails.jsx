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
    <div style={styles.container}>
      <button onClick={onBack} style={styles.backButton}>
        ← Back to Search
      </button>

      <div style={styles.content}>
        {/* Image Gallery */}
        <div style={styles.imageSection}>
          <img
            src={property.pictures[selectedImage]}
            alt="Property"
            style={styles.mainImage}
          />

          <div style={styles.thumbnailContainer}>
            {property.pictures.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Thumbnail"
                style={{
                  ...styles.thumbnail,
                  border: selectedImage === index ? '3px solid #2563eb' : '2px solid #e2e8f0',
                  opacity: selectedImage === index ? 1 : 0.7
                }}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

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
            style={{ width: '300px', maxWidth: '400px' }}
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

      </div>
    </div>
  );
}

const styles = {
  container: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
  backButton: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#64748b',
    background: 'white',
    border: '2px solid #e2e8f0',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginBottom: '24px'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    '@media (max-width: 968px)': {
      gridTemplateColumns: '1fr'
    }
  },
  thumbnailContainer: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  },
  thumbnail: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
};

export default PropertyDetails;
