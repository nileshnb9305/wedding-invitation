// import React from 'react';
// import './OurStory.css';

// export default function OurStory() {
//   return (
//     <div className="card-section story-section">
//       <h3 className="section-title">हमारा परिचय 📜</h3>
//       <p className="story-quote">
//         "अतिथियों की उपस्थिति और स्नेह ही हमारे इस मांगलिक आयोजन की असली शोभा है। आपके आशीर्वाद से ही हमारे जीवन के ये शुभ संस्कार और उत्सव पूर्ण होंगे।"
//       </p>
      
//       <div className="story-badges">
//         <div className="badge-box">
//           <span>दिनांक</span>
//           <p>१० फरवरी २०२७</p>
//         </div>
//         <div className="badge-box">
//           <span>स्थान</span>
//           <p>सुजानगंज, जौनपुर</p>
//         </div>
//       </div>
      
//       <h4 className="story-couple">डॉ. कुलदीप निगम & प्रिया निगम</h4>
//     </div>
//   );
// }


import React from 'react';
import './OurStory.css';

export default function OurStory() {
  return (
    <div className="card-section story-section">
      <h3 className="section-title">हमारा परिचय 📜</h3>
      <p className="story-quote">
        "अतिथियों की उपस्थिति और स्नेह ही हमारे इस मांगलिक आयोजन की असली शोभा है। आपके आशीर्वाद से ही हमारे जीवन के ये शुभ संस्कार और उत्सव पूर्ण होंगे।"
      </p>
      
      <div className="story-badges">
        <div className="badge-box">
          <span>दिनांक</span>
          <p>१० फरवरी २०२७</p>
        </div>
        <div className="badge-box">
          <span>स्थान</span>
          <p>सुजानगंज, जौनपुर</p>
        </div>
      </div>
      
      <div className="couple-container">
        <h4 className="couple-name-main">डॉ. कुलदीप निगम</h4>
        <span className="couple-weds">Weds</span>
        <h4 className="couple-name-main">प्रिया निगम</h4>
      </div>
    </div>
  );
}