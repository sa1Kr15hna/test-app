import './yes.css';
import { useLocation } from 'react-router-dom';

function Yes() {
  const location = useLocation();
  const noClickCount = location.state?.noClickCount ?? 0;

  return (
    <div className="yes-page">
        <div className="poem">
          {noClickCount > 0 ? (
            <>
              <p>Gotcha Bitch!!</p>
              <p>Really??? You clicked NO {noClickCount} time{noClickCount !== 1 ? 's' : ''} </p>
              <p>Shame on YOU!!!</p>
            </>
          ) : (
            <>
              <p>Really???</p>
              <p>I want to be your Valentine too....</p>
            </>
          )}
        </div>

    </div>
  );
}

export default Yes;
