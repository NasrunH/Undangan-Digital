const LoveStory = () => {
  return (
    <section className="py-20 px-8 bg-[#F7F3EE] relative">
      <h2 className="text-sm font-sans font-bold text-center mb-12 text-[#967041] tracking-[0.3em] uppercase">Love Story</h2>
      
      <div className="relative border-l border-[#967041] ml-4 space-y-10 pb-4">
        {weddingData.loveStory.map((story, index) => (
          <div key={index} className="pl-6 relative">
            <div className="absolute w-3 h-3 bg-[#967041] rounded-full -left-[6.5px] top-1.5 shadow-[0_0_0_4px_#F7F3EE]"></div>
            <span className="text-xs font-bold text-[#967041] bg-white px-2 py-1 rounded shadow-sm inline-block mb-2">
              {story.monthYear}
            </span>
            <h4 className="text-lg font-serif font-bold text-[#1A1A1A] mb-2">{story.title}</h4>
            <p className="text-sm text-gray-600 leading-relaxed">{story.story}</p>
          </div>
        ))}
      </div>
    </section>
  );
};