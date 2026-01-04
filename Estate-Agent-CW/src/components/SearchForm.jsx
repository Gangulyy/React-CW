/*displays all the search filters on the left side */
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
      <div style={styles.scrollArea}>  {/* Scrollable area for all filters */}
        <h2 style={styles.heading}>Search Properties</h2> {/* Form title */}
        
        {/* -----property type filter---- */}
        <div style={styles.formGroup}>
          <label style={styles.label}>Property Type</label>
          {/* drop down */}
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

        {/* ---minimum price filter ----*/}
        <div style={styles.formGroup}>
          <label style={styles.label}>
            Minimum Price: <span style={styles.rangeValue}>£{(minPrice || 0).toLocaleString()}</span>
          </label>
          {/* Slider from £0 to £1,500,000 */}
          <input
              style={styles.range}
              type="range"
              min="0"
              max="1500000"
              step="50000" /* Increments of £50,000 */
              value={minPrice || 0}
              onChange={(event) => setMinPrice(event.target.value)}
          />
        </div>


        {/* ---maximum price filter ----*/}
        <div style={styles.formGroup}>
          {/* Label shows current maximum price value */}
          <label style={styles.label}>
            Maximum Price: <span style={styles.rangeValue}>£{(maxPrice || 1500000).toLocaleString()}</span>
          </label>
          {/* Slider from £0 to £1,500,000 */}
          <input
              style={styles.range}
              type="range"
              min="0"
              max="1500000"
              step="50000"
              value={maxPrice || 1500000} /* Defaults to max if not set */
              onChange={(event) => setMaxPrice(event.target.value)}
          />
        </div>

        {/* ---minimum bedrooms filter ----*/}
        <div style={styles.formGroup}>
          <label style={styles.label}>Minimum Bedrooms</label>
          {/*Dropdown*/}
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

        {/* ---maximum bedrooms filter ----*/}
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

        {/* ---date from filters ---- (properties added after this date)*/}
        <div style={styles.formGroup}>
          <label style={styles.label}>Date From</label>
          <input
              style={styles.input}
              type="date"
              value={addedAfter}
              onChange={(event) => setAddedAfter(event.target.value)}
            />
        </div>

        {/* ---date to filters ---- (properties added before this date)*/}
        <div style={styles.formGroup}>
          <label style={styles.label}>Date To</label>
          <input
              style={styles.input}
              type="date"
              value={addedBefore}
              onChange={(event) => setAddedBefore(event.target.value)}
            />
        </div>

        {/* --- postcode area filter ----*/}
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

/* All inline styles for the form elements */
const styles = {

  /* Main container - white box with shadow, sticky positioning */
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

  /* Scrollable area inside the container */
  scrollArea: {
    paddingRight: '8px',  
    maxHeight: 'calc(100vh - 70px)',
    overflowY: 'auto',
    paddingBottom: '20px'
  },

  /* Form title "Search Properties" */
  heading: {
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '20px',
    borderBottom: '2px solid #2563eb',
    paddingBottom: '12px'
  },

  /* Wraps each filter (label + input) */
  formGroup: {
    marginBottom: '20px'
  },

  /* Label text styling */
  label: {
    display: 'block',
    fontSize: '0.875rem',
    fontWeight: '600',
    color: '#475569',
    marginBottom: '8px'
  },

  /* Dropdown select boxes */
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

  /* Text input boxes (date, postcode) */
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

  /* Range slider styling */
  range: {
    width: '100%',
    height: '6px',
    background: '#e2e8f0',
    borderRadius: '3px',
    outline: 'none',
    cursor: 'pointer'
  },

  /* Blue price value display (right side of label) */
  rangeValue: {
    fontWeight: '700',
    color: '#2563eb',
    float: 'right'
  }
};

export default SearchForm;
