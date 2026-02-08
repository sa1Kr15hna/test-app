import './yes.css';
import { useLocation, useNavigate } from 'react-router-dom';

function Yes() {
  const location = useLocation();
  const navigate = useNavigate();
  const noClickCount = location.state?.noClickCount ?? 0;

  return (
    <div className="yes-page">
        <div className="poem">
          {noClickCount > 0 ? (
            <>
              <p>Gotcha Bitch!!</p>
              <img src="/test-app/camera.png" alt="" className="yes-camera-img" />
              <p>Really??? You clicked NO {noClickCount} time{noClickCount !== 1 ? 's' : ''} </p>
              <p>Shame on YOU!!! Go back and Try again..</p>
              <img src="/test-app/dis.png" alt="" className="yes-camera-img" />
              <button type="button" className="try-again-btn" onClick={() => navigate('/')}>Try again</button>
            </>
          ) : (
            <>
              <p>Really???</p>
              <img src="/test-app/love.png" alt="" className="yes-camera-img" />
              <p>I want to be your Valentine too....</p>
            </>
          )}
        </div>

    </div>
  );
}

export default Yes;
