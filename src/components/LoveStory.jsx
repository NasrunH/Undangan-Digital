import React from 'react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const LoveStory = () => {
  return (
    <section className="py-24 px-8 bg-[#F7F3EE] relative">
      <FadeIn>
        <h2 className="text-sm font-sans font-bold text-center mb-16 text-[#967041] tracking-[0.3em] uppercase">Love Story</h2>
        
        <div className="relative border-l-2 border-[#967041] ml-4 md:mx-auto md:w-full max-w-2xl space-y-12 pb-4">
          {weddingData.loveStory.map((story, index) => (
            <FadeIn key={index} delay={index * 200}>
              <div className="pl-8 relative group">
                <div className="absolute w-4 h-4 bg-[#967041] rounded-full -left-[9px] top-1 shadow-[0_0_0_4px_#F7F3EE] group-hover:scale-125 transition-transform duration-300"></div>
                <span className="text-xs font-bold text-[#967041] bg-white px-3 py-1.5 rounded shadow-sm inline-block mb-3">
                  {story.monthYear}
                </span>
                <h4 className="text-xl font-serif font-bold text-[#1A1A1A] mb-2">{story.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed md:text-base">{story.story}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default LoveStory;