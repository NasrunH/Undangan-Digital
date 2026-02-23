import React from 'react';
import { Heart } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero = () => {
  return (
    <section className="py-20 px-8 text-center relative bg-[#F7F3EE]">
      <FadeIn>
        <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-8 text-[#F7F3EE] shadow-md">
          <Heart size={20} className="fill-current text-[#967041] animate-pulse" />
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A] mb-6 tracking-wide">Assalamu'alaikum <br/> Wr. Wb.</h2>
        <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
          Tanpa mengurangi rasa hormat, dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, saya bermaksud mengundang rekan-rekan dan sahabat sekalian untuk hadir dan memberikan doa restu pada acara pernikahan saya.
        </p>
      </FadeIn>
    </section>
  );
};

export default Hero;