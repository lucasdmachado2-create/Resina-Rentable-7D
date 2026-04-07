'use client';

import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.hours === 0 && prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(timer);
          return prev;
        }
        
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="flex flex-col items-center justify-center bg-rose-50 border border-rose-100 rounded-2xl p-4 mb-8">
      <div className="flex items-center gap-2 text-rose-600 font-bold mb-2 uppercase tracking-wider text-sm">
        <Clock className="w-4 h-4" />
        La oferta termina en:
      </div>
      <div className="flex items-center gap-3 text-neutral-900">
        <div className="flex flex-col items-center">
          <div className="bg-white text-rose-600 font-black text-3xl w-14 h-14 flex items-center justify-center rounded-xl shadow-sm border border-rose-100">
            {formatTime(timeLeft.hours)}
          </div>
          <span className="text-[10px] uppercase font-bold text-neutral-500 mt-1">Horas</span>
        </div>
        <span className="text-2xl font-black text-rose-300 pb-4">:</span>
        <div className="flex flex-col items-center">
          <div className="bg-white text-rose-600 font-black text-3xl w-14 h-14 flex items-center justify-center rounded-xl shadow-sm border border-rose-100">
            {formatTime(timeLeft.minutes)}
          </div>
          <span className="text-[10px] uppercase font-bold text-neutral-500 mt-1">Minutos</span>
        </div>
        <span className="text-2xl font-black text-rose-300 pb-4">:</span>
        <div className="flex flex-col items-center">
          <div className="bg-white text-rose-600 font-black text-3xl w-14 h-14 flex items-center justify-center rounded-xl shadow-sm border border-rose-100">
            {formatTime(timeLeft.seconds)}
          </div>
          <span className="text-[10px] uppercase font-bold text-neutral-500 mt-1">Segundos</span>
        </div>
      </div>
    </div>
  );
}
