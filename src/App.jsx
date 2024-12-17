import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const App = () => {
  const [alldata, setAlldata] = useState([]);

  const handelSubmit = (term) => {
    console.log('Searching with : ', term);
    searchImages(term);
  };

  const searchImages = async (term) => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID 7mAEwF1hImoSIH3F1clMc9xoID8AykvNtrPZDv3DG0I',
      },
      params: {
        query: term,
      },
    });
    console.log(res.data.results);
    setAlldata(res.data.results);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <SearchBar onSubmit={handelSubmit} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-8">
        {alldata.map((items, idx) => {
          return (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src={items.urls.regular}
                alt={items.alt_description || 'Image'}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{items.user.name}</h3>
                <p className="text-sm text-gray-600">{items.alt_description || 'No description available'}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
