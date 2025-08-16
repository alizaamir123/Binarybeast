
// src/Home.jsx
import { TbArrowUpRight } from "react-icons/tb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";



export default function Home() {


  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner, New York",
      quote: "Digimax transformed our penthouse into a masterpiece. Their attention to detail and creative vision exceeded all expectations.",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Restaurant Owner, Miami",
      quote: "The interior design for our flagship restaurant has received countless compliments. Digimax captured our brand identity perfectly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Chen",
      role: "Corporate Client, San Francisco",
      quote: "Our office redesign has boosted employee morale and productivity. The team at Digimax are true professionals.",
      rating: 5,
    },
  ];

   const services = [
    { 
      title: "Residential Design", 
      description: "Custom homes, apartments, and private residences tailored to your lifestyle",
      icon: "🏠",
      color: "from-amber-500 to-amber-600"
    },
    { 
      title: "Commercial Spaces", 
      description: "Office, retail, and hospitality environments designed for impact",
      icon: "🏢",
      color: "from-emerald-500 to-emerald-600"
    },
    { 
      title: "Renovation & Restoration", 
      description: "Breathing new life into existing spaces while preserving character",
      icon: "🔨",
      color: "from-blue-500 to-blue-600"
    },
    { 
      title: "Luxury Staging", 
      description: "Premium staging solutions that showcase properties at their best",
      icon: "✨",
      color: "from-purple-500 to-purple-600"
    }
  ];

  

  return (
    <div className="bg-[#faf9f7]">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a]/90 via-[#0f172a]/70 to-transparent z-10"></div>
        <div className="absolute inset-0">
          <img 
            src="/assets/images/homebanner.png" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 py-32 lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <p className="tracking-[0.3em] text-xs text-amber-500 uppercase">Redefining Luxury Interiors</p>
            <h1 className="mt-6 text-4xl font-light leading-tight text-white sm:text-5xl lg:text-6xl">
              <span className="block font-serif italic">Elegance</span>
              <span className="block font-bold mt-2">Reimagined</span>
            </h1>
            <p className="mt-6 text-gray-200 max-w-lg">
              Crafting extraordinary spaces that blend timeless sophistication with modern sensibility.
              We transform environments into expressions of refined living.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-8 py-4 text-white bg-amber-600 rounded-full shadow-lg hover:bg-amber-700 transition-all duration-300 group">
                <span className="font-medium">Design Your Lifestyle</span>
              
              </button>
              <button className="inline-flex items-center px-8 py-4 text-white border border-white/30 rounded-full hover:bg-white/10 transition-colors">
              
              </button>
            </div>
          </div>
        </div>
      </div>

  <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
            <div className="h-px w-8 bg-amber-600"></div>
            <span className="text-sm font-medium tracking-widest">OUR EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Curated Design Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We specialize in transforming spaces into personalized sanctuaries that reflect 
            your unique style and elevate your living experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl group transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* 3D Icon Container */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <div className={`absolute w-24 h-24 rounded-2xl bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transform rotate-12 transition-all duration-500 group-hover:rotate-3`}></div>
                  <div className={`absolute w-24 h-24 rounded-2xl bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-30 transform -rotate-12 transition-all duration-500 group-hover:-rotate-3`}></div>
                  <div className="relative z-10 w-20 h-20 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="mt-6">
                <a 
                  href="#" 
                  className="inline-flex items-center text-amber-600 font-medium group-hover:text-amber-700 transition-colors duration-300"
                >
                  Explore Service
                  <svg 
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

      {/* About Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
            <div className="lg:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="../assets/images/Homeabout.png"
                  alt="About" 
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-amber-600 text-white py-4 px-8 rounded-lg shadow-lg">
                <span className="block text-4xl font-bold">12+</span>
                <span className="text-sm">Years of Excellence</span>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-flex items-center gap-2 text-amber-600">
                <div className="h-px w-8 bg-amber-600"></div>
                <span className="text-sm font-medium tracking-widest">OUR STORY</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Crafting Timeless Interiors Since 2011
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Digimax Classica emerged from a passion for creating spaces that transcend trends 
                and embody enduring elegance. Our team of visionary designers, architects, and 
                craftsmen collaborate to transform environments into expressions of refined living.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over a decade of excellence, we've curated interiors for discerning clients 
                worldwide, earning numerous accolades for our innovative approach and meticulous 
                attention to detail.
              </p>
              
              <div className="flex gap-8 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">27+</div>
                  <div className="text-gray-600 mt-1">Industry Awards</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">850+</div>
                  <div className="text-gray-600 mt-1">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600">50+</div>
                  <div className="text-gray-600 mt-1">Team Members</div>
                </div>
              </div>
              
              <button className="mt-10 inline-flex items-center px-8 py-4 text-white bg-gray-900 rounded-full shadow-lg hover:bg-amber-600 transition-colors duration-300 group">
                <span className="font-medium">Our story</span>
    
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 text-amber-400 mb-4">
              <div className="h-px w-8 bg-amber-400"></div>
              <span className="text-sm font-medium tracking-widest">CLIENT TESTIMONIALS</span>
            </div>
            <h2 className="text-3xl font-bold md:text-4xl">
              Voices of Satisfaction
            </h2>
            <p className="mt-4 text-gray-300">
              Discover why our clients trust us to transform their spaces into extraordinary environments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-[#1e293b] p-8 rounded-xl">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="py-24 bg-[#faf9f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-8 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 text-amber-600 mb-4">
                <div className="h-px w-8 bg-amber-600"></div>
                <span className="text-sm font-medium tracking-widest">DESIGN GALLERY</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
                Modern Classic Inspirations
              </h2>
            </div>
           
          </div>
          
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="rounded-xl overflow-hidden"
          >
            {[
              "../assets/images/project1.png",
              "../assets/images/project 2.png",
              "../assets/images/livingroom4.jpg",
              "../assets/images/luxorlivingroom.jpg ",
              "../assets/images/project5.png" 
            ].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden rounded-xl">
                  <img 
                    src={img} 
                    alt="Design" 
                    className="w-full h-[500px] object-cover rounded-xl transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="text-xl font-bold">Project {index + 1}</h3>
                      <p className="text-gray-200 mt-1">Modern Classic Design</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="../assets/images/lastbanner.png" 
            alt="Luxury Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 text-amber-400 mb-4">
            <div className="h-px w-8 bg-amber-400"></div>
            <span className="text-sm font-medium tracking-widest">GET STARTED</span>
          </div>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-6 text-gray-200 max-w-2xl mx-auto">
            Schedule a complimentary consultation with our design team to discuss your vision 
            and discover how we can create an extraordinary environment tailored to your lifestyle.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
           
            
          </div>
        </div>
      </div>
    </div>
  );
}