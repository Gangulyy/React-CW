import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// ---- property type options -----
// Dropdown options for selecting property type (House, Flat, or Any)
const propertyTypeOptions = [
  { value: '', label: 'Any' },
  { value: 'House', label: 'House' },
  { value: 'Flat', label: 'Flat' }
];

// ---- bedroom options -----
const bedroomOptions = [
  { value: '', label: 'Any' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' }
];

// ---- postcode options -----
const postcodeOptions = [
  { value: 'BR1', label: 'BR1' },
  { value: 'BR5', label: 'BR5' },
  { value: 'NW1', label: 'NW1' },
  { value: 'SW19', label: 'SW19' },
  { value: 'E1', label: 'E1' }
];



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

          {/* react-select dropdown component */}
          <Select
            options={propertyTypeOptions}
            value={propertyTypeOptions.find(opt => opt.value === selectedType)}
            onChange={(option) => setSelectedType(option.value)}
            placeholder="Any"
            styles={{
              control: (base) => ({
                ...base,
                borderRadius: '8px',
                borderColor: '#e2e8f0',
                minHeight: '42px'
              })
            }}
          />
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
          
          {/* react-select dropdown component */}
          <Select
            options={bedroomOptions}
            value={bedroomOptions.find(opt => opt.value === minBedrooms)}
            onChange={(option) => setMinBedrooms(option.value)}
            placeholder="Any"
            styles={{
              // Custom styling for the dropdown button
              control: (base) => ({
                ...base,
                borderRadius: '8px',
                borderColor: '#e2e8f0',
                minHeight: '42px'
              })
            }}
          />

        </div>

        {/* ---maximum bedrooms filter ----*/}
        <div style={styles.formGroup}>
          <label style={styles.label}>Maximum Bedrooms</label>
          
          {/* react-select dropdown component */}
          <Select
            options={bedroomOptions}
            value={bedroomOptions.find(opt => opt.value === maxBedrooms)}
            onChange={(option) => setMaxBedrooms(option.value)}
            placeholder="Any"
            styles={{
              // Custom styling for the dropdown button
              control: (base) => ({
                ...base,
                borderRadius: '8px',
                borderColor: '#e2e8f0',
                minHeight: '42px'
              })
            }}
          />

        </div>

        {/* ---date from filters ---- (properties added after this date)*/}
        <div style={styles.formGroup}>
          <label style={styles.label}>Date From</label>
          
          {/* react-datepicker component */}
          <DatePicker
            selected={addedAfter ? new Date(addedAfter) : null}
            onChange={(date) =>
              setAddedAfter(date ? date.toISOString().split('T')[0] : '')
            }
            placeholderText="Select start date"
            dateFormat="dd/MM/yyyy"
            className="react-datepicker-input"
          />
        </div>

        {/* ---date to filters ---- (properties added before this date)*/}
        <div style={styles.formGroup}>
          <label style={styles.label}>Date To</label>
          
          {/* react-datepicker component */}
          <DatePicker
            selected={addedBefore ? new Date(addedBefore) : null}
            onChange={(date) =>
              setAddedBefore(date ? date.toISOString().split('T')[0] : '')
            }
            placeholderText="Select end date"
            dateFormat="dd/MM/yyyy"
            className="react-datepicker-input"
          />

        </div>

        {/* --- postcode area filter ----*/}
        <div style={styles.formGroup}>
          <label style={styles.label}>Postcode Area</label>
            <Select
              options={postcodeOptions}
              value={postcodeOptions.find(opt => opt.value === postcode)}
              onChange={(option) => setPostcode(option ? option.value : '')}
              placeholder="Select postcode"
              isClearable
              styles={{
                control: (base) => ({
                  ...base,
                  borderRadius: '8px',
                  borderColor: '#e2e8f0',
                  minHeight: '42px'
                })
              }}
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
    paddingLeft: '8px',
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
