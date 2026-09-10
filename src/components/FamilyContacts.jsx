import React from 'react';
import './FamilyContacts.css';

export default function FamilyContacts() {
  const contacts = [
    { relation: "पिताजी (Father)", name: "विनोद कुमार निगम" },
    { relation: "माताजी (Mother)", name: "पुनिता देवी निगम" },
  ];

  return (
    <div className="card-section contacts-section">
      <h3 className="section-title">✨ पारिवारिक संपर्क सूत्र ✨</h3>
      <p className="section-subtitle">किसी भी असुविधा या मार्गदर्शन के लिए संपर्क करें</p>

      <div className="contacts-list">
        {contacts.map((c, i) => (
          <div key={i} className="contact-card">
            <div className="contact-details">
              <span className="contact-relation">{c.relation}</span>
              <h4 className="contact-name">{c.name}</h4>
            </div>
            <a href={`tel:${c.phone}`} className="call-btn" title="Call">
              📞 कॉल करें
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}