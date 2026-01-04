import PropertyCard from './PropertyCard';

function PropertyList({ properties, onSelect }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Available Properties ({properties.length})</h2>
      <p style={styles.instruction}>💡 Drag properties to the favourites panel to add them</p>
      <div style={styles.grid}>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onSelect={onSelect}
            isDraggable={true}
          />
        ))}
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
  heading: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '8px',
    borderBottom: '2px solid #10b981',
    paddingBottom: '12px'
  },
  instruction: {
    fontSize: '0.875rem',
    color: '#64748b',
    marginBottom: '20px',
    fontStyle: 'italic'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px'
  }
};

export default PropertyList;