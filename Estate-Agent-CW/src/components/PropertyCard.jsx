// Shows a single property card
function PropertyCard({ property, onSelect, isDraggable = false }) {
  
  // Called when user starts dragging this card.
  const handleDragStart = (e) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('application/json', JSON.stringify(property));
    e.currentTarget.style.opacity = '0.5';
  };

  // Restore visual state when drag ends (successful or cancelled).
  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = '1';
  };

  return (
    <div
      className="property-card"
      onClick={() => onSelect(property)}  // clicking the card opens details
      draggable={isDraggable}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ cursor: isDraggable ? 'move' : 'pointer' }}
    >
      
      {/* Main property image (first picture) */}
      <img
        src={property.pictures[0]}
        alt="Property"
      />

      {/* Basic property info */}
      <h3>{property.type}</h3>
      <p><strong>Price:</strong> £{property.price.toLocaleString()}</p>
      <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
      <p><strong>Location:</strong> {property.location}</p>
      
      {/* "View More" button */}
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