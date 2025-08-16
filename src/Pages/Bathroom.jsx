import React, { useState } from "react";

const BathroomCollection = () => {
  const [search, setSearch] = useState("");

  const bathroomData = [
    {
      img: "/assets/images/bathroom1.jpg",
      title: "Modern Elegance",
      description: "Sleek lines and contemporary fixtures define this style.",
      products: ["Vanity Unit", "Wall-Mounted Mirror", "Shower Fixture", "Storage Solutions"],
      style: "Modern Elegance",
    },
    {
      img: "/assets/images/bathroom2.jpg",
      title: "Rustic Retreat",
      description: "Natural materials and warm colors create a cozy atmosphere.",
      products: ["Wooden Vanity", "Freestanding Tub", "Textured Towels", "Wood Accents"],
      style: "Rustic Retreat",
    },
    {
      img: "/assets/images/bathroom3.jpg",
      title: "Vintage Charm",
      description: "Classic designs and intricate details offer timeless appeal.",
      products: ["Pedestal Sink", "Antique Mirror", "Clawfoot Tub", "Decorative Lighting"],
      style: "Vintage Charm",
    },
    {
      img: "/assets/images/bathroom4.jpg",
      title: "Spa Serenity",
      description: "Create a tranquil environment with calming colors and materials.",
      products: ["Soaking Tub", "Rain Shower Head", "Essential Oil Diffuser", "Soft Bath Mat"],
      style: "Spa Serenity",
    },
    {
      img: "/assets/images/bathroom5.jpg",
      title: "Contemporary Chic",
      description: "Bold colors and innovative designs characterize this style.",
      products: ["Wall-Mounted Sink", "Geometric Tiles", "LED Lighting", "Modern Accessories"],
      style: "Contemporary Chic",
    },
    {
      img: "/assets/images/bathroom6.jpg",
      title: "Classic Elegance",
      description: "A timeless look with classic fixtures and finishes.",
      products: ["Double Vanity", "Brushed Nickel Fixtures", "Marble Countertops", "Elegant Accessories"],
      style: "Classic Elegance",
    },
  ];

  const filteredBathrooms = bathroomData.filter((bathroom) =>
    bathroom.title.toLowerCase().includes(search.toLowerCase()) ||
    bathroom.style.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="font-poppins bg-white text-gray-900">

       {/* Hero Banner */}
       <div className="relative h-[500px] flex items-center justify-center text-center">
        <img
          src="/assets/images/bathroom sinksbanner.jpg"
          alt="Sofas Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
        Discover Your Bathroom Style
        </h1>
      </div>
   
      {/* Heading */}
      
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Explore our beautifully crafted bathroom designs, perfect for adding a touch of elegance and functionality to your space. From modern to rustic styles, our collection offers a wide range of options to suit every taste.
      </p>

      {/* Search */}
      <div className="mt-6 flex flex-col items-center">
        <input
          type="text"
          placeholder="Search Bathroom Styles..."
          className="w-full sm:w-1/2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="mt-3 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {/* Collection Heading */}
      <h2 className="text-center text-3xl font-bold text-gray-800 mt-10">
        Bathroom Collection
      </h2>
      <p className="text-center text-gray-600 mt-2 max-w-2xl mx-auto">
        Explore our beautifully crafted country-style designs, perfect for adding a touch of rustic charm to any space. From modern to vintage styles, our collection offers a wide range of options to enhance your bathroom.
      </p>

      {/* Cards */}
      {filteredBathrooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {filteredBathrooms.map((bathroom, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={bathroom.img}
                alt={bathroom.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold">{bathroom.title}</h5>
                <p className="text-gray-600 text-sm mt-1">{bathroom.description}</p>
                <p className="mt-3 font-semibold text-gray-700">Products Used:</p>
                <ul className="list-disc list-inside text-gray-600 text-sm">
                  {bathroom.products.map((product, i) => (
                    <li key={i}>{product}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-red-500 mt-6">No products found.</p>
      )}
    </div>
  );
};

export default BathroomCollection;
