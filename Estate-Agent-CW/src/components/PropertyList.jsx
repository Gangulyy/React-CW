import PropertyCard from './PropertyCard';

function PropertyList({ properties, onSelect }) {
  return (
    <div>
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

export default PropertyList;
