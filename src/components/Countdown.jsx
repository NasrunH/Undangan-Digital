import React, { useState, useEffect } from 'react';
import { CalendarPlus } from 'lucide-react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(weddingData.targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const generateCalendarLink = () => {
    const title = encodeURIComponent(`Pernikahan ${weddingData.groom.nickname} & ${weddingData.bride.nickname}`);
    const details = encodeURIComponent("Merupakan suatu kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.");
    const location = encodeURIComponent(weddingData.events.akad.address);
    const startDate = new Date(weddingData.targetDate);
    const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000); 
    
    const formatD = (date) => date.getFullYear().toString() + (date.getMonth() + 1).toString().padStart(2, '0') + date.getDate().toString().padStart(2, '0') + 'T' + date.getHours().toString().padStart(2, '0') + date.getMinutes().toString().padStart(2, '0') + date.getSeconds().toString().padStart(2, '0');

    const dates = `${formatD(startDate)}/${formatD(endDate)}`;
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}&ctz=Asia/Jakarta`;
  };

  return (
    <section className="pb-24 px-6 bg-[#FDFBF7] relative z-10">
      <FadeIn delay={200}>
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <p className="text-center text-xs font-bold tracking-[0.4em] text-[#C5A059] uppercase mb-8 drop-shadow-sm">Menuju Hari Bahagia</p>
          
          <div className="flex justify-center gap-3 md:gap-8 w-full">
            {[
              { label: 'Hari', value: timeLeft.days },
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-[#1A1A1A] border border-[#C5A059]/30 rounded-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(197,160,89,0.15)]">
                  <span className="text-2xl md:text-4xl font-serif font-bold text-[#C5A059]">{item.value.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#1A1A1A] mt-4">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a 
              href={generateCalendarLink()} target="_blank" rel="noreferrer"
              className="bg-[#1A1A1A] text-[#C5A059] border border-[#C5A059]/50 px-8 py-4 rounded-full hover:bg-[#C5A059] hover:text-[#1A1A1A] transition-all duration-500 tracking-[0.2em] text-xs font-bold flex items-center gap-3 shadow-[0_8px_20px_rgba(197,160,89,0.2)] hover:shadow-[0_10px_25px_rgba(197,160,89,0.4)] hover:-translate-y-1"
            >
              <CalendarPlus size={18} />
              SIMPAN DI KALENDER
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Countdown;