import React, { useState } from "react";

const sofas = [
  { name: "Modern", price: "$90", img: "/assets/images/wall and arts mirror1.jpg" },
  { name: "Classic", price: "$150", img: "/assets/images/wall and arts mirror2.jpg" },
  { name: "Minimalist", price: "$200", img: "/assets/images/wall and arts mirror3.jpg" },
  { name: "Luxury", price: "$300", img: "/assets/images/wall and arts mirror4.jpg" },
];

export default function Sofas() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [wishlist, setWishlist] = useState([]);

  const parsePrice = (p) => Number(p.replace(/\$/g, "").replace(/,/g, ""));

  const toggleWishlist = (item) => {
    if (wishlist.find((wish) => wish.name === item.name)) {
      setWishlist(wishlist.filter((wish) => wish.name !== item.name));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  const isInWishlist = (name) => wishlist.some((item) => item.name === name);

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
          src="/assets/images/wall and arts mirrorbanner.jpg"
          alt="Wall and Arts Mirror Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          Elegant Wall and Arts Mirror Collection
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
                className="relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Wishlist Heart Icon */}
                <button
                  onClick={() => toggleWishlist(sofa)}
                  className="absolute top-3 right-3 z-10 text-2xl focus:outline-none"
                  aria-label="Toggle wishlist"
                >
                  {isInWishlist(sofa.name) ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="red"
                      viewBox="0 0 24 24"
                      stroke="red"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="gray"
                      className="w-8 h-8"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
                      />
                    </svg>
                  )}
                </button>

                <img
                  src={sofa.img}
                  alt={sofa.name}
                  className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-5 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {sofa.name}
                  </h3>
                  <p className="text-gray-600 mt-2">{sofa.price}</p>
                  <button className="mt-4 px-5 py-2 bg-[#0f172a] text-white rounded-lg hover:bg-[#1e293b]">
                    Wall and Arts Mirror
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
