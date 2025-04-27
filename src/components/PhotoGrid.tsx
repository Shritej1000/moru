
import React from 'react';

const photos = [
  { id: 1, url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed', alt: 'Wedding couple in elegant setting' },
  { id: 2, url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866', alt: 'Bride detail shot' },
  { id: 3, url: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a', alt: 'Wedding ceremony moment' },
  { id: 4, url: 'https://images.unsplash.com/photo-1523438885200-e635ba2c371e', alt: 'Wedding ring detail' },
  { id: 5, url: 'https://images.unsplash.com/photo-1591604466107-ec97de577aff', alt: 'Intimate wedding moment' },
  { id: 6, url: 'https://images.unsplash.com/photo-1622811533258-c3c5915ba818', alt: 'Editorial wedding portrait' },
];

const PhotoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {photos.map((photo) => (
        <div
          key={photo.id}
          className="aspect-[3/4] relative group cursor-pointer overflow-hidden"
        >
          <img
            src={photo.url}
            alt={photo.alt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
