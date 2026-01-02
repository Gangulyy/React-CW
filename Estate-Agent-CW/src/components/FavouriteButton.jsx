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
    <button onClick={toggleFavourite} style={isFavourite ? styles.buttonActive : styles.button}>
      {isFavourite ? '♥️ Remove from Favourites' : '♡ Add to Favourites'}
    </button>
  );
}

const styles = {
  button: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#2563eb',
    background: 'white',
    border: '2px solid #2563eb',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginTop: '16px'
  },
  buttonActive: {
    padding: '12px 24px',
    fontSize: '1rem',
    fontWeight: '600',
    color: 'white',
    background: '#ef4444',
    border: '2px solid #ef4444',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginTop: '16px'
  }
};

export default FavouriteButton;
