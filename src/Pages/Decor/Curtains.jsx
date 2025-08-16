import React, { useState } from "react";

const sofas = [
  {
    name: "Modern",
    price: "$120",
    img: "/assets/images/curtains and blinds.jpg",
  },
  {
    name: "Classic",
    price: "$180",
    img: "/assets/images/curtains and blinds1.jpg",
  },
  {
    name: "Minimalist",
    price: "$220",
    img: "/assets/images/curtains and blinds2.jpg",
  },
  {
    name: "Luxury",
    price: "$350",
    img: "/assets/images/curtains and blinds3.jpg",
  },
];

export default function Sofas() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");
  const [wishlist, setWishlist] = useState([]);

  const parsePrice = (priceStr) =>
    Number(priceStr.replace(/\$/g, "").replace(/,/g, ""));

  const resetFilters = () => {
    setSearch("");
    setSort("");
    setPriceFilter("all");
  };

  const toggleWishlist = (item) => {
    if (wishlist.find((wish) => wish.name === item.name)) {
      setWishlist(wishlist.filter((wish) => wish.name !== item.name));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  const isInWishlist = (name) => wishlist.some((item) => item.name === name);

  const filteredSofas = sofas
    .filter((sofa) =>
      sofa.name.toLowerCase().includes(search.trim().toLowerCase())
    )
    .filter((sofa) => {
      const price = parsePrice(sofa.price);
      if (priceFilter === "under150") return price < 150;
      if (priceFilter === "150to300") return price >= 150 && price <= 300;
      if (priceFilter === "above300") return price > 300;
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
          src="/assets/images/curtains and blindsbanner.jpg"
          alt="Curtains and Blinds Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          Elegant Curtains and Blinds Collection
        </h1>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row gap-4 justify-between items-center">
        <input
          type="text"
          placeholder="Search curtains..."
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
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        <select
          className="px-4 py-2 border border-gray-300 rounded-lg"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="all">All Prices</option>
          <option value="under150">Under $150</option>
          <option value="150to300">$150 - $300</option>
          <option value="above300">Above $300</option>
        </select>

        <button
          onClick={resetFilters}
          className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
        >
          Reset
        </button>
      </div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {filteredSofas.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            No curtains or blinds match your search or filter.
          </p>
        ) : (
          <>
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
              Discover Our Curtains and Blinds
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {filteredSofas.map((sofa, index) => (
                <div
                  key={index}
                  className="relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Wishlist heart button */}
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
                    className="w-full h-70 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-5 text-center">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {sofa.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{sofa.price}</p>
                    <button className="mt-4 px-5 py-2 bg-[#0f172a] text-white rounded-lg hover:bg-[#1e293b] transition-colors">
                      Curtains and Blinds
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
