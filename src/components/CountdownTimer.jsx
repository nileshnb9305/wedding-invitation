import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // 10 February 2027 target date
    const targetDate = new Date("2027-02-10T18:00:00").getTime();
    
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card-section">
      <h3 className="section-title">THE COUNTDOWN ⏳</h3>
      <div className="timer-grid">
        <div className="timer-box"><span>{timeLeft.days}</span><p>Days</p></div>
        <div className="timer-box"><span>{timeLeft.hours}</span><p>Hours</p></div>
        <div className="timer-box"><span>{timeLeft.minutes}</span><p>Mins</p></div>
        <div className="timer-box"><span>{timeLeft.seconds}</span><p>Secs</p></div>
      </div>
    </div>
  );
}