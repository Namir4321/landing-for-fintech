"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
  {
    title: "Enterprise Reinvention",
    desc: "Bring agility, scalability, and automation to your enterprise. Streamline operations, integrate payments, and unlock new business models with our unified platform.",
    extra: [
      "Seamlessly integrate with existing systems",
      "Enable faster decision-making through data insights",
      "Optimize workflows across departments"
    ],
    image: "/image1.jpg",
    overlay: "Agility & Innovation",
  },
  {
    title: "Global Operations",
    desc: "Manage international payments, expand across borders, and unify your business operations with one platform.",
    extra: [
      "Support multiple currencies and payment methods",
      "Track global operations in real-time",
      "Simplify compliance and reporting"
    ],
    image: "/image2.jpg",
    overlay: "Worldwide Reach",
  },
  {
    title: "Secure Payments",
    desc: "Built-in AI-driven fraud protection ensures secure and seamless transactions for your enterprise customers.",
    extra: [
      "Detect fraud patterns automatically",
      "Ensure PCI-compliant payment flows",
      "Offer secure experiences to all users"
    ],
    image: "/image3.jpg",
    overlay: "Trusted Security",
  },
];

export default function EnterpriseCarousel() {
  const [active, setActive] = useState(0);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full relative bg-white py-32 px-6 overflow-hidden">
      {/* Background shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100 rounded-full opacity-50 animate-pulse -z-10"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-40 animate-pulse -z-10"></div>
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-50 to-white rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2 -z-20"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-start gap-16 relative z-10">
        
        {/* Text */}
        <div className="w-full lg:w-1/3 relative flex flex-col justify-start gap-6 min-h-[400px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out
                ${index === active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">{slide.title}</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4">{slide.desc}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {slide.extra.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="w-full lg:w-2/3 relative h-64 md:h-96 overflow-hidden rounded-xl">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out
                ${index === active ? "opacity-100" : "opacity-0"}`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              {/* Sky-blue gradient overlay */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-sky-400/40 via-transparent to-transparent rounded-xl pointer-events-none"></div>

              {/* Overlay text in bottom-left */}
              <div className="absolute bottom-4 left-4  bg-opacity-50 text-white px-4 py-2 rounded-lg text-sm md:text-base">
                {slide.overlay}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
