import { useState } from 'react';

function RemoveZone({ setFavourites }) {

/* Track whether user is currently dragging over the remove zone */
  const [isDragOver, setIsDragOver] = useState(false);

/* Called when dragging an item over the remove zone */
  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    // Only show effect if dragging a favourite item
    if (e.dataTransfer.types.includes('favourite-remove')) {
      setIsDragOver(true);
    }
  };

  /* Called when dragging leaves the remove zone */
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

/* Called when an item is dropped onto the remove zone */
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    try {
    /* Get the property ID from the dragged item */
      const propertyId = e.dataTransfer.getData('favourite-remove');
      
      /* Remove the property from favorites list */
      if (propertyId) {
        setFavourites((prev) => prev.filter((fav) => fav.id !== propertyId));
      }
    } catch (error) {
    /* Log error if something goes wrong */
      console.error('Error removing from favourites:', error);
    }
  };

  return (
    <div
      style={{
        ...styles.removeZone,

        /* ----styling---- */
        backgroundColor: isDragOver ? '#fee2e2' : '#fef2f2',
        border: isDragOver ? '3px dashed #ef4444' : '2px dashed #fecaca',
        transform: isDragOver ? 'scale(1.05)' : 'scale(1)'
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >

    {/* Icon changes based on drag state */}
      <div style={styles.icon}>{isDragOver ? '🗑️' : '❌'}</div>

    {/* Text changes based on drag state */}
      <p style={styles.text}>
        {isDragOver 
          ? 'Drop here to remove from favourites' 
          : 'Drag favourites here to remove'}
      </p>
    </div>
  );
}

/*---Styling object----*/
const styles = {

/* Main remove zone container */
  removeZone: {
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    marginTop: '20px',
    cursor: 'pointer'
  },

   /* Icon emoji styling */
  icon: {
    fontSize: '2rem',
    marginBottom: '8px'
  },

  /* Text label styling */
  text: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#ef4444',
    margin: 0
  }
};

export default RemoveZone;