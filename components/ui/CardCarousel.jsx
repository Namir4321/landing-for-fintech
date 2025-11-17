"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "./card";

/**
 * Reusable Card Carousel Component
 * @param {Object} props
 * @param {Array} props.items - Array of items to display (videos, images, or custom content)
 * @param {boolean} props.autoPlay - Auto-play carousel (default: true)
 * @param {number} props.interval - Auto-play interval in ms (default: 3000)
 * @param {boolean} props.showControls - Show navigation arrows (default: true)
 * @param {boolean} props.showIndicators - Show dot indicators (default: true)
 * @param {number} props.visibleCards - Number of cards to show at once (default: 1)
 * @param {string} props.cardClassName - Custom card styling
 */
const CardCarousel = ({
  items = [],
  autoPlay = true,
  interval = 3000,
  showControls = true,
  showIndicators = true,
  visibleCards = 1,
  cardClassName = "h-[200px] w-[140px]",
  renderItem,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality with infinite scroll
  useEffect(() => {
    if (!autoPlay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval]);

  // Reset position for infinite scroll effect (for multiple visible cards)
  useEffect(() => {
    if (visibleCards > 1 && currentIndex >= items.length) {
      // Wait for transition to complete, then reset without animation
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, items.length, visibleCards]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) return null;

  // For multiple visible cards with infinite scroll
  if (visibleCards > 1) {
    // Create duplicated items for infinite scroll effect
    const duplicatedItems = [...items, ...items, ...items];
    
    return (
      <div className="relative flex flex-col items-center gap-4 w-full">
        {/* Carousel Container */}
        <div className="relative overflow-hidden w-full">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {duplicatedItems.map((item, index) => (
              <div key={index} className="flex-shrink-0" style={{ width: `${75 / visibleCards}%` }}>
                <Card className={`rounded-lg shadow-lg overflow-hidden p-0 ${cardClassName}`} style={{ backgroundColor: '#5598ce' }}>
                  {renderItem ? renderItem(item, index % items.length) : item}
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Dot Indicators */}
        {showIndicators && items.length > 1 && (
          <div className="flex gap-2">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === (currentIndex % items.length)
                    ? "bg-blue-600 w-6"
                    : "bg-gray-400 hover:bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    );
  }

  // Single card carousel (original behavior)
  return (
    <div className="relative flex flex-col items-center gap-4">
      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-shrink-0 w-full flex justify-center">
              <Card className={`rounded-lg shadow-lg overflow-hidden p-0 ${cardClassName}`} style={{ backgroundColor: '#5598ce' }}>
                {renderItem ? renderItem(item, index) : item}
              </Card>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        {showControls && items.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition z-10"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}
      </div>

      {/* Dot Indicators */}
      {showIndicators && items.length > 1 && (
        <div className="flex gap-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-blue-600 w-6"
                  : "bg-gray-400 hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CardCarousel;
