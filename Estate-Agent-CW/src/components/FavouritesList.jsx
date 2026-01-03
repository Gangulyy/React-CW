import PropertyCard from './PropertyCard';

function FavouritesList({ favourites, onSelect, clearFavourites }) {

  if (favourites.length === 0) {
    return (
      <div style={styles.emptyContainer}>
      
      </div>
    );
  }

  return (
    <div>
      <h2>Favourite Properties</h2>

      <button onClick={clearFavourites}>
        Clear All Favourites
      </button>

      {favourites.map((property) => (
        <PropertyCard
          key={property.id}
          property={property}
          onSelect={onSelect}
        />
      ))}
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
};

export default FavouritesList;
