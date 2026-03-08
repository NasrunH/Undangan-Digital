import React from 'react';
import { HeartHandshake, Gem } from 'lucide-react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const LoveStory = () => {
  // Fungsi untuk menampilkan ilustrasi ikon yang berbeda di setiap cerita
  const getIllustration = (index) => {
    // Ikon untuk cerita pertama (Awal Bertemu)
    if (index === 0) {
      return <HeartHandshake size={64} strokeWidth={1} className="text-[#C5A059]" />;
    }
    // Ikon untuk cerita kedua (Lamaran)
    if (index === 1) {
      return <Gem size={64} strokeWidth={1} className="text-[#C5A059]" />;
    }
    // Ikon default jika cerita lebih dari 2
    return <HeartHandshake size={64} strokeWidth={1} className="text-[#C5A059]" />;
  };

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
                
                {/* Bagian Ilustrasi (Pengganti Foto) */}
                <div className="w-full md:w-1/2 flex justify-center">
                  <div className="relative w-48 h-64 md:w-56 md:h-72 bg-white rounded-t-full border border-[#C5A059]/30 shadow-[0_10px_30px_rgba(197,160,89,0.08)] flex items-center justify-center group hover:border-[#C5A059] transition-colors duration-500">
                    {/* Ornamen garis putus-putus berputar di dalam bingkai */}
                    <div className="absolute inset-3 border border-dashed border-[#C5A059]/50 rounded-t-full group-hover:animate-[spin_10s_linear_infinite]"></div>
                    
                    {/* Memanggil ilustrasi berdasarkan urutan cerita */}
                    <div className="relative z-10 bg-[#FDFBF7] w-24 h-24 rounded-full flex items-center justify-center shadow-inner border border-[#C5A059]/20">
                      {getIllustration(index)}
                    </div>
                  </div>
                </div>
                
                {/* Teks Cerita */}
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