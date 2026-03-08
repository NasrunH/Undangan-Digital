import React from 'react';
import { weddingData } from '../data/data';
import BotanicalOrnament from './BotanicalOrnament';

const Cover = ({ isOpened, onOpen, guestName }) => {
  return (
    <div 
      className={`absolute inset-0 z-50 flex flex-col justify-between items-center transition-transform duration-[1500ms] ease-in-out bg-[#1A1A1A] overflow-hidden ${
        isOpened ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
      style={{ minHeight: '100vh' }}
    >
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]"
        style={{ backgroundImage: `url(${weddingData.images.cover})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/40 via-transparent to-[#1A1A1A]/90"></div>

      <div className="relative z-10 w-full pt-16 flex justify-center text-[#C5A059]">
        <BotanicalOrnament className="w-16 h-16 opacity-80" />
      </div>

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <p className="text-[#C5A059] tracking-[0.4em] text-xs uppercase mb-6 font-semibold animate-pulse shadow-black drop-shadow-lg">The Wedding Of</p>
        <h1 className="text-6xl md:text-8xl font-serif text-white mb-8 drop-shadow-2xl relative">
          <span className="block mb-2">{weddingData.groom.nickname}</span>
          <span className="block text-4xl md:text-6xl text-[#C5A059] italic my-2 font-light">&</span>
          <span className="block">{weddingData.bride.nickname}</span>
        </h1>

        <div className="mt-8 p-6 md:p-8 bg-[#1A1A1A]/30 rounded-2xl border border-[#C5A059]/30 backdrop-blur-md w-full max-w-sm shadow-[0_0_30px_rgba(197,160,89,0.15)]">
          <p className="text-xs text-gray-300 mb-2 uppercase tracking-widest">Kepada Yth:</p>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-white border-b border-[#C5A059] pb-2 inline-block px-4">
            {guestName}
          </h2>
        </div>
      </div>

      <div className="relative z-10 w-full pb-16 flex flex-col items-center">
        <button 
          onClick={onOpen}
          className="bg-[#C5A059] text-[#1A1A1A] px-10 py-4 rounded-full hover:bg-white transition-all duration-500 tracking-[0.2em] text-xs font-bold flex items-center gap-3 shadow-[0_0_20px_rgba(197,160,89,0.4)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)] hover:-translate-y-1"
        >
          BUKA UNDANGAN
        </button>
      </div>
    </div>
  );
};

export default Cover;