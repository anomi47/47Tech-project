"use client";

import { useState } from "react";
import Heading from "../Heading";
import Button from "../Button";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you! Your message has been sent.");
    setFormData({ fullName: "", phone: "", email: "", service: "" });
  };

  return (
    <section className="py-16 w-full">
      <div className="container mx-auto">
        <Heading text="let’s connect" level={6} className="mb-5 text-black" />
        <Heading
          text="contact us"
          level={2}
          className="text-white text-9xl! leading-25! -mb-14 mix-blend-exclusion relative z-10"
        />

        <div className="bg-[url('/images/contact-us-bg.webp')] bg-cover bg-center bg-no-repeat rounded-3xl pt-70 pb-8 contactGradientBorder">
          {/* Background Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity rounded-3xl opacity-[0.2]"
          >
            <source
              src="/images/GettyImages-934804050.webm"
              type="video/webm"
            />
          </video>

          <form
            onSubmit={handleSubmit}
            className="p-8 shadow-md w-225 mx-auto relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-15">
              {/* Full Name */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="*Full Name"
                  required
                  className="w-full text-[16px] p-3 border-b border-white/20 focus:outline-none min-h-14"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="*Phone Number"
                  required
                  className="w-full text-[16px] p-3 border-b border-white/20 focus:outline-none min-h-14"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Email */}
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="*Email Address"
                  required
                  className="w-full text-[16px] p-3 border-b border-white/20 focus:outline-none min-h-14"
                />
              </div>

              {/* Select Service */}
              <div className="flex flex-col">
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className={`w-full p-3 text-[16px] border-b border-white/20 focus:outline-none min-h-14 ${
                    !formData.service ? "text-white/50" : "text-white"
                  }`}
                >
                  <option value="" className="" disabled>
                    Select service
                  </option>
                  <option value="design" className="text-black">
                    Design
                  </option>
                  <option value="development" className="text-black">
                    Development
                  </option>
                  <option value="marketing" className="text-black">
                    Marketing
                  </option>
                </select>
              </div>
            </div>

            <div className="text-center">
              <Button type="submit" variant="transparent">
                Start Your Project
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
