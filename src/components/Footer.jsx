const Footer = () => {
  return (
    <section className="py-24 px-8 text-center bg-[#1A1A1A] text-white">
      <p className="text-sm text-gray-400 italic leading-relaxed mb-6">"{weddingData.quote}"</p>
      <p className="font-bold text-[#967041] text-sm tracking-widest">{weddingData.surah}</p>
      
      <div className="w-16 h-[1px] bg-[#967041] mx-auto my-12 opacity-50"></div>
      
      <p className="text-sm text-gray-300 mb-8 leading-relaxed">
        Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.
      </p>
      <p className="font-sans font-bold text-sm tracking-widest uppercase text-gray-400">Terima Kasih</p>
      <h3 className="font-serif text-4xl text-[#967041] mt-6">Adhi & Dista</h3>
    </section>
  );
};