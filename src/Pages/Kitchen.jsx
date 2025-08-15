import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const kitchens = [
    {
      title: "Rustic Charm",
      img: "/assets/images/kitchen1.jpg",
      desc: "A cozy kitchen design that embraces natural materials.",
      products: ["Wooden Cabinets", "Farmhouse Sink", "Vintage Fixtures"],
    },
    {
      title: "Modern Elegance",
      img: "/assets/images/kitchen2.jpg",
      desc: "A sleek and stylish design perfect for contemporary homes.",
      products: ["Stainless Steel Appliances", "Quartz Countertops", "Minimalist Cabinetry"],
    },
    {
      title: "Classic Comfort",
      img: "/assets/images/kitchen3.jpg",
      desc: "Timeless design with a focus on warmth and usability.",
      products: ["Traditional Wood Cabinets", "Granite Countertops", "Ceramic Tiles"],
    },
    {
      title: "Vintage Appeal",
      img: "/assets/images/kitchen4.jpg",
      desc: "Charming vintage aesthetics that inspire nostalgia.",
      products: ["Antique Fixtures", "Retro Appliances", "Colorful Backsplashes"],
    },
    {
      title: "Industrial Style",
      img: "/assets/images/kitchen5.jpg",
      desc: "Bold design with raw materials and open spaces.",
      products: ["Metal Shelving", "Concrete Countertops", "Exposed Ductwork"],
    },
    {
      title: "Minimalist Design",
      img: "/assets/images/kitchen6.jpg",
      desc: "Simplicity and functionality come together in this design.",
      products: ["Integrated Appliances", "Clean Lines", "Monochromatic Color Schemes"],
    },
  ];

  const filteredKitchens = kitchens.filter((k) =>
    k.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-poppins bg-white text-gray-900">
      {/* Main Content */}
      <main className="container mx-auto pt-24 px-4">
        <h1 className="text-center text-3xl font-bold">Discover Your Kitchen Style</h1>
        <p className="text-center max-w-2xl mx-auto mt-2">
          Dive into our collection of stunning kitchen designs. Whether you're looking for rustic charm or modern elegance, explore our diverse styles to find the perfect inspiration for your space.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center mt-6">
          <input
            type="text"
            placeholder="🔍 Search Kitchen Styles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-full px-5 py-2 w-80 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
          />
        </div>

        {/* Kitchen Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
          {filteredKitchens.length > 0 ? (
            filteredKitchens.map((kitchen, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={kitchen.img}
                    alt={kitchen.title}
                    className="w-full h-48 object-cover hover:scale-110 transition duration-300"
                  />
                </div>
                <div className="p-5">
                  <h5 className="text-xl font-semibold">{kitchen.title}</h5>
                  <p className="text-gray-600 mt-2 text-sm">{kitchen.desc}</p>
                  <div className="mt-4">
                    <p className="font-bold mb-2">Products Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {kitchen.products.map((prod, i) => (
                        <span
                          key={i}
                          className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center">No products found.</p>
          )}
        </div>
      </main>

     
    </div>
  );
}
