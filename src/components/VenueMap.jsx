import React from 'react';
import './VenueMap.css';

export default function VenueMap() {
  const openGoogleMaps = () => {
    // Sujanganj, Jaunpur, Uttar Pradesh location query
    window.open("https://maps.google.com/?q=Sujanganj,+Jaunpur,+Uttar+Pradesh", "_blank");
  };

  return (
    <div className="card-section venue-section">
      <h3 className="section-title">✨ विवाह स्थल एवं दिशा-निर्देश ✨</h3>
      <p className="section-subtitle">सुजानगंज, जौनपुर, उत्तर प्रदेश</p>

      <div className="venue-details-box">
        <div className="venue-icon">📍</div>
        <div className="venue-info">
          <h4>पावन स्थल</h4>
          <p>सुजानगंज बाजार के समीप, जिला - जौनपुर, उत्तर प्रदेश</p>
        </div>
      </div>

      <button onClick={openGoogleMaps} className="map-btn">
        🗺️ गूगल मैप पर रास्ता देखें (Open Google Maps)
      </button>
    </div>
  );
}