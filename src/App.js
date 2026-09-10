import React from 'react';
import FloatingPetals from './components/FloatingPetals';
import EnvelopeModal from './components/EnvelopeModal';
import HeroSection from './components/HeroSection';
import OurStory from './components/OurStory';
import CountdownTimer from './components/CountdownTimer';
import PreWeddingEvents from './components/PreWeddingEvents';
import PhotoGallery from './components/PhotoGallery';
import VenueMap from './components/VenueMap';
import SendWishes from './components/SendWishes';
import FamilyContacts from './components/FamilyContacts';
import MusicPlayer from './components/MusicPlayer';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="App app-container">
      {/* Phool girne wala animation */}
      <FloatingPetals />

      {!isOpen && <EnvelopeModal onOpenInvite={() => setIsOpen(true)} />}
      <MusicPlayer shouldPlay={isOpen} />
      
      <HeroSection />
      <OurStory />
      <CountdownTimer />
      <PreWeddingEvents />
      <PhotoGallery />
      <VenueMap />
      <SendWishes />
      <FamilyContacts />
    </div>
  );
}

export default App;