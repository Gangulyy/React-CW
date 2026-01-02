import PropertyCard from './PropertyCard';

function PropertyList({ properties, onSelect }) {
  return (
    <div style={styles.container}>
      {properties.map((property) => (
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
  container: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
  },
};

export default PropertyList;
