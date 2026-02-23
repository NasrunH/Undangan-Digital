import React from 'react';
import { weddingData } from '../data/data';

const Cover = ({ isOpened, onOpen, guestName }) => {
  return (
    <div 
      className={`absolute inset-0 z-50 bg-[#F7F3EE] flex flex-col justify-between items-center transition-transform duration-[1500ms] ease-in-out ${
        isOpened ? '-translate-y-full pointer-events-none' : 'translate-y-0'
      }`}
      style={{ minHeight: '100vh' }}
    >
      <div className="w-full pt-16 flex justify-center opacity-80">
        <svg width="100" height="40" viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0C50 22.0914 32.0914 40 10 40C32.0914 40 50 22.0914 50 0ZM50 0C50 22.0914 67.9086 40 90 40C67.9086 40 50 22.0914 50 0Z" fill="#967041"/>
        </svg>
      </div>

      <div className="text-center px-6 flex flex-col items-center">
        <p className="text-[#967041] tracking-[0.3em] text-xs uppercase mb-6 font-semibold animate-pulse">The Wedding Of</p>
        <h1 className="text-5xl md:text-7xl font-serif text-[#1A1A1A] mb-8 relative">
          <span className="block mb-2 md:inline-block">{weddingData.groom.nickname}</span>
          <span className="block text-3xl md:text-5xl md:inline-block text-[#967041] italic my-2 md:mx-6">&</span>
          <span className="block md:inline-block">{weddingData.bride.nickname}</span>
        </h1>

        <div className="mt-10 p-6 md:p-8 bg-white bg-opacity-60 rounded-2xl border border-[#eaddcf] backdrop-blur-sm w-full max-w-sm shadow-sm">
          <p className="text-xs text-gray-500 mb-2">Kepada Teman/Sahabatku:</p>
          <h2 className="text-xl md:text-2xl font-serif font-bold text-[#1A1A1A] border-b-2 border-[#967041] pb-2 inline-block px-4">
            {guestName}
          </h2>
        </div>
      </div>

      <div className="w-full pb-16 flex flex-col items-center">
        <button 
          onClick={onOpen}
          className="bg-[#1A1A1A] text-white px-8 py-3.5 rounded-full hover:bg-[#967041] transition-all duration-500 tracking-widest text-sm flex items-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1"
        >
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
          BUKA UNDANGAN
        </button>
      </div>
    </div>
  );
};

export default Cover;