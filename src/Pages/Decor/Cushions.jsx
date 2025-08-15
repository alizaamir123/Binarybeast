import React, { useState } from "react";

const sofas = [
  { name: "Modern", price: "$80", img: "/assets/images/cushions and throws1.jpg" },
  { name: "Classic", price: "$120", img: "/assets/images/cushions and throws22.jpg" },
  { name: "Minimalist", price: "$150", img: "/assets/images/cushions and throws3.jpg" },
  { name: "Luxury", price: "$250", img: "/assets/images/cushions and throws4.jpg" },
];

export default function Sofas() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const parsePrice = (p) => Number(p.replace(/\$/g, "").replace(/,/g, ""));

  const filteredSofas = sofas
    .filter((s) => s.name.toLowerCase().includes(search.toLowerCase()))
    .filter((s) => {
      const price = parsePrice(s.price);
      if (priceFilter === "under100") return price < 100;
      if (priceFilter === "100to200") return price >= 100 && price <= 200;
      if (priceFilter === "above200") return price > 200;
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
          src="/assets/images/cushions and throwsbanner.jpg"
          alt="Cushions and Throws Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          Elegant Cushions and Throws Collection
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
          <option value="under100">Under $100</option>
          <option value="100to200">$100 - $200</option>
          <option value="above200">Above $200</option>
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

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredSofas.length === 0 ? (
          <p className="text-center text-gray-500">No items found</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredSofas.map((sofa, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={sofa.img}
                  alt={sofa.name}
                  className="w-full h-70 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {sofa.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{sofa.price}</p>
                  <button className="mt-4 px-5 py-2 bg-[#0f172a] text-white rounded-lg hover:bg-[#1e293b]">
                    Cushions and Throws
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
