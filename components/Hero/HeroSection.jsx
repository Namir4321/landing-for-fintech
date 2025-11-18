"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardCarousel from "../ui/CardCarousel";
import { Button } from "../ui/button";
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const imageArray = [
    "/2.png",
    "/action.png",
    "/3.png",
    "/3.png",
    "/3.png",
    "/2.png",
    "/action.png",
    "/3.png",
    "/3.png",
    "/3.png",

  ];
  

  const heroSectionRef = useRef(null);
  const textContentRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const handleCardgsap = useRef(null);
  const actionImgRef = useRef(null);
  useGSAP(() => {
    if (window.innerWidth > 768) {
      // Apply animation only for larger screens (md and above)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=8vh",
          scrub: 4,
          pin: true,
          markers: false, // Remove in production
        },
      });

      tl.to(heroSectionRef.current, {
        width: "100vw",
        height: "120vh",
        position: "absolute",
        top: "0",
        backgroundColor: "white",
        zIndex: 10,
        duration: 1.5,
        ease: "power2.inOut",
      });

      tl.to(
        contentRef.current,
        {
          opacity: 0,
          y: -100,
          duration: 1,
          ease: "power2.out",
        },
        "-=1"
      );

      tl.to(
        textContentRef.current,
        {
          opacity: 1,
          y: -30,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.5"
      );
      tl.fromTo(
        handleCardgsap.current,
        {
          y: 100, // Initial Position (Bottom)
          opacity: 0,
        },
        {
          y: 0, // Final Position (Top)
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.5, // Small delay between each card
        },
        "-=0.3" // Start a little earlier
      );
      gsap.fromTo(
        actionImgRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.4, ease: "power2.out" }
      );

    }
  }, []);

  return (
    <div className="">
      <div
        ref={containerRef}
        className="relative flex min-h-[120vh] md:min-h-[120vh] flex-col items-center justify-start p-6 md:p-10 overflow-hidden bg-black"
      >

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <Image
            src="/background.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover"
            quality={100}
          />
          {/* Optional overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 top-0 z-[5] pointer-events-none w-[1400px] h-[1400px]">
          <Image
            ref={actionImgRef}
            src="/action.png"
            width={2100}
            height={2100}
            alt="Action"
            className="object-contain"
          />
        </div>
        <div
          ref={heroSectionRef}
          className="absolute left-5 md:left-auto h-[450px] md:h-auto w-11/12 md:w-96 md:top-52 rounded-lg border-4 border-white z-10"
        >

          <div
            ref={textContentRef}
            className="flex flex-col justify-start items-center h-full w-full opacity-0"
          >
            <h1 className="text-7xl mt-44 font-sans text-black text-start font-extrabold">
              Your salary, reimagined
            </h1>
            <p className="max-w-3xl text-center mt-4 text-black text-xl">
              Home or away, local or global — move freely between countries and
              currencies. Sign up for free, in a tap.
            </p>
            <Button className="mt-5 rounded-full mb-4" variant="default" size="lg">Get Started</Button>
            <div
              className="flex justify-center items-end max-w-4xl"
              ref={handleCardgsap}
            >
              <CardCarousel
                items={imageArray}
                autoPlay={true}
                interval={3000}
                showControls={false}
                showIndicators={true}
                visibleCards={3}
                cardClassName="h-[300px] w-[200px]"
                renderItem={(item, index) => (
                  <div key={index} className="relative w-full h-full">
                    <Image
                      src={item}
                      alt={`Card ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              />
            </div>
          </div>
        </div>

        <div ref={contentRef} className="max-w-4xl w-full relative z-20">
          <h1 className="text-7xl mt-24 font-sans text-white text-start font-extrabold drop-shadow-lg">
            Change the way you money
          </h1>
          <p className="text-white max-w-md text-xl mt-4 drop-shadow-md">
            Home or away, local or global — move freely between countries and
            currencies. Sign up for free, in a tap.
          </p>
          <button className="bg-white text-black px-6 py-3 mt-4 text-lg font-semibold rounded hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
