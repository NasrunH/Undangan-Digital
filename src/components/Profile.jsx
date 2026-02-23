const Profile = () => {
  return (
    <section className="py-16 px-6 relative bg-white border-y border-[#eaddcf]">
      <div className="text-center mb-16 relative">
        <div className="w-24 h-24 rounded-full border border-[#967041] mx-auto mb-6 p-1">
            <div className="w-full h-full bg-[#F7F3EE] rounded-full flex items-center justify-center text-[#967041] font-serif text-3xl">A</div>
        </div>
        <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3">{weddingData.groom.fullName}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {weddingData.groom.childOrder} dari<br/>
          <span className="font-semibold text-[#1A1A1A]">Bapak {weddingData.groom.father} & Ibu {weddingData.groom.mother}</span>
        </p>
      </div>

      <div className="flex justify-center items-center text-[#967041] font-serif text-4xl mb-16 italic opacity-50">
        &
      </div>

      <div className="text-center relative">
        <div className="w-24 h-24 rounded-full border border-[#967041] mx-auto mb-6 p-1">
            <div className="w-full h-full bg-[#F7F3EE] rounded-full flex items-center justify-center text-[#967041] font-serif text-3xl">D</div>
        </div>
        <h3 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-3">{weddingData.bride.fullName}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {weddingData.bride.childOrder} dari<br/>
          <span className="font-semibold text-[#1A1A1A]">Bapak {weddingData.bride.father} & Ibu {weddingData.bride.mother}</span>
        </p>
      </div>
    </section>
  );
};