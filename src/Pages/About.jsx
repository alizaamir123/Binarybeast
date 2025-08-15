


import { TbArrowUpRight } from "react-icons/tb";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] bg-[url('../assets/images/about.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"></div>
        <div className="container relative flex h-full items-center justify-center lg:justify-start">
          <h1 className="max-w-4xl text-5xl font-bold tracking-widest text-white md:text-6xl lg:text-7xl lg:leading-tight">
            <span className="block text-xl font-light tracking-widest text-amber-400">THE DIGIMAX</span>
            WHO ARE WE?
          </h1>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
  <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-16">
    
    {/* Text Content */}
    <div className="lg:w-1/2">
      {/* Heading Tagline */}
      <div className="mb-4 flex items-center gap-3">
        <div className="h-1 w-16 bg-amber-500"></div>
        <span className="font-semibold uppercase tracking-widest text-amber-500">
          Our Mission
        </span>
      </div>

      {/* Main Heading */}
      <h2 className="mb-6 text-3xl font-bold leading-snug tracking-wide text-gray-900 sm:text-4xl lg:text-5xl">
        We Transform Spaces Into <span className="text-amber-500">Inspiring Environments</span>
      </h2>

      {/* Description */}
      <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
        At <span className="font-semibold text-gray-900">Digimax Interior Design</span>, we believe 
        that exceptional spaces inspire exceptional living. Our team blends 
        <span className="text-amber-500 font-medium"> innovative design concepts</span> 
        with meticulous craftsmanship to create interiors that not only reflect your 
        personality but also exceed functional expectations.
      </p>
    </div>

    {/* Image Content */}
    <div className="relative lg:w-1/2">
      <div className="aspect-video overflow-hidden rounded-xl shadow-2xl">
        <img 
          src="../assets/images/Transform Spaces.png" 
          alt="Modern interior design" 
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
        />
      </div>
      <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-xl border-4 border-amber-500"></div>
    </div>

  </div>
</div>


      {/* Values Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-1 w-16 bg-amber-500"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Our Core Values</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Principles that guide every design decision we make
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Innovation", description: "Pushing boundaries with creative solutions that anticipate future needs" },
              { title: "Excellence", description: "Uncompromising quality in every detail of design and execution" },
              { title: "Integrity", description: "Transparent processes and honest communication with every client" },
              { title: "Sustainability", description: "Responsible design that minimizes environmental impact" }
            ].map((value, index) => (
              <div key={index} className="group rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Details */}
      <div className="container py-16 lg:py-24">
        <div className="flex flex-col gap-16 lg:flex-row">
          <div className="lg:w-1/2">
            <div className="sticky top-24">
              <div className="aspect-square overflow-hidden rounded-xl shadow-2xl">
                <img 
                  src="../assets/images/homebanner.png" 
                  alt="Design process" 
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="mb-4 flex items-center gap-3">
              <div className="h-1 w-16 bg-amber-500"></div>
              <span className="font-semibold uppercase tracking-widest text-amber-500">Our Story</span>
            </div>
            
            <h2 className="mb-8 text-3xl font-bold text-gray-900 lg:text-4xl">Crafting Inspirational Spaces Since 2010</h2>
            
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Digimax Interior Design was founded with a vision to revolutionize the interior design industry. 
              Our journey began in a small studio with just three passionate designers, driven by the belief that 
              well-designed spaces have the power to transform lives.
            </p>
            
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Today, we've grown into an award-winning firm with a team of over 50 talented professionals. 
              Our portfolio spans luxury residences, boutique hotels, corporate offices, and innovative retail 
              spaces across three continents.
            </p>
            
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              What sets us apart is our holistic approach. We don't just decorate spaces - we create experiences. 
              Our process begins with deep listening and ends with flawless execution, ensuring every project 
              reflects our clients' aspirations while pushing the boundaries of design innovation.
            </p>
            
            <div className="mb-10 grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-amber-500 lg:text-5xl">13+</div>
                <div className="text-lg font-semibold text-gray-900">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-amber-500 lg:text-5xl">850+</div>
                <div className="text-lg font-semibold text-gray-900">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-amber-500 lg:text-5xl">27</div>
                <div className="text-lg font-semibold text-gray-900">Industry Awards</div>
              </div>
              <div className="text-center">
                <div className="mb-3 text-4xl font-bold text-amber-500 lg:text-5xl">50+</div>
                <div className="text-lg font-semibold text-gray-900">Team Members</div>
              </div>
            </div>
            
           
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16 lg:py-24">
        <div className="container">
          <div className="mb-16 text-center">
            <div className="mb-4 flex justify-center">
              <div className="h-1 w-16 bg-amber-500"></div>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">Meet Our Creative Minds</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              The talented professionals behind our award-winning designs
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Sarah Johnson", role: "Lead Architect", image: "../assets/images/aboutgirl.png" },
              { name: "Michael Chen", role: "Creative Director", image: "../assets/images/Michael Chen.png" },
              { name: "Elena Rodriguez", role: "Senior Designer", image: "../assets/images/Elena Rodriguez.png" }
            ].map((member, index) => (
              <div key={index} className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-amber-300">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    With over a decade of experience in luxury residential design, {member.name.split(' ')[0]} brings 
                    unparalleled expertise in creating spaces that balance form and function.
                  </p>
                  <div className="mt-4 flex gap-3">
                    {['#', '#', '#'].map((_, i) => (
                      <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-amber-500 hover:text-white">
                        <span className="sr-only">Social link</span>
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
           
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32">
        <div className="absolute inset-0 bg-[url('../assets/images/aboutbanner.png')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container relative z-10 text-center text-white">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">Ready to Transform Your Space?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl">
            Let's collaborate to create an environment that reflects your vision and enhances your lifestyle.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#" className="rounded-full bg-amber-500 px-8 py-4 font-medium text-gray-900 transition-colors hover:bg-amber-400">
              Schedule a Consultation
            </a>
           
          </div>
        </div>
      </div>
    </div>
  );
}