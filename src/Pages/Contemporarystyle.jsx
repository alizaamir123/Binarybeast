import React, { useState } from "react";
import stylesData from "../data/contemporaryData.json"; // JSON import

const ContemporaryCollection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStyles = stylesData.filter((style) =>
    style.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-poppins bg-white text-gray-900">

 {/* Hero Banner */}
 <div className="relative h-[500px] flex items-center justify-center text-center">
        <img
          src="/assets/images/swiper4.jpg"
          alt="Sofas Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
        Discover Your Contemporary Style
        </h1>
      </div>

      {/* Intro */}
      
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Dive into our collection of stunning contemporary designs. Whether you're looking for sleek lines,
        modern aesthetics, or vibrant colors, explore our diverse styles to find the perfect inspiration
        for your space.
      </p>

      {/* Search */}
      <div className="flex flex-col items-center mb-10">
        <input
          type="text"
          placeholder="Search Contemporary Styles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-3 hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Collection */}
      <h2 className="text-center text-3xl font-bold mb-4">Contemporary Collection</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Explore our beautifully crafted contemporary designs, perfect for adding a touch of modern elegance
        to any space. Our collection offers a wide range of styles that embody sophistication and flair.
      </p>

      {/* Cards */}
      {filteredStyles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredStyles.map((style, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
              <img src={style.image} alt={style.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <h5 className="text-xl font-semibold mb-2">{style.title}</h5>
                <p className="text-gray-600 mb-3">{style.description}</p>
                <p className="font-semibold mb-1">Products Used:</p>
                <ul className="list-disc list-inside text-gray-500">
                  {style.products.map((product, i) => (
                    <li key={i}>{product}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      )}
    </div>
  );
};

export default ContemporaryCollection;
