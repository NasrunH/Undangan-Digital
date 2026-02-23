import React from 'react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const Profile = () => {
  return (
    <section className="py-20 px-6 relative bg-white border-y border-[#eaddcf]">
      <FadeIn>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-24 max-w-4xl mx-auto">
          
          {/* Mempelai Pria */}
          <div className="text-center relative flex-1">
            <div className="w-28 h-28 rounded-full border-2 border-[#967041] mx-auto mb-6 p-1 hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-[#F7F3EE] rounded-full flex items-center justify-center text-[#967041] font-serif text-4xl">A</div>
            </div>
            <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3">{weddingData.groom.fullName}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {weddingData.groom.childOrder} dari<br/>
              <span className="font-semibold text-[#1A1A1A]">Bapak {weddingData.groom.father} & Ibu {weddingData.groom.mother}</span>
            </p>
          </div>

          <div className="text-[#967041] font-serif text-5xl italic opacity-50 shrink-0">
            &
          </div>

          {/* Mempelai Wanita */}
          <div className="text-center relative flex-1">
            <div className="w-28 h-28 rounded-full border-2 border-[#967041] mx-auto mb-6 p-1 hover:scale-105 transition-transform duration-500">
                <div className="w-full h-full bg-[#F7F3EE] rounded-full flex items-center justify-center text-[#967041] font-serif text-4xl">D</div>
            </div>
            <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3">{weddingData.bride.fullName}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {weddingData.bride.childOrder} dari<br/>
              <span className="font-semibold text-[#1A1A1A]">Bapak {weddingData.bride.father} & Ibu {weddingData.bride.mother}</span>
            </p>
          </div>

        </div>
      </FadeIn>
    </section>
  );
};

export default Profile;