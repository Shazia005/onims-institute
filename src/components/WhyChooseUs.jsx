import React, { useEffect, useState } from 'react';

const WhyChooseUs = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to show the text after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Video Section */}
      <div className="relative w-full h-80 lg:h-screen">
        <iframe
          className="w-full h-full rounded-lg"
          src="https://www.youtube.com/embed/FBMRMjHvR6w?autoplay=1&mute=1&loop=1&playlist=FBMRMjHvR6w"
          title="Why Choose Us Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Text Section that appears below the video as you scroll */}
      <div
        className={`absolute top-full left-0 w-full bg-white p-5 transition-opacity duration-500 ease-in-out ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
        style={{ top: '100%' }}
      >
        <div className="bg-white rounded-lg p-5 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Why Choose Us</h2>
          <p className="text-justify">
            ONIMS offers cutting-edge facilities, an experienced faculty, and strong affiliations with leading hospitals for comprehensive clinical training.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
