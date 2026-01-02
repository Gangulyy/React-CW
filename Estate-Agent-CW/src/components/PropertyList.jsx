import PropertyCard from './PropertyCard';

function PropertyList({ properties, onSelect }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Available Properties ({properties.length})</h2>
      <div style={styles.grid}>
        {properties.map((property) => (
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
    marginBottom: '24px',
    borderBottom: '2px solid #10b981',
    paddingBottom: '12px'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px'
  }
};

export default PropertyList;
