import React from 'react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const Footer = () => {
  return (
    <section className="py-24 px-8 text-center bg-[#1A1A1A] text-white">
      <FadeIn>
        <p className="text-sm md:text-base text-gray-400 italic leading-relaxed mb-6 max-w-2xl mx-auto">"{weddingData.quote}"</p>
        <p className="font-bold text-[#967041] text-sm tracking-widest">{weddingData.surah}</p>
        
        <div className="w-16 h-[2px] bg-[#967041] mx-auto my-12 opacity-50"></div>
        
        <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">
          Merupakan suatu kehormatan dan kebahagiaan bagi saya apabila rekan-rekan berkenan hadir untuk memberikan doa restu.
        </p>
        <p className="font-sans font-bold text-sm tracking-widest uppercase text-gray-400">Terima Kasih</p>
        <h3 className="font-serif text-5xl text-[#967041] mt-8">Adhi & Dista</h3>
      </FadeIn>
    </section>
  );
};

export default Footer;