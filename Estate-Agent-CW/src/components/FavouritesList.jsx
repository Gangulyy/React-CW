import PropertyCard from './PropertyCard';
import { useState } from 'react';

function FavouritesList({ favourites, onSelect, setFavourites }) {
  const [isDragOver, setIsDragOver] = useState(false);

  function removeFavourite(id) {
    setFavourites((prev) => prev.filter((fav) => fav.id !== id));
  }

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    try {
      const propertyData = e.dataTransfer.getData('application/json');
      const property = JSON.parse(propertyData);
      
      // Check if property already exists in favourites
      const exists = favourites.some((fav) => fav.id === property.id);
      
      if (!exists) {
        setFavourites((prev) => [...prev, property]);
      }
    } catch (error) {
      console.error('Error adding to favourites:', error);
    }
  };

  // Handle drag from favourites to remove
  const handleFavDragStart = (e, property) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('favourite-remove', property.id);
  };

  if (favourites.length === 0) {
    return (
      <div 
        style={{
          ...styles.emptyContainer,
          border: isDragOver ? '3px dashed #2563eb' : '2px dashed #e2e8f0',
          backgroundColor: isDragOver ? '#eff6ff' : 'white'
        }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div style={styles.emptyIcon}>♥️</div>
        <p style={styles.emptyText}>No favourite properties yet</p>
        <p style={styles.emptySubtext}>
          {isDragOver 
            ? '✨ Drop property here to add to favourites!' 
            : 'Drag properties here or click the favourite button'}
        </p>
      </div>
    );
  }

  return (
    <div 
      style={{
        ...styles.container,
        border: isDragOver ? '3px dashed #2563eb' : 'none',
        backgroundColor: isDragOver ? '#eff6ff' : 'white'
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div style={styles.header}>
        <h2 style={styles.heading}>♥️ Favourites ({favourites.length})</h2>
        <button
          onClick={() => setFavourites([])}
          style={styles.clearButton}
        >
          Clear All
        </button>
      </div>

      {isDragOver && (
        <div style={styles.dropIndicator}>
          ✨ Drop here to add to favourites
        </div>
      )}

      <div style={styles.grid}>
        {favourites.map((property) => (
          <div 
            key={property.id} 
            style={styles.cardWrapper}
            draggable
            onDragStart={(e) => handleFavDragStart(e, property)}
          >
            <button
              style={styles.removeButton}
              onClick={(e) => {
                e.stopPropagation(); 
                removeFavourite(property.id);
              }}
              title="Remove from favourites"
            >
              ❌
            </button>

            <PropertyCard
              property={property}
              onSelect={onSelect}
              isDraggable={false}
            />
          </div>
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
    marginBottom: '24px',
    transition: 'all 0.3s ease',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
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
    marginBottom: '24px',
    transition: 'all 0.3s ease'
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
  dropIndicator: {
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#dbeafe',
    border: '2px dashed #2563eb',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#2563eb'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px'
  },
  cardWrapper: {
    position: 'relative',
    cursor: 'move'
  },
  removeButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    background: 'white',
    border: 'none',
    fontSize: '1.1rem',
    cursor: 'pointer',
    padding: '6px',
    borderRadius: '50%',
    boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
    zIndex: 2
  }
};

export default FavouritesList;