import React, { useState, useEffect } from 'react';
import { FaHeart, FaChevronDown, FaChevronUp, FaUser } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const PremiumNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);
  const [activeNav, setActiveNav] = useState('Home');
  const [wishlist, setWishlist] = useState([]);

  // Handle scroll navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(savedWishlist);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
    setActiveNav(name);
    setOpenSubDropdown(null);
  };

  const toggleSubDropdown = (name) => {
    setOpenSubDropdown(openSubDropdown === name ? null : name);
  };

  const navItems = [
    { name: 'Home', to: '/' },
    {
      name: 'Design Styles',
      to: '/designstyles',
      children: [
        { name: 'Living Room', to: '/livingroom' },
        { name: 'Kitchen', to: '/kitchen' },
        { name: 'Bedroom', to: '/bedroom' },
        { name: 'Bathroom', to: '/bathroom' },
        { name: 'Contemporary Styles', to: '/contemporarystyle' },
        { name: 'Elegant Look Styles', to: '/elegantstyle' },
      ],
    },
    {
      name: "Products",
      to: "/product",
      children: [
        {
          name: "Furniture",
          to: "/furniture",
          children: [
            { name: "Sofas", to: "sofas" },
            { name: "Table", to: "Table" },
            { name: "Chairs", to: "chairs" },
            { name: "Bed", to: "Bed" },
            { name: "Stroage", to: "Stroage" }
          ]
        },
        {
          name: "Kitchen",
          to: "kitchen",
          children: [
            { name: "Cabinets", to: "Cabinets" },
            { name: "Counter", to: "counter" },
            { name: "sinks and faucets", to: "Sinksandfaucets" },
            { name: "kitchen islands and carts", to: "kitchenIslands" },
            { name: "Backsplashes", to: "Backsplashes" }
          ]
        },
        {
          name: "Lighting",
          to: "lighting",
          children: [
            { name: "Ceiling Lights", to: "Ceiling" },
            { name: "Wall Lights", to: "Walllights" },
            { name: "Lamps", to: "Floorlamps" },
            { name: "Table lamp", to: "Tablelamp" },
            { name: "Outdoor lighting", to: "Outdoorlighting" }
          ]
        },
        {
          name: "Decor",
          to: "decor",
          children: [
            { name: "Rugs and carpets", to: "Rugs" },
            { name: "Curtains and blinds", to: "Curtains" },
            { name: "Wall arts and mirror", to: "mirrors" },
            { name: "Cushion and Throws", to: "Cushions" },
            { name: "Vases and plat port", to: "Vases" }
          ]
        },
        {
          name: "Bathroom",
          to: "bathroom",
          children: [
            { name: "Vanities and Cabnites", to: "Vanities" },
            { name: " Showers and Bathtubs", to: "bathtub" },
            { name: "Toilets and Bidets", to: "Toilets" },
            { name: "Bathroom Sinks", to: "Bathrooms" },
            { name: "Mirrors and Medicine Cabnites", to: "Mirror" }
          ]
        }
      ]
    },
    { name: 'About', to: '/about' },
    { name: 'Contact', to: '/Contact' },
    { name: 'Feedback', to: '/feedback' },
    { name: 'Site Map', to: '/sitemap' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-gray-900/90 backdrop-blur-md shadow-xl py-0 border-b border-gray-700'
          : 'bg-transparent py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group flex items-center space-x-2 py-3"
            onClick={() => setActiveNav('Home')}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative w-10 h-10 bg-gradient-to-r from-amber-500 to-amber-700 rounded-full flex items-center justify-center">
                <span className="font-bold text-white text-lg">H</span>
              </div>
            </div>
            <span className="text-2xl font-bold tracking-wide transition-all duration-300 group-hover:text-amber-400">
              Home<span className="text-amber-500">Styler</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.children ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`relative px-4 py-3 flex items-center transition-all duration-300 ${
                        activeNav === item.name
                          ? 'text-amber-400'
                          : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-500 ${
                          activeNav === item.name ? 'w-full' : 'w-0 group-hover:w-full'
                        }`}
                      ></span>
                      <span className="ml-1.5">
                        {openDropdown === item.name ? (
                          <FaChevronUp size={12} className="text-amber-400" />
                        ) : (
                          <FaChevronDown
                            size={12}
                            className="group-hover:text-amber-400 transition-colors"
                          />
                        )}
                      </span>
                    </button>

                    {/* Dropdown Menu */}
                    <div
                      className={`absolute top-full left-0 mt-1 w-56 bg-gray-800/95 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden transition-all duration-300 origin-top transform ${
                        openDropdown === item.name
                          ? 'opacity-100 scale-100 translate-y-0'
                          : 'opacity-0 scale-95 translate-y-2 pointer-events-none'
                      }`}
                    >
                      {item.children.map((child) => (
                        <div key={child.name} className="relative">
                          {child.children ? (
                            <>
                              <button
                                onClick={() => toggleSubDropdown(child.name)}
                                className="w-full flex justify-between items-center px-5 py-3.5 text-sm text-gray-300 hover:text-white hover:bg-amber-500/30"
                              >
                                {child.name}
                                <FaChevronDown
                                  size={10}
                                  className={`transition-transform ${
                                    openSubDropdown === child.name ? 'rotate-180' : ''
                                  }`}
                                />
                              </button>
                              {openSubDropdown === child.name && (
                                <div className="pl-5 bg-gray-700">
                                  {child.children.map((sub) => (
                                    <NavLink
                                      key={sub.name}
                                      to={sub.to}
                                      className="block px-4 py-2 text-xs text-gray-300 hover:text-white hover:bg-amber-500/30"
                                      onClick={() => {
                                        setActiveNav(sub.name);
                                        setOpenDropdown(null);
                                        setOpenSubDropdown(null);
                                      }}
                                    >
                                      {sub.name}
                                    </NavLink>
                                  ))}
                                </div>
                              )}
                            </>
                          ) : (
                            <NavLink
                              to={child.to}
                              className={({ isActive }) =>
                                `block px-5 py-3.5 text-sm ${
                                  isActive ? 'text-white font-semibold' : 'text-gray-300'
                                } hover:text-white hover:bg-amber-500/30`
                              }
                              onClick={() => {
                                setActiveNav(child.name);
                                setOpenDropdown(null);
                              }}
                            >
                              {child.name}
                            </NavLink>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `relative px-4 py-3 block transition-all duration-300 ${
                        isActive ? 'text-amber-400' : 'text-gray-300 hover:text-white'
                      }`
                    }
                    onClick={() => setActiveNav(item.name)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-amber-500 transition-all duration-500 ${
                        activeNav === item.name ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </NavLink>
                )}
              </div>
            ))}
          </div>

          {/* Wishlist & Profile Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Wishlist Button */}
            <Link
              to=""
              className="relative w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white shadow-lg border border-red-300"
            >
              <FaHeart size={18} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-white text-red-600 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Profile Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-700 text-white shadow-lg border border-amber-300">
              <FaUser size={18} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PremiumNavbar;
