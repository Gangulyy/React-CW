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
    <div>
      <h2>Search Properties</h2>

      <label>
        Property Type:
        <select
          value={selectedType}
          onChange={(event) => setSelectedType(event.target.value)}
        >
          <option value="">Any</option>
          <option value="House">House</option>
          <option value="Flat">Flat</option>
        </select>
      </label>

      <div>
        <label>
          Minimum Price:
          <input
            type="number"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
          />
        </label>

        <label>
          Maximum Price:
          <input
            type="number"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Minimum Bedrooms:
          <input
            type="number"
            value={minBedrooms}
            onChange={(event) => setMinBedrooms(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Maximum Bedrooms:
          <input
            type="number"
            value={maxBedrooms}
            onChange={(event) => setMaxBedrooms(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Date From:
          <input
            type="date"
            value={addedAfter}
            onChange={(event) => setAddedAfter(event.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Date To:
          <input
            type="date"
            value={addedBefore}
            onChange={(event) => setAddedBefore(event.target.value)}
          />
        </label>
      </div>

      <div>
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

export default SearchForm;
