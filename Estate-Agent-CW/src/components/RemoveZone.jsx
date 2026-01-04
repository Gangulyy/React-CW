import { useState } from 'react';

function RemoveZone({ setFavourites }) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    
    // Only show effect if dragging a favourite item
    if (e.dataTransfer.types.includes('favourite-remove')) {
      setIsDragOver(true);
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    
    try {
      const propertyId = e.dataTransfer.getData('favourite-remove');
      
      if (propertyId) {
        setFavourites((prev) => prev.filter((fav) => fav.id !== propertyId));
      }
    } catch (error) {
      console.error('Error removing from favourites:', error);
    }
  };

  return (
    <div
      style={{
        ...styles.removeZone,
        backgroundColor: isDragOver ? '#fee2e2' : '#fef2f2',
        border: isDragOver ? '3px dashed #ef4444' : '2px dashed #fecaca',
        transform: isDragOver ? 'scale(1.05)' : 'scale(1)'
      }}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <div style={styles.icon}>{isDragOver ? '🗑️' : '❌'}</div>
      <p style={styles.text}>
        {isDragOver 
          ? 'Drop here to remove from favourites' 
          : 'Drag favourites here to remove'}
      </p>
    </div>
  );
}

const styles = {
  removeZone: {
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    transition: 'all 0.3s ease',
    marginTop: '20px',
    cursor: 'pointer'
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '8px'
  },
  text: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#ef4444',
    margin: 0
  }
};

export default RemoveZone;