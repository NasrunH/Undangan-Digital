const Events = () => {
  return (
    <section className="py-20 px-6 bg-[#1A1A1A] text-white relative">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] fill-white transform rotate-180"><path d="M1200 120L0 16.48 0 0 1200 0 1200 120z"></path></svg>
      </div>

      <h2 className="text-sm font-sans font-bold text-center mt-8 mb-12 text-[#967041] tracking-[0.3em] uppercase">Rangkaian Acara</h2>
      
      <div className="space-y-8">
        {/* Akad Nikah */}
        <div className="bg-[#242424] p-8 rounded-2xl border-t-2 border-[#967041] shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl font-serif text-[#F7F3EE] mb-6">{weddingData.events.akad.title}</h3>
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#967041]"><Calendar size={18} /></div>
              <div>
                <p className="font-semibold text-gray-200">{weddingData.events.akad.day}</p>
                <p>{weddingData.events.akad.dateStr}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#967041]"><Clock size={18} /></div>
              <p>{weddingData.events.akad.time}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#967041] shrink-0"><MapPin size={18} /></div>
              <div>
                <p className="font-semibold text-gray-200">{weddingData.events.akad.location}</p>
                <p className="text-xs mt-1 leading-relaxed">{weddingData.events.akad.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ngunduh Mantu */}
        <div className="bg-[#242424] p-8 rounded-2xl border-t-2 border-[#967041] shadow-2xl relative overflow-hidden">
          <h3 className="text-2xl font-serif text-[#F7F3EE] mb-6">{weddingData.events.ngunduhMantu.title}</h3>
          <div className="space-y-4 text-sm text-gray-400">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#967041]"><Calendar size={18} /></div>
              <div>
                <p className="font-semibold text-gray-200">{weddingData.events.ngunduhMantu.day}</p>
                <p>{weddingData.events.ngunduhMantu.dateStr}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#967041]"><Clock size={18} /></div>
              <p>{weddingData.events.ngunduhMantu.time}</p>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center text-[#967041] shrink-0"><MapPin size={18} /></div>
              <div>
                <p className="font-semibold text-gray-200">{weddingData.events.ngunduhMantu.location}</p>
                <p className="text-xs mt-1 leading-relaxed">{weddingData.events.ngunduhMantu.address}</p>
              </div>
            </div>
          </div>
          <a 
            href={weddingData.events.ngunduhMantu.mapsLink} 
            target="_blank" 
            rel="noreferrer"
            className="mt-8 w-full flex justify-center items-center gap-2 bg-[#967041] text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#7a5b34] transition-colors"
          >
            <MapPin size={16} /> Buka Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};
