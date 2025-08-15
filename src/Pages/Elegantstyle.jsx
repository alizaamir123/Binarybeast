import React, { useState } from "react";

const ElegantCollection = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const styles = [
    {
      title: "Classic Beauty",
      description: "A timeless design that adds grace to any room.",
      products: ["Chesterfield Sofa", "Crystal Chandelier", "Silk Drapes"],
      image: "/assets/images/eleganant1.jpg",
    },
    {
      title: "Modern Sophistication",
      description: "Elevate your space with sleek and stylish designs.",
      products: ["Minimalist Coffee Table", "Geometric Area Rug", "Abstract Wall Art"],
      image: "/assets/images/eleganant2.jpg",
    },
    {
      title: "Charming Elegance",
      description: "Perfect for creating a warm and inviting atmosphere.",
      products: ["Antique Side Table", "Decorative Throw Blankets", "Framed Family Portraits"],
      image: "/assets/images/eleganant3.jpg",
    },
  ];

  const filteredStyles = styles.filter((style) =>
    style.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 font-poppins">
      {/* Intro */}
      <h1 className="text-center text-3xl font-bold mb-4">Discover Your Elegant Style</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Dive into our collection of stunning elegant designs. Whether you're looking for classic beauty or modern sophistication, explore our diverse styles to find the perfect inspiration for your space.
      </p>

      {/* Search */}
      <div className="flex flex-col items-center mb-10">
        <input
          type="text"
          placeholder="Search Elegant Styles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg mt-3 hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      {/* Collection */}
      <h2 className="text-center text-3xl font-bold mb-4">Elegant Look Collection</h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-8">
        Explore our beautifully crafted elegant designs, perfect for adding a touch of sophistication to any space. Our collection offers a wide range of styles that embody grace and charm.
      </p>

      {/* Cards */}
      {filteredStyles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredStyles.map((style, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition"
            >
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

export default ElegantCollection;
