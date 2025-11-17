"use client";

import { Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0A0F1F] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3">
            FinFlow
          </h2>
          <p className="text-[#A9B4C4] text-sm leading-relaxed max-w-xs">
            A new-generation payments & automation platform designed to empower
            developers, businesses, and startups with seamless financial tools.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <div className="h-9 w-9 rounded-xl bg-[#1C2433] flex items-center justify-center hover:rotate-360 transition cursor-pointer">
              <Twitter size={18} className="text-white" />
            </div>

            <div className="h-9 w-9 rounded-xl bg-[#1C2433] flex items-center justify-center hover:rotate-360 transition cursor-pointer">
              <Instagram size={18} className="text-white" />
            </div>

            <div className="h-9 w-9 rounded-xl bg-[#1C2433] flex items-center justify-center hover:rotate-360 transition cursor-pointer">
              <Linkedin size={18} className="text-white" />
            </div>
            <div className="h-9 w-9 rounded-xl bg-[#1C2433] flex items-center justify-center hover:rotate-360 transition cursor-pointer">
              <Youtube size={18} className="text-white" />
            </div>
          </div>
        </div>

        {/* Product */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#E0ECFF]">
            Product
          </h4>
          <ul className="space-y-3 text-[#A9B4C4] text-sm">
            <li className="hover:text-white cursor-pointer">Payments API</li>
            <li className="hover:text-white cursor-pointer">No-code Tools</li>
            <li className="hover:text-white cursor-pointer">Subscriptions</li>
            <li className="hover:text-white cursor-pointer">Webhooks</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#E0ECFF]">
            Resources
          </h4>
          <ul className="space-y-3 text-[#A9B4C4] text-sm">
            <li className="hover:text-white cursor-pointer">Documentation</li>
            <li className="hover:text-white cursor-pointer">API Reference</li>
            <li className="hover:text-white cursor-pointer">Status Page</li>
            <li className="hover:text-white cursor-pointer">Community</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-4 text-[#E0ECFF]">
            Company
          </h4>
          <ul className="space-y-3 text-[#A9B4C4] text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Pricing</li>
            <li className="hover:text-white cursor-pointer">Legal</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-12 border-t border-[#1C2433]"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center mt-6 text-[#8A94A6] text-sm">
        <p>© {new Date().getFullYear()} FinFlow Technologies Pvt. Ltd.</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <p className="hover:text-white cursor-pointer">Terms</p>
          <p className="hover:text-white cursor-pointer">Privacy</p>
          <p className="hover:text-white cursor-pointer">Compliance</p>
        </div>
      </div>
    </footer>
  );
}
