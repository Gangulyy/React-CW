function PropertyCard({ property, onSelect }) {
    return (
    <div
        className="propertyCard"
        onClick={() => onSelect(property)}
        style={{ width: '100%' }}
    >
    <img
        src={property.pictures[0]}
        alt="Property"
        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
    />

      <h3>{property.type}</h3>
      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Location:</strong> {property.location}</p>
    </div>
  );
}

export default PropertyCard;
