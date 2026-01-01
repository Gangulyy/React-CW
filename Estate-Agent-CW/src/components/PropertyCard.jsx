function PropertyCard({ property, onSelect }) {
  return (
    <div
      onClick={() => onSelect(property)}
      style={{
        border: '1px solid #ccc',
        padding: '15px',
        marginBottom: '20px',
        cursor: 'pointer'
      }}
    >
      <img
        src={property.pictures[0]}
        alt="Property"
        style={{ width: '100%', maxWidth: '300px' }}
      />

      <h3>{property.type}</h3>
      <p>Price: £{property.price}</p>
      <p>Bedrooms: {property.bedrooms}</p>
      <p>Location: {property.location}</p>
    </div>
  );
}

export default PropertyCard;
