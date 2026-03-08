import React from 'react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const Gallery = () => {
  return (
    <section className="py-24 px-6 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background Pola Bintik Elegan */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#C5A059 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      
      <FadeIn>
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-sm font-sans font-bold text-[#C5A059] tracking-[0.3em] uppercase">Potret Bahagia</h2>
          <h3 className="text-3xl font-serif text-white mt-4">Galeri Kami</h3>
        </div>
        
        {/* Grid 2 Kolom di HP, 4 Kolom di Laptop */}
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 relative z-10 px-2">
          {weddingData.gallery.map((img, i) => (
            <FadeIn 
              key={i} 
              delay={i * 150} 
              // Efek Stagger (Naik Turun/Zig-zag) khusus untuk foto genap
              className={`rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 ${
                i % 2 !== 0 ? 'mt-8 md:mt-16' : ''
              }`}
            >
              {/* aspect-[3/4] memaksa bingkai selalu berbentuk potrait (vertikal) */}
              <div className="aspect-[3/4] w-full relative group bg-[#1A1A1A]">
                <img 
                  src={img} 
                  alt={`Gallery ${i+1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-[1500ms] opacity-70 group-hover:opacity-100 cursor-pointer" 
                  loading="lazy"
                />
                {/* Efek Gradasi Hitam saat di-hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default Gallery;