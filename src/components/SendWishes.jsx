import React, { useState } from 'react';
import { weddingData } from '../data/weddingData';
import './SendWishes.css';

export default function SendWishes() {
  const [senderName, setSenderName] = useState('');
  const [customMsg, setCustomMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSendWish = (e) => {
    e.preventDefault();
    const nameText = senderName.trim() ? senderName.trim() : 'अतिथि';
    
    const defaultHindiMsg = `हार्दिक बधाई! डॉ. कुलदीप निगम और प्रिया निगम के विवाह की आपको बहुत-बहुत शुभकामनाएं। ईश्वर आप दोनों को सदैव खुश रखे। ✨`;
    const finalMessageContent = customMsg.trim() ? customMsg.trim() : defaultHindiMsg;

    // WhatsApp par ab poora message shuddh Hindi mein jayega
    const message = `🌸 *विवाह की शुभकामनाएं* 🌸\n\nप्रेषक: ${nameText}\nसंदेश: ${finalMessageContent}`;
    
    window.open(`https://wa.me/${weddingData.whatsapp.phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    
    setSubmitted(true);
    setSenderName('');
    setCustomMsg('');

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="card-section send-wishes-container">
      <h3 className="section-title">💌 शुभकामनाएं भेजें 💌</h3>
      
      {/* Hindi mein Success Popup */}
      {submitted && (
        <div className="success-popup">
          ✨ धन्यवाद! आपका आशीर्वाद और संदेश सफलतापूर्वक भेज दिया गया है! 🙏
        </div>
      )}

      <form onSubmit={handleSendWish} className="wishes-form">
        <input 
          type="text" 
          value={senderName} 
          onChange={(e) => setSenderName(e.target.value)} 
          placeholder="अपना पूरा नाम लिखें" 
          className="wishes-input" 
        />
        <textarea 
          value={customMsg} 
          onChange={(e) => setCustomMsg(e.target.value)} 
          placeholder="अपनी शुभकामनाएं यहाँ लिखें..." 
          className="wishes-input wishes-textarea">
        </textarea>
        <button type="submit" className="wishes-btn">व्हाट्सएप पर शुभकामनाएं भेजें 💚</button>
      </form>
    </div>
  );
}