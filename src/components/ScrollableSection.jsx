import React from 'react';

const ScrollableSection = () => {
  // Define inline styles
  const containerStyle = {
    maxHeight: '300px', // Adjust height as needed
    overflowY: 'auto', // Enables vertical scrolling
    border: '1px solid #ddd', // Adds a border
    padding: '10px', // Adds padding
    backgroundColor: '#f9f9f9', // Sets background color
  };

  const videoContainerStyle = {
    position: 'relative',
    width: '100%',
    height: 'auto',
    marginBottom: '1rem',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const iframeStyle = {
    width: '100%',
    height: '200px', // Fixed height for video
    border: 'none',
  };

  const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    marginBottom: '1rem',
  };

  const textStyle = {
    marginBottom: '1rem',
  };

  // Updated video URLs (removed the old ones)
  const videoUrls = [
    "https://www.youtube.com/embed/vhJPL5TeFTg", // First new video URL
    "https://www.youtube.com/embed/mB_3Zv_ybu0"  // Second new video URL
  ];

  // Example text content
  const texts = [
    "In this captivating video, Obaid Noor takes us on a scenic tour of Mianwali, showcasing the region's breathtaking landscapes and cultural heritage. From the serene views of the Indus River to the historic landmarks, this journey offers a glimpse into the rich history and natural beauty that Mianwali has to offer. Whether you're a local or a traveler, this video will inspire you to explore the hidden gems of Mianwali.",
    "Join Obaid Noor as he dives into the world of Mianwali's traditional cuisine. In this mouth-watering video, you'll discover the flavors that make Mianwali's food so unique, from traditional dishes to street food favorites. Obaid gives viewers an authentic taste of the local culinary scene, sharing the secrets behind these delicious recipes and the stories that make each dish special. Perfect for food lovers looking to explore new tastes!"
    // Add more text content as needed
  ];

  // Repeat content to ensure enough for scrolling
  const repeatedContent = [];
  for (let i = 0; i < 5; i++) { // Adjust the multiplier as needed
    const videoIndex = i % videoUrls.length;
    const textIndex = i % texts.length;
    repeatedContent.push(
      <React.Fragment key={i}>
        <div style={videoContainerStyle}>
          <iframe
            style={iframeStyle}
            src={videoUrls[videoIndex]}
            title={`Scrollable Section Video ${i}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div style={textStyle}>
          <p>{texts[textIndex]}</p>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Scrollable Section</h2>
      {repeatedContent}
    </div>
  );
};

export default ScrollableSection;
