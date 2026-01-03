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
      <div style={styles.scrollArea}>
        <h2 style={styles.heading}>Search Properties</h2>

        <div style={styles.formGroup}>
          <label style={styles.label}>Property Type</label>
          <select
            style={styles.select}
            value={selectedType}
            onChange={(event) => setSelectedType(event.target.value)}
          >
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Minimum Price: <span style={styles.rangeValue}>£{(minPrice || 0).toLocaleString()}</span>
          </label>
          <input
              style={styles.range}
              type="range"
              min="0"
              max="1500000"
              step="50000"
              value={minPrice || 0}
              onChange={(event) => setMinPrice(event.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>
            Maximum Price: <span style={styles.rangeValue}>£{(maxPrice || 1500000).toLocaleString()}</span>
          </label>
          <input
              style={styles.range}
              type="range"
              min="0"
              max="1500000"
              step="50000"
              value={maxPrice || 1500000}
              onChange={(event) => setMaxPrice(event.target.value)}
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Minimum Bedrooms</label>
          <select
              style={styles.select}
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
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Maximum Bedrooms</label>
          <select
              style={styles.select}
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
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Date From</label>
          <input
              style={styles.input}
              type="date"
              value={addedAfter}
              onChange={(event) => setAddedAfter(event.target.value)}
            />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Date To</label>
          <input
              style={styles.input}
              type="date"
              value={addedBefore}
              onChange={(event) => setAddedBefore(event.target.value)}
            />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Postcode Area</label>
          <input
              style={styles.input}
              type="text"
              value={postcode}
              onChange={(event) => setPostcode(event.target.value)}
              placeholder="e.g., BR1, NW1"
            />
        </div>
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
    overflow: 'hidden'
  },
  scrollArea: {
    paddingRight: '8px',  
    maxHeight: 'calc(100vh - 70px)',
    overflowY: 'auto',
    paddingBottom: '20px'
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
  select: {
    width: '100%',
    padding: '10px 12px',
    fontSize: '1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: 'white',
    color: '#1e293b',
    cursor: 'pointer',
    transition: 'border-color 0.2s',
    outline: 'none'
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    fontSize: '1rem',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    backgroundColor: 'white',
    color: '#1e293b',
    transition: 'border-color 0.2s',
    outline: 'none'
  },
  range: {
    width: '100%',
    height: '6px',
    background: '#e2e8f0',
    borderRadius: '3px',
    outline: 'none',
    cursor: 'pointer'
  },
  rangeValue: {
    fontWeight: '700',
    color: '#2563eb',
    float: 'right'
  }
};

export default SearchForm;
