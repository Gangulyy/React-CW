function PropertyCard({ property, onSelect }) {
  return (
    <div
      className="property-card"
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

      <button
        className="view-more-btn"
        onClick={(e) => {
          e.stopPropagation();   // prevents card click
          onSelect(property);    // go to property details
        }}
      >
        View More
      </button>
    </div>
  );
}

export default PropertyCard;
