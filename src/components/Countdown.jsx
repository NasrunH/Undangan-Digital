import React, { useState, useEffect } from 'react';
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

  return (
    <section className="pb-16 px-6 bg-[#F7F3EE] -mt-8">
      <FadeIn delay={200}>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-xs font-bold tracking-[0.2em] text-[#967041] uppercase mb-4">Menuju Hari Bahagia</p>
          <div className="flex justify-center gap-3 md:gap-6">
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
        </div>
      </FadeIn>
    </section>
  );
};

export default Countdown;