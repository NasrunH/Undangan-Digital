import React from 'react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';
import BotanicalOrnament from './BotanicalOrnament';

const Footer = () => {
  return (
    <section className="py-32 px-8 text-center bg-[#1A1A1A] text-white relative overflow-hidden">
      <BotanicalOrnament className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 text-[#C5A059] opacity-10" />
      <FadeIn>
        <p className="text-sm md:text-lg text-gray-400 font-serif italic leading-relaxed mb-6 max-w-3xl mx-auto">"{weddingData.quote}"</p>
        <p className="font-bold text-[#C5A059] text-xs tracking-[0.3em] uppercase">{weddingData.surah}</p>
        
        <div className="w-16 h-[1px] bg-[#C5A059] mx-auto my-12 opacity-50"></div>
        
        <p className="text-sm md:text-base text-gray-300 mb-8 leading-relaxed max-w-xl mx-auto">
          Merupakan suatu kehormatan dan kebahagiaan bagi saya apabila rekan-rekan berkenan hadir untuk memberikan doa restu.
        </p>
        <p className="font-sans font-bold text-xs tracking-[0.4em] uppercase text-gray-500">Terima Kasih</p>
        <h3 className="font-serif text-5xl md:text-7xl text-[#C5A059] mt-8 drop-shadow-lg">Adhi & Dista</h3>
      </FadeIn>
    </section>
  );
};

export default Footer;