import React from 'react';

const PictureCircle = () => {
  const pictureUrls = [
    'url1.jpg',
    'url2.jpg',
    'url3.jpg',
    'url4.jpg',
    'url5.jpg',
  ];

  const angleIncrement = (2 * Math.PI) / pictureUrls.length;

  return (
    <svg width="500" height="500">
      {pictureUrls.map((url, index) => {
        const angle = index * angleIncrement;
        const x = Math.cos(angle) * 200 + 250; // Adjust radius and center X position as needed
        const y = Math.sin(angle) * 200 + 250; // Adjust radius and center Y position as needed
        return (
          <image
            key={index}
            href={url}
            x={x - 25} // Adjust image size and centering
            y={y - 25} // Adjust image size and centering
            width="50"
            height="50"
          />
        );
      })}
    </svg>
  );
};

export default PictureCircle;
