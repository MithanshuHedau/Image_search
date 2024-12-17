import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handelClick = () => {
    onSubmit(searchTerm);
  };

  const handelInput = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex items-center space-x-2 bg-gray-100 p-4 rounded-lg shadow-lg">
      <input
        type="text"
        onChange={handelInput}
        className="flex-1 border border-gray-300 rounded-lg p-3 text-lg focus:outline-none focus:ring-2 focus:ring-black"
        placeholder="Search..."
      />
      <button
        className="bg-black text-white font-bold text-xl p-3 rounded-lg hover:bg-gray-800 transition-all"
        onClick={handelClick}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
