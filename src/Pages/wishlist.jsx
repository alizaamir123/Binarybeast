import React, { useState, useEffect } from "react";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  const removeFromWishlist = (name) => {
    const updatedWishlist = wishlist.filter((item) => item.name !== name);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {wishlist.map((item, index) => (
            <div key={index} className="bg-white shadow rounded-xl p-5 text-center">
              <img src={item.img} alt={item.name} className="w-full h-60 object-cover mb-4 rounded" />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p>{item.price}</p>
              <button
                onClick={() => removeFromWishlist(item.name)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
