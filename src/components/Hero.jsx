import React from 'react';
import { Heart } from 'lucide-react';
import FadeIn from './FadeIn';
import BotanicalOrnament from './BotanicalOrnament';
import { weddingData } from '../data/data';

const Hero = () => {
  return (
    <section className="py-24 px-6 text-center relative bg-[#FDFBF7] overflow-hidden">
      <BotanicalOrnament className="absolute -top-10 -left-10 w-40 h-40 text-[#C5A059] opacity-10 rotate-45" />
      <BotanicalOrnament className="absolute top-40 -right-20 w-60 h-60 text-[#C5A059] opacity-10 -rotate-90" />
      
      <FadeIn>
        <div className="relative w-64 h-80 md:w-80 md:h-[400px] mx-auto mb-12">
          <div className="absolute inset-0 border-2 border-[#C5A059] rounded-t-full translate-x-3 translate-y-3"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center rounded-t-full shadow-2xl z-10 overflow-hidden"
            style={{ backgroundImage: `url(${weddingData.images.heroArch})` }}
          >
            <div className="w-full h-full bg-gradient-to-tr from-black/20 to-transparent"></div>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center text-[#C5A059] shadow-lg border border-[#C5A059]/30">
            <Heart size={20} className="fill-current animate-pulse" />
          </div>
        </div>

        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-6 tracking-wide">Assalamu'alaikum <br/> Wr. Wb.</h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl mx-auto px-4">
          Tanpa mengurangi rasa hormat, dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, saya bermaksud mengundang rekan-rekan dan sahabat sekalian untuk hadir dan memberikan doa restu pada acara pernikahan saya.
        </p>
      </FadeIn>
    </section>
  );
};

export default Hero;