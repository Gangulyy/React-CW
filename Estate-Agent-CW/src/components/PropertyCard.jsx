function PropertyCard({ property, onSelect }) {
    return (
    <div
        className="propertyCard"
        onClick={() => onSelect(property)}
    >
    <img
        src={property.pictures[0]}
        alt="Property"
    />

      <h3>{property.type}</h3>
      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Location:</strong> {property.location}</p>
    </div>
  );
}

export default PropertyCard;
