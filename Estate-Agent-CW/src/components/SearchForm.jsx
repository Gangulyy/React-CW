function SearchForm({
  selectedType,
  setSelectedType,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  minBedrooms,
  setMinBedrooms,
  maxBedrooms,
  setMaxBedrooms,
  addedAfter,
  setAddedAfter,
  addedBefore,
  setAddedBefore,
  postcode,
  setPostcode
}) {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Search Properties</h2>

      <div style={styles.formGroup}>
        <label style={styles.label}>Property Type</label>
          Property Type:
          <select
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value)}
          >
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
      </div>

      <div style={styles.formGroup}>
        <label>
        Minimum Price (£{minPrice || 0})
        <input
            type="range"
            min="0"
            max="1500000"
            step="50000"
            value={minPrice || 0}
            onChange={(event) => setMinPrice(event.target.value)}
        />
        </label>
      </div>

      <div style={styles.formGroup}>
        <label>
        Maximum Price (£{maxPrice || 1500000})
        <input
            type="range"
            min="0"
            max="1500000"
            step="50000"
            value={maxPrice || 1500000}
            onChange={(event) => setMaxPrice(event.target.value)}
        />
        </label>
      </div>

      <div style={styles.formGroup}>
        <label>
        Minimum Bedrooms:
        <select
            value={minBedrooms}
            onChange={(event) => setMinBedrooms(event.target.value)}
        >
            <option value="">Any</option>
            <option value="1">1+</option>
            <option value="2">2+</option>
            <option value="3">3+</option>
            <option value="4">4+</option>
            <option value="5">5+</option>
        </select>
        </label>
      </div>

      <div style={styles.formGroup}>
        <label>
        Maximum Bedrooms:
        <select
            value={maxBedrooms}
            onChange={(event) => setMaxBedrooms(event.target.value)}
        >
            <option value="">Any</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </label>
      </div>

      <div style={styles.formGroup}>
        <label>
          Date From:
          <input
            type="date"
            value={addedAfter}
            onChange={(event) => setAddedAfter(event.target.value)}
          />
        </label>
      </div>

      <div style={styles.formGroup}>
        <label>
          Date To:
          <input
            type="date"
            value={addedBefore}
            onChange={(event) => setAddedBefore(event.target.value)}
          />
        </label>
      </div>

      <div style={styles.formGroup}>
        <label>
          Postcode Area:
          <input
            type="text"
            value={postcode}
            onChange={(event) => setPostcode(event.target.value)}
            placeholder="Ex: BR1, NW1"
          />
        </label>
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: 'white',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: '20px',  
    maxHeight: 'calc(100vh - 40px)',
    overflowY: 'auto'
  },

  heading: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '20px',
    borderBottom: '2px solid #2563eb',
    paddingBottom: '12px'
  },
    formGroup: {
    marginBottom: '20px'
  },
    label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#475569',
    marginBottom: '8px'
  },


};

export default SearchForm;
