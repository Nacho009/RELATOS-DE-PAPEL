import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch }) => (
  <div className="search-bar flex gap-4 mb-4">
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} 
      placeholder="Buscar libro..."
      className="search-bar__input p-2 border rounded w-full"
    />
    <button
      onClick={handleSearch}
      className="search-bar__button bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700"
    >
      Buscar
    </button>
  </div>
);

export default SearchBar;
