import React, { useState } from "react";

const chairs = [
  {
    name: "Modern Chairs",
    price: "$1,200",
    img: "/assets/images/Modern chairs.jpg",
  },
  {
    name: "Classic Velvet chairs",
    price: "$980",
    img: "/assets/images/Classic Velvet chair1.jpg",
  },
  {
    name: "Minimalist Beige chairs",
    price: "$1,050",
    img: "/assets/images/Hunt Chair1.jpg",
  },
  {
    name: "Luxury Leather chairs",
    price: "$1,500",
    img: "/assets/images/Leather2.jpg",
  },
];

export default function Chairs() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  // Convert "$1,200" → 1200
  const parsePrice = (priceStr) =>
    Number(priceStr.replace(/\$/g, "").replace(/,/g, ""));

  // Reset Filters
  const resetFilters = () => {
    setSearch("");
    setSort("");
    setPriceFilter("all");
  };

  // Filter + Sort Logic
  const filteredChairs = chairs
    .filter((chair) =>
      chair.name.toLowerCase().includes(search.trim().toLowerCase())
    )
    .filter((chair) => {
      const price = parsePrice(chair.price);
      if (priceFilter === "under1000") return price < 1000;
      if (priceFilter === "1000to1300") return price >= 1000 && price <= 1300;
      if (priceFilter === "above1300") return price > 1300;
      return true;
    })
    .sort((a, b) => {
      const priceA = parsePrice(a.price);
      const priceB = parsePrice(b.price);
      if (sort === "asc") return priceA - priceB;
      if (sort === "desc") return priceB - priceA;
      return 0;
    });

  return (
    <div className="bg-[#faf9f7]">
      {/* Hero Banner */}
      <div className="relative h-[500px] flex items-center justify-center text-center">
        <img
          src="/assets/images/swiper2.jpg"
          alt="Chairs Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          Elegant Chairs Collection
        </h1>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Search chairs..."
          className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sort */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by price</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        {/* Price Filter */}
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">All Prices</option>
          <option value="under1000">Under $1000</option>
          <option value="1000to1300">$1000 - $1300</option>
          <option value="above1300">Above $1300</option>
        </select>

        {/* Reset Button */}
        <button
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredChairs.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No chairs match your search or filter.
          </p>
        ) : (
          <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Discover Our Premium Chairs
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredChairs.map((chair, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  <img
                    src={chair.img}
                    alt={chair.name}
                    className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {chair.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{chair.price}</p>
                    <button className="mt-4 px-5 py-2 bg-[#0f172a] text-white rounded-lg hover:bg-[#1e293b] transition-colors">
                      Interior Design Chairs
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
