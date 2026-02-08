import { useState, useRef } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';
function App() {
  const navigate = useNavigate();
  const noBtnRef = useRef(null);
  const [position, setPosition] = useState(null);
  
  // 1. Create state for the button text
  const [noButtonText, setNoButtonText] = useState("No");
  const [noClickCount, setNoClickCount] = useState(0);

  const moveButton = () => {
    setNoClickCount((c) => c + 1);
    if (noBtnRef.current) {
      const rect = noBtnRef.current.getBoundingClientRect();
      
      const randomCenterX = Math.floor(Math.random() * (1000 - 200 + 1) + 100);
      const randomCenterY = Math.floor(Math.random() * (600 - 250 + 1) + 40);

      const newX = randomCenterX - rect.width / 2;
      const newY = randomCenterY - rect.height / 2;

      setPosition({ x: newX, y: newY });

      // 2. Update the text here
      // You can use a fixed string or a random array of "rejections"
      const phrases = ["Are you sure?", "Really?", "Think again!", "Rude!", "Nice try", "Nope", "Try harder!", "Not happening!", "F*ck You!!"];
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setNoButtonText(randomPhrase);
      
      console.log(`New Center: X:${randomCenterX}, Y:${randomCenterY}`);
    }
  };

  const btnStyle = position 
    ? { position: 'fixed', left: `${position.x}px`, top: `${position.y}px`, zIndex: 1000 } 
    : {};

  return (
    <div className="profile-card">
      <div className="info-box">
        <h2>Keerthi</h2>
        <h2>Will you be my Valentine?</h2>
      </div>

      <div className="btn-box">
        <button className="yes" onClick={() => navigate('/yes', { state: { noClickCount } })}>Yes</button>
        <button 
          ref={noBtnRef}
          className="no" 
          style={btnStyle}
          onClick={moveButton} 
        >
          {/* 3. Render the dynamic text instead of the hardcoded "No" */}
          {noButtonText}
        </button>
      </div>
    </div>
  );
}

export default App;