import { useRef } from 'react';
import './App.css';

function App() {
  const noRef = useRef(null);
  const moveNoButton = () => {
    const noBtn = noRef.current;
    if (!noBtn) return;

    const padding = 10; // margin from edges
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    // Initial random position
    let x = Math.random() * (viewportWidth - btnWidth - 2 * padding) + padding;
    let y = Math.random() * (viewportHeight - btnHeight - 2 * padding) + padding;

    // Clamp so it never goes beyond "viewport - 100" (safety margin)
    x = Math.min(viewportWidth - 300, x);
    y = Math.min(viewportHeight - 200, y);

    // Set fixed position and move using transform
    noBtn.style.position = 'fixed';
    noBtn.style.left = '0px';  
    noBtn.style.top = '0px';
    noBtn.style.transform = `translate(${x}px, ${y}px)`;

    console.log('Viewport:', viewportWidth, viewportHeight, 'X:', x, 'Y:', y, 'Button:', btnWidth, btnHeight);
  };




  return (
    <div className="profile-card">
      <div className="info-box">
        <img src="/test-app/bear.png" alt="" />
        <div className="info Q">
          <h2>Will you be my Valentine?</h2>
        </div>
      </div>

      <div className="btn-box">
        <button className="yes">Yes</button>
        <button
          className="no"
          ref={noRef}
          onClick={moveNoButton} // Move button on click now
        >
          No
        </button>
      </div>
    </div>
  );
}

export default App;
