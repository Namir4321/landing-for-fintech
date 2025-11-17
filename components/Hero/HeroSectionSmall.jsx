'use client';
import Image from "next/image";
import ScaleCarousel from "../ui/ScaleCarousel";
import { useRef } from "react";

const HeroSectionSmall = () => {
    const handleCardgsap = useRef(null);
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
      
    return (
        <>
            <div className="relative flex min-h-screen flex-col items-center justify-start p-6 overflow-hidden bg-black">
                {/* Background */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <Image
                        src="/background.png"
                        alt="Hero Background"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Text content */}
                <div className="relative z-20 max-w-4xl w-full">
                    <h1 className="text-3xl mt-12 font-sans text-white text-start font-extrabold drop-shadow-lg">
                        Change the way you money
                    </h1>

                    <p className="text-white max-w-md text-lg mt-4 drop-shadow-md">
                        Home or away, local or global — move freely between countries and
                        currencies. Sign up for free, in a tap.
                    </p>

                    <button className="bg-white rounded-full text-black px-6 py-3 mt-4 text-lg font-semibold hover:bg-gray-100 transition">
                        Get Started
                    </button>
                </div>

                {/* Large woman image (action.png) → behave like Revolut */}
                <div className="absolute z-10 top-[320px] left-1/2 -translate-x-1/2 w-full flex justify-center overflow-visible pointer-events-none">
                    <Image
                        src="/action.png"
                        alt="Action"
                        width={4800}
                        height={5800}
                        className="
                        object-contain
                        max-w-[281%]    
                        sm:max-w-[200%]
                        md:max-w-[150%]
                        lg:max-w-[120%]
                        select-none
                    "
                    />
                </div>

                {/* Transparent Phone Frame */}
                <div
                    className="
                    relative z-30
                    mt-12
                    w-full 
                    h-[500px] 
                    border-[3px] 
                    border-white/80 
                    rounded-[20px]
                    shadow-xl
                    overflow-hidden
                    flex items-center justify-center
                "
                >
                    <Image src="/1.png" alt="Phone" width={1600} height={1600} className="object-cover" />    
                </div>
            </div>
            <div className="bg-white w-full py-8">
              <ScaleCarousel
                items={imageArray}
                autoPlay={true}
                interval={3000}
                visibleCards={3}
              />
            </div>
        </>
    );
};

export default HeroSectionSmall;
