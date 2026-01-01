import PropertyCard from './PropertyCard';

function FavouritesList({ favourites, onSelect, clearFavourites }) {

  if (favourites.length === 0) {
    return <p>No favourite properties yet.</p>;
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

export default FavouritesList;
