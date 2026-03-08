import React from 'react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const Gallery = () => {
  return (
    <section className="py-24 px-6 bg-[#1A1A1A]">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {weddingData.gallery.map((img, i) => (
          <FadeIn key={i} delay={i * 100} className={`rounded-2xl overflow-hidden ${i === 0 || i === 3 ? 'md:col-span-2' : ''}`}>
            <img src={img} alt={`Gallery ${i+1}`} className="w-full h-48 md:h-64 object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100 cursor-pointer" />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Gallery;