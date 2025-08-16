import React, { useState } from "react";

const LivingRoom = () => {
  const [search, setSearch] = useState("");

  const cards = [
    {
      img: "/assets/images/livingroom1.jpg",
      title: "Rustic Charm",
      text: "Warm wood tones and cozy textiles for a homely feel.",
      products: ["Sofa", "Coffee Table", "Rug", "Lamp"],
    },
    {
      img: "/assets/images/livingroom2.jpg",
      title: "Modern Minimalism",
      text: "Clean lines and a calming neutral palette.",
      products: ["Sectional Sofa", "Coffee Table", "Accent Chair", "Floor Lamp"],
    },
    {
      img: "/assets/images/livingroom3.jpg",
      title: "Timeless Elegance",
      text: "Rich colors and luxurious fabrics that never fade in style.",
      products: ["Chesterfield Sofa", "Coffee Table", "Wall Art", "Chandelier"],
    },
    {
      img: "/assets/images/livingroom4.jpg",
      title: "Coastal Breeze",
      text: "Light colors and nautical accents for a breezy vibe.",
      products: ["Slipcovered Sofa", "Driftwood Coffee Table", "Seashell Decor", "Jute Rug"],
    },
    {
      img: "/assets/images/livingroom5.jpg",
      title: "Industrial Chic",
      text: "Metal and wood combine for a bold, urban feel.",
      products: ["Leather Sofa", "Metal Coffee Table", "Exposed Bulb Lighting", "Rug"],
    },
    {
      img: "/assets/images/livingroom6.jpg",
      title: "Farmhouse Fresh",
      text: "A cozy and inviting space with functional charm.",
      products: ["Overstuffed Sofa", "Wooden Coffee Table", "Woven Basket", "Throw Pillows"],
    },
  ];

  const filteredCards = cards.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="font-poppins bg-white text-gray-900">

 {/* Hero Banner */}
 <div className="relative h-[500px] flex items-center justify-center text-center">
        <img
          src="/assets/images/aboutfront.png"
          alt="Sofas Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
        Discover Your Living Room Style
        </h1>
      </div>

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto mt-28 px-4 text-center">
        
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          From rustic warmth to modern sleekness, explore designs that make your living room truly yours.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
          <input
            type="text"
            placeholder="Search Living Room Styles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-sm"
          />
        </div>
      </section>

      

      {/* Collection */}
      <section className="max-w-7xl mx-auto px-4 mt-16">
        <h2 className="text-3xl text-center font-bold text-gray-800">Living Room Collection</h2>
        <p className="text-center text-gray-600 mt-2">
          Browse through our beautifully crafted living room inspirations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, idx) => (
              <div
                key={idx}
                className="rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition duration-300"></div>
                </div>
                <div className="p-5 flex flex-col justify-between h-[240px]">
                  <div>
                    <h5 className="text-lg font-bold">{card.title}</h5>
                    <p className="text-gray-600 mt-2">{card.text}</p>
                  </div>
                  <div>
                    <p className="mt-3 font-semibold">Products Used:</p>
                    <ul className="list-disc list-inside mt-1 text-sm text-gray-500">
                      {card.products.map((prod, i) => (
                        <li key={i}>{prod}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No living room style found.
            </p>
          )}
        </div>
      </section>

     
    </div>
  );
};

export default LivingRoom;
