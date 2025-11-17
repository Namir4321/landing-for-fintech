"use client";

const logos = [
  "/logo1.svg",
  "/logo2.svg",
  "/logo3.svg",
  "/logo4.svg",
  "/logo5.svg",
  "/logo6.svg",
  "/logo7.svg",
  "/logo8.svg",
];

const Partner = () => {
  return (
    <section className="w-full bg-muted py-20">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-4">
          Trusted by Industry Leaders Worldwide
        </h2>
        <p className="text-center text-slate-600 text-lg max-w-3xl mx-auto mb-2">
          Join thousands of businesses from startups to Fortune 500 companies who trust our platform to power their payment infrastructure and drive growth.
        </p>
        <p className="text-center text-slate-500 text-base max-w-2xl mx-auto">
          We process over $50 billion in payments annually for businesses across e-commerce, SaaS, fintech, retail, and enterprise sectors in 60+ countries.
        </p>
      </div>

      <div className="relative w-full overflow-hidden marquee-mask group">
        
        <div className="flex items-center gap-16 animate-marquee group-hover:pause whitespace-nowrap">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              className="
                h-16 w-auto 
                opacity-70 
                grayscale 
                transition-all duration-300 
                hover:opacity-100 hover:grayscale-0
                select-none
                flex-shrink-0
              "
              draggable="false"
              alt="partner"
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">10M+</div>
          <div className="text-sm text-slate-600">Active Users</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">$50B+</div>
          <div className="text-sm text-slate-600">Payments Processed</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">60+</div>
          <div className="text-sm text-slate-600">Countries Supported</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">99.99%</div>
          <div className="text-sm text-slate-600">Platform Uptime</div>
        </div>
      </div>
    </section>
  );
};

export default Partner;