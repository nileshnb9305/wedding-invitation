import React from 'react';
import './PhotoGallery.css';

export default function PhotoGallery() {
  const ritualsList = [
    {
      time: "सुबह 09:00 बजे",
      title: "गणेश पूजन एवं मंडप रोपण",
      desc: "शुभ कार्यों के आरंभ में प्रथम पूज्य श्री गणेश जी की वंदना।"
    },
    {
      time: "दोपहर 02:00 बजे",
      title: "मटिकोत्सव एवं हल्दी रस्म",
      desc: "स्नेहीजनों की उपस्थिति में मांगलिक हल्दी और उबटन का कार्यक्रम।"
    },
    {
      time: "शाम 07:00 बजे",
      title: "बारात प्रस्थान एवं स्वागत",
      desc: "समारोह स्थल पर बारात का आगमन और भव्य स्वागत।"
    }
  ];

  return (
    <div className="card-section">
      <h3 className="section-title">✨ मांगलिक कार्यक्रम एवं रस्में ✨</h3>
      <p className="gallery-subtitle">पावन परिणय के अवसर पर आयोजित होने वाले मुख्य संस्कार</p>
      
      <div className="rituals-container">
        {ritualsList.map((ritual, index) => (
          <div key={index} className="ritual-card">
            <span className="ritual-time">{ritual.time}</span>
            <h4 className="ritual-title">{ritual.title}</h4>
            <p className="ritual-desc">{ritual.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}