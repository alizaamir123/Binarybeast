import React, { useState } from "react";

const sinks = [
  { name: "Modern", price: "$1,200", img: "/assets/images/sinks2.jpg" },
  { name: "Classic", price: "$980", img: "/assets/images/sinks1.jpg" },
  { name: "Minimalist", price: "$1,050", img: "/assets/images/sinks.jpg" },
  { name: "Luxury", price: "$1,500", img: "/assets/images/sinks3.jpg" },
];

export default function Sinks() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const parsePrice = (p) => Number(p.replace(/\$/g, "").replace(/,/g, ""));

  const filteredSinks = sinks
    .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    .filter((item) => {
      const price = parsePrice(item.price);
      if (priceFilter === "under1000") return price < 1000;
      if (priceFilter === "1000to1300") return price >= 1000 && price <= 1300;
      if (priceFilter === "above1300") return price > 1300;
      return true;
    })
    .sort((a, b) => {
      if (sort === "asc") return parsePrice(a.price) - parsePrice(b.price);
      if (sort === "desc") return parsePrice(b.price) - parsePrice(a.price);
      return 0;
    });

  return (
    <div className="bg-[#faf9f7]">
      {/* Hero Banner */}
      <div className="relative h-[500px] flex items-center justify-center text-center">
        <img
          src="/assets/images/mainkitchenproduct.jpg"
          alt="Sinks Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          Elegant Sinks Collection
        </h1>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 border border-gray-300 rounded-lg w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="px-4 py-2 border border-gray-300 rounded-lg"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by price</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>

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

        <button
          onClick={() => {
            setSearch("");
            setSort("");
            setPriceFilter("all");
          }}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
        >
          Reset
        </button>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredSinks.length === 0 ? (
          <p className="text-center text-gray-500">No sinks found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredSinks.map((sink, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={sink.img}
                  alt={sink.name}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {sink.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{sink.price}</p>
                  <button className="mt-4 px-5 py-2 bg-[#0f172a] text-white rounded-lg hover:bg-[#1e293b] transition-colors">
                    Interior Design Sinks
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
