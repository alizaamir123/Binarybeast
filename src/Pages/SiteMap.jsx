import React, { useState } from 'react';
import { FaHome, FaPalette, FaBox, FaUsers, FaInfoCircle, FaEnvelope, FaComments, FaSitemap } from 'react-icons/fa';

const SitemapPage = () => {
  const [hoveredPage, setHoveredPage] = useState(null);
  
  const pages = [
    {
      title: "Home",
      link: "/",
      icon: <FaHome className="text-amber-500" />,
      color: "from-amber-50 to-amber-100",
      subpages: []
    },
    {
      title: "Design Styles Page",
      link: "designstyles.",
      icon: <FaPalette className="text-purple-500" />,
      color: "from-purple-50 to-purple-100",
      subpages: [
        { title: "Living Room", link: "livingroom" },
        { title: "Kitchen", link: "kitchen" },
        { title: "Bedroom", link: "bedroom" },
        { title: "Bathroom", link: "bathroom" },
        { title: "Contemporary Styles", link: "contemporarystyl" },
        { title: "Elegant Look Styles", link: "elegantstyle" }
      ]
    },
    {
      title: "Products Page",
      link: "",
      icon: <FaBox className="text-blue-500" />,
      color: "from-blue-50 to-blue-100",
      subpages: [
        { title: "Furniture", link: "Bed" },
        { title: "Kitchen", link: "Cabnites" },
        { title: "Lightening", link: "Ceiling" },
        { title: "Decor", link: "Curtains" },
        { title: "Bathroom", link: "Bathrooms" }
      ]
    },
    {
      title: "Our Designers",
      link: "#",
      icon: <FaUsers className="text-emerald-500" />,
      color: "from-emerald-50 to-emerald-100",
      subpages: []
    },
    {
      title: "About Us Page",
      link: "About",
      icon: <FaInfoCircle className="text-teal-500" />,
      color: "from-teal-50 to-teal-100",
      subpages: []
    },
    {
      title: "Contact Us Page",
      link: "Contact",
      icon: <FaEnvelope className="text-rose-500" />,
      color: "from-rose-50 to-rose-100",
      subpages: []
    },
    {
      title: "Feedback Page",
      link: "Feedback",
      icon: <FaComments className="text-indigo-500" />,
      color: "from-indigo-50 to-indigo-100",
      subpages: []
    },
    {
      title: "Site Map Page",
      link: "SiteMap",
      icon: <FaSitemap className="text-gray-600" />,
      color: "from-gray-50 to-gray-100",
      subpages: []
    }
  ];

  return (
    
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      
      {/* Banner Section */}
      <div className="relative w-full h-64 md:h-80 bg-cover bg-center" style={{ backgroundImage: 'url(/assets/images/sitemapbanner.jpg)' }}>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Website Sitemap
          </h1>
        </div>
      </div>

      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-amber-200/30 animate-pulse -z-10"></div>
      <div className="absolute bottom-40 right-10 w-16 h-16 rounded-full bg-purple-300/30 animate-ping-slow -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-blue-400/40 animate-bounce -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 relative z-10">
              <span className="bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                Website Architecture
              </span>
            </h1>
            <div className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-amber-300 to-amber-500 rounded-full"></div>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore the structure of our interior design platform and navigate with confidence
          </p>
        </div>

        {/* Visual sitemap representation */}
        <div className="mb-16 bg-white rounded-2xl shadow-xl p-6 overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Interactive Site Map</h2>
            <div className="mt-4 md:mt-0 flex items-center">
              <div className="flex items-center mr-6">
                <div className="w-3 h-3 rounded-full bg-amber-500 mr-2"></div>
                <span className="text-sm">Main Pages</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-sm">Subpages</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-96 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 overflow-hidden">
            {/* Central Home */}
            <div 
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-white rounded-2xl shadow-lg flex flex-col items-center justify-center z-10 border-4 border-amber-500 transition-all duration-500 ${
                hoveredPage === 0 ? 'scale-110 shadow-xl' : ''
              }`}
              onMouseEnter={() => setHoveredPage(0)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <FaHome className="text-amber-500 text-3xl mb-2" />
              <span className="text-sm font-medium text-center">Home</span>
            </div>
            
            {/* Design Styles */}
            <div 
              className={`absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-xl shadow flex flex-col items-center justify-center border-4 border-purple-500 transition-all duration-500 ${
                hoveredPage === 1 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredPage(1)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <FaPalette className="text-purple-500 text-2xl mb-1" />
              <span className="text-sm text-center">Design Styles</span>
            </div>
            
            {/* Products */}
            <div 
              className={`absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-xl shadow flex flex-col items-center justify-center border-4 border-blue-500 transition-all duration-500 ${
                hoveredPage === 2 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredPage(2)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <FaBox className="text-blue-500 text-2xl mb-1" />
              <span className="text-sm text-center">Products</span>
            </div>
            
            {/* Designers */}
            <div 
              className={`absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 bg-white rounded-xl shadow flex flex-col items-center justify-center border-4 border-emerald-500 transition-all duration-500 ${
                hoveredPage === 3 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredPage(3)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <FaUsers className="text-emerald-500 text-2xl mb-1" />
              <span className="text-sm text-center">Our Designers</span>
            </div>
            
            {/* About */}
            <div 
              className={`absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 w-24 h-24 bg-white rounded-xl shadow flex flex-col items-center justify-center border-4 border-teal-500 transition-all duration-500 ${
                hoveredPage === 4 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredPage(4)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <FaInfoCircle className="text-teal-500 text-2xl mb-1" />
              <span className="text-sm text-center">About Us</span>
            </div>
            
            {/* Contact */}
            <div 
              className={`absolute top-1/3 left-1/8 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-xl shadow flex flex-col items-center justify-center border-4 border-rose-500 transition-all duration-500 ${
                hoveredPage === 5 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredPage(5)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <FaEnvelope className="text-rose-500 text-2xl mb-1" />
              <span className="text-sm text-center">Contact Us</span>
            </div>
            
            {/* Feedback */}
            <div 
              className={`absolute top-1/3 right-1/8 transform translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-xl shadow flex flex-col items-center justify-center border-4 border-indigo-500 transition-all duration-500 ${
                hoveredPage === 6 ? 'scale-110 shadow-lg' : ''
              }`}
              onMouseEnter={() => setHoveredPage(6)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              <FaComments className="text-indigo-500 text-2xl mb-1" />
              <span className="text-sm text-center">Feedback</span>
            </div>
            
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line 
                x1="50%" y1="50%" 
                x2="25%" y2="25%" 
                stroke="#a78bfa" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />
              <line 
                x1="50%" y1="50%" 
                x2="75%" y2="25%" 
                stroke="#60a5fa" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />
              <line 
                x1="50%" y1="50%" 
                x2="25%" y2="75%" 
                stroke="#34d399" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />
              <line 
                x1="50%" y1="50%" 
                x2="75%" y2="75%" 
                stroke="#0d9488" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />
              <line 
                x1="50%" y1="50%" 
                x2="12.5%" y2="33%" 
                stroke="#f87171" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />
              <line 
                x1="50%" y1="50%" 
                x2="87.5%" y2="33%" 
                stroke="#818cf8" 
                strokeWidth="2" 
                strokeDasharray="5,5"
              />
            </svg>
          </div>
        </div>

        {/* Detailed sitemap */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="hidden md:grid grid-cols-12 bg-gradient-to-r from-amber-50 to-amber-100 border-b border-gray-200">
            <div className="col-span-4 py-4 px-6 font-semibold text-gray-700 text-lg">Page</div>
            <div className="col-span-8 py-4 px-6 font-semibold text-gray-700 text-lg">Subpages</div>
          </div>
          
          {pages.map((page, index) => (
            <div 
              key={index}
              className={`group relative grid grid-cols-1 md:grid-cols-12 border-b border-gray-100 last:border-0 transition-all duration-300 ${
                hoveredPage === index ? 'bg-gradient-to-r from-amber-50/50 to-amber-100/50' : ''
              }`}
              onMouseEnter={() => setHoveredPage(index)}
              onMouseLeave={() => setHoveredPage(null)}
            >
              {/* Page Link */}
              <div className="col-span-4 py-6 px-6 flex items-center">
                <div className="mr-4 text-2xl transform group-hover:scale-110 transition-transform">
                  {page.icon}
                </div>
                <a 
                  href={page.link} 
                  className="font-medium text-gray-800 hover:text-amber-600 transition-colors relative inline-block text-lg"
                >
                  {page.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-500"></span>
                </a>
              </div>
              
              {/* Subpages */}
              <div className="col-span-8 py-6 px-6 border-t md:border-t-0 border-gray-100 md:border-l border-gray-100">
                {page.subpages.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {page.subpages.map((subpage, subIndex) => (
                      <a 
                        key={subIndex}
                        href={subpage.link}
                        className="py-3 px-5 bg-gray-50 rounded-xl hover:bg-amber-50 transition-all duration-300 group-hover:shadow-sm hover:shadow-md flex items-center border border-gray-100"
                      >
                        <div className="mr-3 w-2 h-2 rounded-full bg-blue-500 group-hover:animate-pulse"></div>
                        <span className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                          {subpage.title}
                        </span>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-gray-400 italic py-2">No subpages</div>
                )}
              </div>
              
              {/* Hover effect */}
              <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-amber-500/5 to-amber-600/5 rounded-xl transition-opacity duration-500 ${
                hoveredPage === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>
        
        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2023 InteriorDesign Studio. All rights reserved.</p>
          <p className="mt-2">Navigate with confidence through our beautifully designed website architecture</p>
        </div>
      </div>
    </div>
  );
};

export default SitemapPage;