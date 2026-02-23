import React, { useState, useEffect, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';

// Import Komponen
import Cover from './components/Cover';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Profile from './components/Profile';
import Events from './components/Events';
import LoveStory from './components/LoveStory';
import Gallery from './components/Gallery';
import Gift from './components/Gift';
import Footer from './components/Footer';
import Guestbook from './components/Guestbook';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('Teman & Sahabat');
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Referensi untuk elemen audio HTML
  const audioRef = useRef(null);

  // Mengambil nama dari URL Parameter (?to=Nama)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) setGuestName(to);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
    
    // Memutar musik saat tombol ditekan
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.log("Audio autoplay diblokir browser, pengguna harus klik tombol play manual.", error);
      });
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-[#1A1A1A] selection:bg-[#967041] selection:text-white font-sans text-[#1A1A1A]">
      
      {/* ELEMEN AUDIO (Sembunyi) - Pastikan file ada di /public/audio/backsound.mp3 */}
      <audio ref={audioRef} loop src="/audio/backsound.mp3" preload="auto"></audio>

      {/* Kontainer utama diubah menjadi lebih lebar di desktop (max-w-4xl) tetapi tetap rapi */}
      <div className="w-full bg-[#F7F3EE] min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-x-hidden">
        
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
            <Countdown />
            <Profile />
            <Events />
            <LoveStory />
            <Gallery />
            <Guestbook guestNameFromUrl={guestName} />
            <Gift />
            <Footer />

            {/* Float Music Button */}
            <button 
              onClick={toggleAudio}
              className="fixed bottom-6 right-6 w-14 h-14 bg-[#967041] text-white rounded-full flex items-center justify-center shadow-[0_8px_25px_rgba(150,112,65,0.5)] z-40 transition-transform hover:scale-110"
            >
              {isPlaying ? (
                <Music size={24} className="animate-spin-slow" />
              ) : (
                <Music2 size={24} className="opacity-50" />
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}