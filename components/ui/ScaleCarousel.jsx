'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const ScaleCarousel = ({ 
  items = [], 
  autoPlay = true, 
  interval = 3000,
  visibleCards = 3 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || items.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  const getCardStyle = (index) => {
    const totalCards = items.length;
    const offset = index - currentIndex;
    
    // Calculate position relative to center
    let position = offset;
    if (offset > totalCards / 2) {
      position = offset - totalCards;
    } else if (offset < -totalCards / 2) {
      position = offset + totalCards;
    }

    const isCenter = position === 0;
    const isVisible = Math.abs(position) < Math.ceil(visibleCards / 2) + 1;

    if (!isVisible) {
      return {
        opacity: 0,
        transform: `translateX(${position * 220}px) scale(0.7)`,
        zIndex: 0,
      };
    }

    // Center card is bigger
    if (isCenter) {
      return {
        opacity: 1,
        transform: `translateX(${position * 220}px) scale(1.15)`,
        zIndex: 20,
      };
    }

    // Side cards are smaller
    return {
      opacity: 0.6,
      transform: `translateX(${position * 220}px) scale(0.85)`,
      zIndex: 10 - Math.abs(position),
    };
  };

  if (items.length === 0) {
    return <div className="text-center py-8">No items to display</div>;
  }

  return (
    <div className="relative w-full py-12 overflow-hidden">
      <div className="relative h-[400px] flex items-center justify-center">
        {items.map((item, index) => {
          const style = getCardStyle(index);
          
          return (
            <div
              key={index}
              className="absolute w-[200px] h-[350px] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ease-out"
              style={style}
            >
              <div className="relative bg-[#5598ce] w-full h-full">
                <Image
                  src={item}
                  alt={`Card ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-gray-800 w-8' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScaleCarousel;

