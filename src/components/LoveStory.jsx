import React from 'react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const LoveStory = () => {
  return (
    <section className="py-24 px-6 bg-[#FDFBF7] relative overflow-hidden">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-sm font-sans font-bold text-[#C5A059] tracking-[0.3em] uppercase">Love Story</h2>
          <h3 className="text-3xl font-serif text-[#1A1A1A] mt-4">Perjalanan Cinta Kami</h3>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-16">
          {weddingData.loveStory.map((story, index) => (
            <FadeIn key={index} delay={index * 200} direction={index % 2 === 0 ? 'right' : 'left'}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                
                <div className="w-full md:w-1/2 relative">
                  <div className={`absolute inset-0 border border-[#C5A059] ${index % 2 === 0 ? '-translate-x-4 translate-y-4' : 'translate-x-4 translate-y-4'} rounded-2xl`}></div>
                  <img src={story.image} alt={story.title} className="w-full h-64 object-cover rounded-2xl relative z-10 shadow-lg" />
                </div>
                
                <div className={`w-full md:w-1/2 text-center ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                  <span className="text-xs font-bold text-[#C5A059] bg-[#C5A059]/10 px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 inline-block">
                    {story.monthYear}
                  </span>
                  <h4 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">{story.title}</h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{story.story}</p>
                </div>
                
              </div>
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default LoveStory;