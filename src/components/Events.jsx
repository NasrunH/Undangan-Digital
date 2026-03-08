import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';
import BotanicalOrnament from './BotanicalOrnament';

const Events = () => {
  return (
    <section className="py-24 px-6 bg-[#1A1A1A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C5A059 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      
      <FadeIn>
        <div className="text-center mb-16 relative z-10">
          <BotanicalOrnament className="w-10 h-10 text-[#C5A059] mx-auto mb-4" />
          <h2 className="text-sm font-sans font-bold text-[#C5A059] tracking-[0.3em] uppercase">Rangkaian Acara</h2>
          <h3 className="text-3xl font-serif text-white mt-4">Momen Bahagia Kami</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
          
          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059] rounded-bl-full opacity-10 blur-2xl"></div>
            
            <h3 className="text-3xl font-serif text-[#C5A059] mb-8 border-b border-white/10 pb-4">{weddingData.events.akad.title}</h3>
            <div className="space-y-6 text-sm text-gray-300">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059]"><Calendar size={20} /></div>
                <div>
                  <p className="font-semibold text-white tracking-widest uppercase">{weddingData.events.akad.day}</p>
                  <p className="text-lg font-serif">{weddingData.events.akad.dateStr}</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059]"><Clock size={20} /></div>
                <p className="text-lg">{weddingData.events.akad.time}</p>
              </div>
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059] shrink-0"><MapPin size={20} /></div>
                <div>
                  <p className="font-semibold text-white">{weddingData.events.akad.location}</p>
                  <p className="text-sm mt-1 leading-relaxed opacity-80">{weddingData.events.akad.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] hover:bg-white/10 transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#C5A059] rounded-br-full opacity-10 blur-2xl"></div>
            
            <div>
              <h3 className="text-3xl font-serif text-[#C5A059] mb-8 border-b border-white/10 pb-4">{weddingData.events.ngunduhMantu.title}</h3>
              <div className="space-y-6 text-sm text-gray-300">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059]"><Calendar size={20} /></div>
                  <div>
                    <p className="font-semibold text-white tracking-widest uppercase">{weddingData.events.ngunduhMantu.day}</p>
                    <p className="text-lg font-serif">{weddingData.events.ngunduhMantu.dateStr}</p>
                  </div>
                </div>
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059]"><Clock size={20} /></div>
                  <p className="text-lg">{weddingData.events.ngunduhMantu.time}</p>
                </div>
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C5A059] shrink-0"><MapPin size={20} /></div>
                  <div>
                    <p className="font-semibold text-white">{weddingData.events.ngunduhMantu.location}</p>
                    <p className="text-sm mt-1 leading-relaxed opacity-80">{weddingData.events.ngunduhMantu.address}</p>
                  </div>
                </div>
              </div>
            </div>
            <a href={weddingData.events.ngunduhMantu.mapsLink} target="_blank" rel="noreferrer" className="mt-8 w-full flex justify-center items-center gap-2 bg-[#C5A059] text-[#1A1A1A] py-4 rounded-xl text-sm font-bold tracking-widest uppercase hover:bg-white transition-colors shadow-lg">
              <MapPin size={18} /> Arahkan ke Lokasi
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Events;