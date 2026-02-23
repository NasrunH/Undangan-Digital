import React from 'react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const Gallery = () => {
  return (
    <section className="py-24 px-6 bg-white border-y border-[#eaddcf]">
      <FadeIn>
        <h2 className="text-sm font-sans font-bold text-center mb-12 text-[#967041] tracking-[0.3em] uppercase">Potret Bahagia</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {weddingData.gallery.map((imgUrl, index) => (
            <FadeIn key={index} delay={index * 200}>
              <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-[#F7F3EE] hover:scale-[1.02] transition-transform duration-500 cursor-pointer">
                <img 
                  src={imgUrl} 
                  alt={`Galeri Pernikahan ${index + 1}`} 
                  className="w-full h-[250px] md:h-[300px] object-cover"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default Gallery;