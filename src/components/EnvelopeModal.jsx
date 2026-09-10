import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import './EnvelopeModal.css';

export default function EnvelopeModal({ onOpenInvite }) {
  const [opened, setOpened] = useState(false);

  const handleOpen = () => {
    setOpened(true);
    setTimeout(() => {
      onOpenInvite();
    }, 1000);
  };

  const groomName = weddingData?.groom?.name || "Dr. Kuldeep Nigam";
  const brideName = weddingData?.bride?.name || "Priya Nigam";

  return (
    <div className={`envelope-overlay ${opened ? 'fade-out' : ''}`}>
      <div className={`envelope-container ${opened ? 'open' : ''}`} onClick={handleOpen}>
        <div className="envelope-flap"></div>
        <div className="envelope-pocket"></div>
        <div className="invite-card-preview">
          <p className="sanskrit">‖ श्री गणेशाय नमः ‖</p>
          <h3>Wedding Invitation</h3>
          <p className="couple-preview">{groomName} & {brideName}</p>
          
          <div className="wax-seal">
            <span>💌</span>
          </div>
        </div>
      </div>
      <p className="tap-hint">✨ Tap to Open Invitation ✨</p>
    </div>
  );
}