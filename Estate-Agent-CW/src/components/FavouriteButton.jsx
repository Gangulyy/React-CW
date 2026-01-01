function FavouriteButton({ property, favourites, setFavourites }) {

  const isFavourite = favourites.some(
    (fav) => fav.id === property.id
  );

  function toggleFavourite() {
    if (isFavourite) {
      setFavourites(
        favourites.filter((fav) => fav.id !== property.id)
      );
    } else {
      setFavourites([...favourites, property]);
    }
  }

  return (
    <button onClick={toggleFavourite}>
      {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
    </button>
  );
}

export default FavouriteButton;
