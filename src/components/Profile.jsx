import React from 'react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const Profile = () => {
  return (
    <section className="py-24 px-6 relative bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-transparent via-[#C5A059]/20 to-transparent"></div>
      
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-sm font-sans font-bold text-[#C5A059] tracking-[0.3em] uppercase">Sang Mempelai</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-16 md:gap-24 max-w-5xl mx-auto relative z-10">
          
          <div className="text-center flex-1 relative group">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 border-[3px] border-dashed border-[#C5A059] rounded-full animate-[spin_15s_linear_infinite]"></div>
              <img src={weddingData.images.groom} alt="Groom" className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3">{weddingData.groom.fullName}</h3>
            <p className="text-sm text-gray-500 leading-relaxed uppercase tracking-wider mb-2">
              {weddingData.groom.childOrder} dari
            </p>
            <p className="font-serif text-[#C5A059] text-lg">Bapak {weddingData.groom.father} <br/>& Ibu {weddingData.groom.mother}</p>
          </div>

          <div className="text-[#C5A059] font-serif text-6xl italic shrink-0 drop-shadow-md">
            &
          </div>

          <div className="text-center flex-1 relative group">
            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto mb-8 relative">
              <div className="absolute inset-0 border-[3px] border-dashed border-[#C5A059] rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <img src={weddingData.images.bride} alt="Bride" className="w-full h-full object-cover rounded-full border-4 border-white shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3">{weddingData.bride.fullName}</h3>
            <p className="text-sm text-gray-500 leading-relaxed uppercase tracking-wider mb-2">
              {weddingData.bride.childOrder} dari
            </p>
            <p className="font-serif text-[#C5A059] text-lg">Bapak {weddingData.bride.father} <br/>& Ibu {weddingData.bride.mother}</p>
          </div>

        </div>
      </FadeIn>
    </section>
  );
};

export default Profile;