// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [alldata, setAlldata] = useState([]);
//   const [term, setTerm] = useState('');

//   // Function to search images
//   const searchImages = async (term) => {
//     try {
//       const res = await axios.get('https://api.unsplash.com/search/photos', {
//         headers: {
//           Authorization: 'Client-ID 7mAEwF1hImoSIH3F1clMc9xoID8AykvNtrPZDv3DG0I',
//         },
//         params: {
//           query: term,
//         },
//       });
//       setAlldata(res.data.results);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   // Handle input change
//   const handleInputChange = (e) => {
//     setTerm(e.target.value);
//   };

//   // Handle button click
//   const handleSearch = () => {
//       searchImages(term);
//   };

//   return (
//     <div className="p-4">
//       <div className="mb-4">
//         <input
//           type="text"
//           className="border-black border p-2"
//           value={term}
//           onChange={handleInputChange}
//           placeholder="Search images"
//         />
//         <button
//           className="bg-black text-white p-2 ml-4"
//           onClick={handleSearch}
//         >
//           Search
//         </button>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {alldata.map((item, idx) => (
//           <div key={idx} className="border p-2">
//             <img src={item.urls.regular} alt={item.alt_description || 'Image'} className="w-full" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
