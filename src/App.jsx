import React, { useState, useEffect, useRef } from 'react';
import { Music, Music2 } from 'lucide-react';

import Cover from './components/Cover';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Profile from './components/Profile';
import Events from './components/Events';
import LoveStory from './components/LoveStory';
import Gallery from './components/Gallery';
import Gift from './components/Gift';
import Guestbook from './components/Guestbook';
import Footer from './components/Footer';

export default function App() {
  const [isOpened, setIsOpened] = useState(false);
  const [guestName, setGuestName] = useState('Teman & Sahabat');
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const to = params.get('to');
    if (to) setGuestName(to);
  }, []);

  const handleOpenInvitation = () => {
    setIsOpened(true);
    setIsPlaying(true);
    if (audioRef.current) audioRef.current.play().catch(e => console.log(e));
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
    <div className="min-h-screen bg-[#1A1A1A] selection:bg-[#C5A059] selection:text-white font-sans text-[#1A1A1A]">
      <audio ref={audioRef} loop src="/audio/backsound.mp3" preload="auto"></audio>

      <div className="w-full bg-[#FDFBF7] min-h-screen relative shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-x-hidden mx-auto">
        <Cover isOpened={isOpened} onOpen={handleOpenInvitation} guestName={guestName} />

        {isOpened && (
          <div className="animate-[fadeIn_2s_ease-in-out]">
            <Hero />
            <Countdown />
            <Profile />
            <Events />
            <LoveStory />
            <Gallery />
            <Gift />
            <Guestbook guestNameFromUrl={guestName} />
            <Footer />

            <button 
              onClick={toggleAudio}
              className="fixed bottom-6 right-6 w-14 h-14 bg-[#1A1A1A] border border-[#C5A059] text-[#C5A059] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(197,160,89,0.3)] z-40 transition-transform hover:scale-110"
            >
              {isPlaying ? <Music size={24} className="animate-spin-slow" /> : <Music2 size={24} className="opacity-50" />}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}