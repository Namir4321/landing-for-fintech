"use client";
import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("javascript", javascript);

export default function DeveloperSection() {
  const codeRef = useRef(null);
  const [clip, setClip] = useState(
    "polygon(0% 0%, 100% 10%, 100% 90%, 0% 100%)"
  );
  const codeString = `// Example: Integrate payments
import { initPayment } from 'fintech-sdk';

const payment = initPayment({
  amount: 1000,
  currency: 'USD',
});

payment.on('success', () => console.log('Payment completed'));`;

  useEffect(() => {
    if (codeRef.current) hljs.highlightBlock(codeRef.current);

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Large screens: top-left 0 → top-right 20%, bottom-left 100 → bottom-right 80%
        setClip("polygon(0% 0%, 100% 15%, 100% 100%, 0% 85%)");        
      } else {
        // Small screens: top-left 0 → top-right 5%, bottom-left 100 → bottom-right 95%
        setClip("polygon(0% 0%, 100% 5%, 100% 100%, 0% 95%)");  
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="w-full bg-[#101829] py-40 px-6"
      style={{ clipPath: clip }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
        {/* Info Section */}
        <div className="lg:w-1/2 flex flex-col gap-6 mt-10 lg:mt-20">
          <h2 className="text-4xl font-bold text-white">Developer-first Integration</h2>
          <p className="text-lg text-white">
            Integrate our payment APIs quickly and securely. Get real-time logs, SDKs for multiple platforms, and a full test sandbox to simulate payments.
          </p>
          <ul className="list-disc list-inside text-white space-y-2">
            <li>Clean and fast APIs</li>
            <li>Real-time payment logs</li>
            <li>SDKs for JavaScript, React, Node.js</li>
            <li>Full sandbox environment</li>
          </ul>
        </div>

        {/* Code Snippet Section */}
        <div className="lg:w-1/2 w-full overflow-hidden shadow-lg mt-10 lg:mt-20">
          <pre className="bg-gray-900 whitespace-pre-wrap break-words p-6 rounded-lg">
            <code ref={codeRef} className="javascript">
              {codeString}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
