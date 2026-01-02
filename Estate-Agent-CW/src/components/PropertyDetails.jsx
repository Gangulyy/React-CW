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

        {/* Property Details */}
        <div style={styles.detailsSection}>
          <h2 style={styles.heading}>{property.type}</h2>
          
          <div style={styles.priceTag}>£{property.price.toLocaleString()}</div>

          <div style={styles.infoGrid}>
            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Bedrooms</div>
              <div style={styles.infoValue}>🛏️ {property.bedrooms}</div>
            </div>
            <div style={styles.infoItem}>
              <div style={styles.infoLabel}>Location</div>
              <div style={styles.infoValue}>📍 {property.location}</div>
            </div>
          </div>

          <FavouriteButton
            property={property}
            favourites={favourites}
            setFavourites={setFavourites}
          />

          {/* Tabs */}
          <div style={styles.tabs}>
            <button 
              onClick={() => setActiveTab('description')}
              style={activeTab === 'description' ? styles.tabActive : styles.tab}
            >
              Description
            </button>

            <button 
              onClick={() => setActiveTab('floorplan')}
              style={activeTab === 'floorplan' ? styles.tabActive : styles.tab}
            >
              Floor Plan
            </button>

            <button 
              onClick={() => setActiveTab('map')}
              style={activeTab === 'map' ? styles.tabActive : styles.tab}
            >
              Map
            </button>
          </div>

          {/* Tabs content */}
          <div style={styles.tabContent}>
            {activeTab === 'description' && (
              <p style={styles.description}>{property.description}</p>
            )}

            {activeTab === 'floorplan' && (
              <div style={styles.placeholder}>
                <div style={styles.placeholderIcon}>📐</div>
                <p>Floor plan will be shown here</p>
              </div>
            )}

            {activeTab === 'map' && (
              <div style={styles.placeholder}>
                <div style={styles.placeholderIcon}>🗺️</div>
                <p>Map will be shown here</p>
              </div>
            )}
          </div>
        </div>
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
  imageSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  mainImage: {
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
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
  detailsSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  heading: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: 0
  },
  priceTag: {
    fontSize: '1.75rem',
    fontWeight: '700',
    color: '#2563eb',
    padding: '12px 20px',
    background: '#eff6ff',
    borderRadius: '8px',
    display: 'inline-block',
    width: 'fit-content'
  },
    infoGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },
    infoItem: {
    padding: '16px',
    background: '#f8fafc',
    borderRadius: '8px',
    border: '1px solid #e2e8f0'
  },
  infoLabel: {
    fontSize: '0.875rem',
    color: '#64748b',
    marginBottom: '4px',
    fontWeight: '500'
  },
  infoValue: {
    fontSize: '1.125rem',
    color: '#1e293b',
    fontWeight: '600'
  },
  tabs: {
    display: 'flex',
    gap: '8px',
    borderBottom: '2px solid #e2e8f0',
    marginTop: '16px'
  },
};

export default PropertyDetails;
