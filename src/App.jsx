import { useState, useRef } from 'react';
import './App.css';

function App() {
  const noBtnRef = useRef(null);
  // Initial position (null means it stays in its default flexbox/grid spot)
  const [position, setPosition] = useState(null);

  const moveButton = () => {
    if (noBtnRef.current) {
      const rect = noBtnRef.current.getBoundingClientRect();
      
      // 1. Generate random Center coordinates between 200 and 1000
      const randomCenterX = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
      const randomCenterY = Math.floor(Math.random() * (600 - 200 + 1) + 40);

      // 2. Adjust for top-left position (Center - half of width/height)
      const newX = randomCenterX - rect.width / 2;
      const newY = randomCenterY - rect.height / 2;

      setPosition({ x: newX, y: newY });
      
      console.log(`New Center: X:${randomCenterX}, Y:${randomCenterY}`);
    }
  };

  const btnStyle = position 
    ? { position: 'fixed', left: `${position.x}px`, top: `${position.y}px`, zIndex: 1000 } 
    : {};

  return (
    <div className="profile-card">
      <div className="info-box">
        <img src="/test-app/bear.png" alt="bear" />
        <h2>Will you be my Valentine?</h2>
      </div>

      <div className="btn-box">
        <button className="yes" onClick={() => alert("❤️")}>Yes</button>
        <button 
          ref={noBtnRef}
          className="no" 
          style={btnStyle}
          onClick={moveButton} // Moves when mouse enters
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;