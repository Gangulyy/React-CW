function PropertyCard({ property, onSelect, isDraggable = false }) {
  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('application/json', JSON.stringify(property));
    e.currentTarget.style.opacity = '0.5';
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = '1';
  };

  return (
    <div
      className="property-card"
      onClick={() => onSelect(property)}
      draggable={isDraggable}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ cursor: isDraggable ? 'move' : 'pointer' }}
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
          e.stopPropagation();
          onSelect(property);
        }}
      >
        View More
      </button>
    </div>
  );
}

export default PropertyCard;