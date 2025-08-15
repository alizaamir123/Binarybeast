import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfaf6] via-[#f8f4ee] to-[#efe9df]">
      {/* 🔹 Top Banner Section */}
      <div
        className="relative h-80 w-full bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('../assets/images/contactusbanner1.jpg')", // Change path to your banner
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Text */}
        <h1 className="relative z-10 text-white text-4xl md:text-5xl font-serif font-bold">
          Contact Us
        </h1>
      </div>

      {/* 🔹 Contact Form Section */}
      <div className="flex items-center justify-center p-4">
        <div className="container max-w-6xl mx-auto">
          <div className="py-12 relative">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 left-14 w-24 h-24 rounded-full bg-[#c5a47e]/10 blur-2xl animate-pulse"></div>
            <div className="absolute bottom-40 right-14 w-16 h-16 rounded-full bg-[#9a7b5f]/20 blur-lg animate-ping"></div>
            <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-[#b08e6a]/20 blur-md animate-bounce"></div>

            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Form Section */}
                <div className="p-8 lg:p-12">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-px w-12 bg-[#c5a47e]"></div>
                      <span className="text-xs uppercase font-semibold tracking-widest text-[#c5a47e]">
                        Get in Touch
                      </span>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#1a1a1a] mb-4 leading-snug">
                      Let's Design Your Dream Space
                    </h1>
                    <p className="text-[#5a5a5a] mb-6 max-w-lg leading-relaxed">
                      Share your ideas with us — our award-winning designers will
                      connect within 24 hours for your free consultation.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField
                        label="Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Smith"
                        required
                      />
                      <InputField
                        label="Email Address"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    {/* Phone & Subject */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField
                        label="Phone Number"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                      />
                      <SelectField
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-[#5a5a5a] mb-2">
                        Your Message
                      </label>
                      <textarea
                        rows="5"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project..."
                        required
                        className="w-full px-6 py-4 bg-[#fdfaf6] rounded-lg border border-[#e3dcc9] focus:border-[#c5a47e] focus:ring-2 focus:ring-[#c5a47e]/40 transition-all duration-300"
                      ></textarea>
                    </div>

                    {/* Button */}
                    <button
                      type="submit"
                      className={`w-full py-4 rounded-lg font-bold text-white shadow-md transition-all duration-500 transform hover:scale-[1.02] ${
                        submitted
                          ? "bg-green-600"
                          : "bg-[#1a1a1a] hover:bg-[#c5a47e]"
                      }`}
                    >
                      <div className="flex items-center justify-center gap-3">
                        {submitted ? "Message Sent!" : "Send Message"}
                      </div>
                    </button>
                  </form>
                </div>

                {/* Image Section */}
                <div
                  className="hidden lg:block relative overflow-hidden min-h-[700px]"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 to-transparent z-10 transition-opacity duration-700 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#c5a47e]/20 to-transparent z-20 transition-all duration-1000 ${
                      isHovered
                        ? "opacity-100 scale-110"
                        : "opacity-0 scale-100"
                    }`}
                  ></div>
                  <div
                    className={`h-full w-full bg-cover bg-center transition-transform duration-1000 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                    style={{
                      backgroundImage: "url('../assets/images/homebanner.png')",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

/* Reusable Input Component */
const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}) => (
  <div>
    <label className="block text-sm font-medium text-[#5a5a5a] mb-2">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className="w-full px-6 py-3 bg-[#fdfaf6] rounded-lg border border-[#e3dcc9] focus:border-[#c5a47e] focus:ring-2 focus:ring-[#c5a47e]/40 transition-all duration-300"
    />
  </div>
);

/* Reusable Select Component */
const SelectField = ({ label, name, value, onChange, required }) => (
  <div>
    <label className="block text-sm font-medium text-[#5a5a5a] mb-2">
      {label}
    </label>
    <select
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-6 py-3 bg-[#fdfaf6] rounded-lg border border-[#e3dcc9] focus:border-[#c5a47e] focus:ring-2 focus:ring-[#c5a47e]/40 transition-all duration-300 appearance-none"
    >
      <option value="">Select a subject</option>
      <option value="Residential Design">Residential Design</option>
      <option value="Commercial Space">Commercial Space</option>
      <option value="Renovation">Renovation</option>
      <option value="Consultation">Consultation</option>
      <option value="Other">Other</option>
    </select>
  </div>
);

export default ContactUs;
