import PropertyCard from './PropertyCard';

function FavouritesList({ favourites, onSelect, clearFavourites }) {

  if (favourites.length === 0) {
    return (
      <div style={styles.emptyContainer}>
        <div style={styles.emptyIcon}>♥️</div>
        <p style={styles.emptyText}>No favourite properties yet</p>
        <p style={styles.emptySubtext}>Click the heart icon on any property to save it here</p>   
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h2 style={styles.heading}>♥️ Favourites ({favourites.length})</h2>
        <button onClick={clearFavourites} style={styles.clearButton}>
          Clear All
        </button>
      </div>

      <div style={styles.grid}>
        {favourites.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  emptyContainer: {
    background: 'white',
    borderRadius: '12px',
    padding: '40px 24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    marginBottom: '24px'
  },
  emptyIcon: {
    fontSize: '3rem',
    marginBottom: '16px',
    opacity: 0.3
  },
  emptyText: {
    fontSize: '1.125rem',
    fontWeight: '600',
    color: '#64748b',
    marginBottom: '8px'
  },
  emptySubtext: {
    fontSize: '0.875rem',
    color: '#94a3b8'
  },
  container: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    marginBottom: '24px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    flexWrap: 'wrap',
    gap: '12px'
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    margin: 0
  },
  clearButton: {
    padding: '8px 16px',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#ef4444',
    background: 'white',
    border: '2px solid #ef4444',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s'
  },
};

export default FavouritesList;
