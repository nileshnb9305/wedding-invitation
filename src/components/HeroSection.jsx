import React from 'react';
import { weddingData } from '../data/weddingData';
import './HeroSection.css';

export default function HeroSection() {
  const groomName = weddingData?.groom?.name || "Dr. Kuldeep Nigam";
  const brideName = weddingData?.bride?.name || "Priya Nigam";
  const weddingDateStr = "10 February 2027 (बुधवार)";
  
  return (
    <div className="hero-section">
      <div className="hero-overlay">
        
        {/* Upar alag span mein Om aur Sanskrit header */}
        <div className="god-icon-container">
          <span className="ganesh-symbol">ॐ</span>
          <p className="sanskrit-header">‖ श्री गणेशाय नमः ‖</p>
        </div>

        <div className="gold-divider"></div>

        {/* Gol circle frame jisme public folder wali image direct load hogi */}
        <div className="hero-image-container">
          <div className="god-circle-frame">
            <img 
              src="/ganesh.jpg" 
              alt="Shri Ganesha" 
              className="hero-couple-img" 
            />
          </div>
        </div>

        <p className="invite-text">
          परिवार की ओर से आपको एवं आपके परिवार को पावन परिणय अवसर पर हार्दिक निमंत्रण
        </p>
        
        <h1 className="couple-names">
          {groomName} <span className="ampersand">&</span> {brideName}
        </h1>
        
        <div className="wedding-wedding-date-badge">
          📅 {weddingDateStr}
        </div>
        
        <p className="hero-venue-info">
          📍 स्थान: सुजानगंज, जौनपुर (उ.प्र.)
        </p>

      </div>
    </div>
  );
}