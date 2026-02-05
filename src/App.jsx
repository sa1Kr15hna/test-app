import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className = "profile-card">
        <div className="info-box">
          <img src="/test-app/bear.png" alt="" />
          <div className="info">
            <h2>Will you be my Valentine?</h2>
          </div>
        </div>

        <div className="btn-box">
          <button className="yes">Yes</button>
          <button className="no">No</button>
        </div>
      </div>
      
    </>
  )
}

export default App
