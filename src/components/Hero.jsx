const Hero = () => {
  return (
    <section className="py-20 px-8 text-center relative bg-[#F7F3EE]">
      <div className="w-12 h-12 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-8 text-[#F7F3EE]">
        <Heart size={20} className="fill-current text-[#967041]" />
      </div>
      <h2 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-6 tracking-wide">Assalamu'alaikum <br/> Wr. Wb.</h2>
      <p className="text-gray-600 leading-relaxed text-sm mb-12">
        Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta'ala, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami.
      </p>
    </section>
  );
};