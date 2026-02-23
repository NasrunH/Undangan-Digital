export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('Bapak/Ibu/Saudara/i');
  const [isPlaying, setIsPlaying] = useState(false);

  // Mengambil nama dari URL Parameter (?to=Nama)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) setGuestName(to);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] flex justify-center selection:bg-[#967041] selection:text-white font-sans text-[#1A1A1A]">
      <div className="w-full max-w-md bg-[#F7F3EE] min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-x-hidden">
        
        {/* Render Komponen Cover */}
        <Cover 
          isOpened={isOpened} 
          onOpen={handleOpenInvitation} 
          guestName={guestName} 
        />

        {/* Render Isi Undangan */}
        {isOpened && (
          <div className="animate-[fadeIn_2s_ease-in-out]">
            <Hero />
            <Profile />
            <Events />
            <LoveStory />
            <Gift />
            <Footer />

            {/* Float Music Button */}
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="fixed bottom-6 right-6 w-12 h-12 bg-[#967041] text-white rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(150,112,65,0.4)] z-40 transition-transform hover:scale-110"
            >
              {isPlaying ? (
                <Music size={20} className="animate-pulse" />
              ) : (
                <Music2 size={20} className="opacity-50" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}