"use client";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    title: "Accept Payments with India's #1 Payment Gateway",
    desc: "Offer customers their preferred payment methods with our easy-to-integrate payment gateway. Accept credit/debit cards, UPI, wallets, and net banking with the highest success rates.",
    video: "/feature1.mp4",
  },
  {
    title: "Powerful Dashboard to Manage All Transactions",
    desc: "Get a complete view of your payments, refunds, and settlements in real-time. Track performance with detailed analytics and manage your business with ease.",
    video: "/feature2.mp4",
  },
  {
    title: "Smart Routing & Dynamic Payment Methods",
    desc: "Maximize success rates with intelligent payment routing. Automatically show the most relevant payment options to customers based on their preferences and transaction history.",
    video: "/feature3.mp4",
  },
  {
    title: "Instant Settlements & Fast Payouts",
    desc: "Get your money faster with instant settlements. Access your funds 24x7 with on-demand payouts and automated settlement schedules tailored to your business needs.",
    video: "/feature4.mp4",
  },
  {
    title: "Seamless global payments acceptance",
    desc: "Accept cards, wallets, UPI, bank transfers, and 135+ currencies through one secure API.",
    video: "/feature5.mp4",
  },
  {
    title: "Fast and Secure Card Workflows for Digital Payments",
    desc: "Integrate clean APIs, track real-time logs, and test smoothly with a fully optimized card experience.",
    video: "/feature6.mp4",
  },
];

export default function Feature() {
  const sectionsRef = useRef([]);
  const mobileVideoRef = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index));
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionsRef.current.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // MOBILE VIDEO FADE-IN
  useEffect(() => {
    const mobileObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.dataset.index);
          if (entry.isIntersecting) {
            mobileVideoRef.current[index].classList.add("opacity-100");
          }
        });
      },
      { threshold: 0.3 }
    );

    mobileVideoRef.current.forEach((v) => mobileObserver.observe(v));
    return () => mobileObserver.disconnect();
  }, []);

  return (
    <section className="w-full bg-white text-white py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-10 px-6">

        {/* LEFT SIDE (scrolling text ONLY on desktop) */}
        <div className="relative hidden lg:flex flex-col">
          {features.map((f, i) => (
            <div
              key={i}
              data-index={i}
              ref={(el) => (sectionsRef.current[i] = el)}
              className="min-h-[100vh] flex flex-col justify-center"
            >
              <h2
                className={`text-7xl font-bold text-black transition-all duration-500 ${
                  active === i ? "opacity-100 translate-x-0" : "opacity-30 translate-x-5"
                }`}
              >
                {f.title}
              </h2>

              <p
                className={`mt-4 text-xl text-black transition-all duration-500 ${
                  active === i ? "opacity-80 translate-x-0" : "opacity-20 translate-x-5"
                }`}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE — Sticky Video (DESKTOP ONLY) */}
        <div className="hidden lg:flex sticky top-20 h-[80vh] items-center justify-center">
          <video
            key={active}
            src={features[active].video}
            autoPlay
            loop
            muted
            playsInline
            className="w-[500px] h-auto object-cover rounded-xl transition-all duration-700 ease-out"
          />
        </div>
      </div>

      {/* MOBILE — TEXT + MATCHING VIDEO BELOW */}
      <div className="lg:hidden mt-16 flex flex-col gap-20">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col">
            <h2 className="text-5xl px-2 font-bold text-black mb-3">{f.title}</h2>
            <p className="text-xl px-2 text-black mb-5">{f.desc}</p>

            <video
              data-index={i}
              ref={(el) => (mobileVideoRef.current[i] = el)}
              src={f.video}
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl w-full opacity-0 transition-opacity duration-700"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
