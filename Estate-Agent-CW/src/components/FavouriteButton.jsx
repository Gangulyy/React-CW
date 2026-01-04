// A toggle button that adds/removes a property from the favourites list.

function FavouriteButton({ property, favourites, setFavourites }) {
  
  // Check if this property is already in the favourites list
  const isFavourite = favourites.some(
    (fav) => fav.id === property.id
  );

  // Add property to favourites if not there, or remove it if already favourited
  function toggleFavourite() {
    if (isFavourite) {

      // Remove: filter out this property
      setFavourites(
        favourites.filter((fav) => fav.id !== property.id)
      );
    } else {
      // Add: append this property to the list
      setFavourites([...favourites, property]);
    }
  }

  return (
    <button onClick={toggleFavourite} 

    // Show active style (red) if favourited, inactive style (blue) if not
    style={isFavourite ? styles.buttonActive : styles.button}>
      {isFavourite ? '♥️ Remove from Favourites' : '♡ Add to Favourites'}
    </button>
  );
}

/* ----Styles for the component---- */
const styles = {
  button: {
    // Inactive state: blue outline style
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
    // Active state: red filled style
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
