import React from 'react';
import { weddingData } from '../data/weddingData';
import './PreWeddingEvents.css';

export default function PreWeddingEvents() {
  // Fallback events array agar weddingData mein events na ho
  const eventsList = weddingData?.events || [
    { title: "हल्दी एवं मटकोर संस्कार", date: "9 फरवरी 2027", location: "सुजानगंज, जौनपुर" },
    { title: "द्वारपूजा एवं लग्न", date: "10 फरवरी 2027", location: "सुजानगंज, जौनपुर" }
  ];

  const mainEvent = weddingData?.mainEvent || {
    title: "शुभ विवाह (Main Wedding)",
    date: "10 फरवरी 2027",
    location: "सुजानगंज, जौनपुर, उत्तर प्रदेश"
  };

  return (
    <div className="card-section">
      <h3 className="section-title">📅 विवाह कार्यक्रम 📅</h3>
      <div className="events-list">
        {eventsList.map((ev, index) => (
          <div key={index} className="event-card">
            <h4>{ev.title}</h4>
            <p>📅 {ev.date}</p>
            <p className="event-loc">📍 {ev.location}</p>
          </div>
        ))}
        
        {/* Main Wedding Event */}
        <div className="event-card main-wedding-card">
          <h4>{mainEvent.title}</h4>
          <p>📅 {mainEvent.date}</p>
          <p className="event-loc">📍 {mainEvent.location}</p>
        </div>
      </div>
    </div>
  );
}