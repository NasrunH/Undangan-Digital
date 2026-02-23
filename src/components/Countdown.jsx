import React, { useState, useEffect } from 'react';
import { CalendarPlus } from 'lucide-react';
import { weddingData } from '../data/data';
import FadeIn from './FadeIn';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Mengambil tanggal dari data.js
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

  // Fungsi untuk membuat Link Google Calendar secara dinamis
  const generateCalendarLink = () => {
    // Judul Acara
    const title = encodeURIComponent(`Pernikahan ${weddingData.groom.nickname} & ${weddingData.bride.nickname}`);
    
    // Deskripsi Acara
    const details = encodeURIComponent("Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu.");
    
    // Lokasi (Mengambil dari alamat Akad)
    const location = encodeURIComponent(weddingData.events.akad.address);
    
    // Format Waktu (YYYYMMDDTHHmmss)
    const startDate = new Date(weddingData.targetDate);
    // Asumsi durasi acara 3 jam dari waktu mulai
    const endDate = new Date(startDate.getTime() + 3 * 60 * 60 * 1000); 
    
    const formatToGoogleCalDate = (date) => {
      return date.getFullYear().toString() +
             (date.getMonth() + 1).toString().padStart(2, '0') +
             date.getDate().toString().padStart(2, '0') + 'T' +
             date.getHours().toString().padStart(2, '0') +
             date.getMinutes().toString().padStart(2, '0') +
             date.getSeconds().toString().padStart(2, '0');
    };

    const dates = `${formatToGoogleCalDate(startDate)}/${formatToGoogleCalDate(endDate)}`;
    
    // ctz=Asia/Jakarta memastikan zona waktunya diset ke WIB
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}&ctz=Asia/Jakarta`;
  };

  return (
    <section className="pb-16 px-6 bg-[#F7F3EE] -mt-8">
      <FadeIn delay={200}>
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-[#967041] uppercase mb-6">Menuju Hari Bahagia</p>
          
          {/* Grid Angka Countdown */}
          <div className="flex justify-center gap-3 md:gap-6 w-full">
            {[
              { label: 'Hari', value: timeLeft.days },
              { label: 'Jam', value: timeLeft.hours },
              { label: 'Menit', value: timeLeft.minutes },
              { label: 'Detik', value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-[#eaddcf] rounded-2xl flex items-center justify-center shadow-sm">
                  <span className="text-2xl md:text-3xl font-serif font-bold text-[#1A1A1A]">{item.value.toString().padStart(2, '0')}</span>
                </div>
                <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-500 mt-2">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Tombol Add to Calendar */}
          <div className="mt-10">
            <a 
              href={generateCalendarLink()}
              target="_blank"
              rel="noreferrer"
              className="bg-[#967041] text-white px-8 py-3 rounded-full hover:bg-[#7a5b34] transition-all duration-300 tracking-wider text-sm font-semibold flex items-center gap-3 shadow-[0_8px_20px_rgba(150,112,65,0.3)] hover:shadow-[0_10px_25px_rgba(150,112,65,0.4)] hover:-translate-y-1"
            >
              <CalendarPlus size={18} />
              Simpan Di Kalender
            </a>
          </div>

        </div>
      </FadeIn>
    </section>
  );
};

export default Countdown;