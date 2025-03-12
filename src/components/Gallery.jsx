import React from 'react';

// Import all images from the gallery folder dynamically
const importAll = (r) => {
  return r.keys().map(r);
};

// Import all images from the gallery folder
const images = importAll(require.context('../assets/gallery', false, /\.(png|jpe?g|svg|webp)$/));

const Gallery = () => {
  return (
    <div className="gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img 
            src={image} 
            alt={`Gallery ${index + 1}`} 
            className="gallery-image"
            loading="lazy" // Lazy load the image
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
