import React from 'react';

function Win({winner, resetThrows}) {
  return (
    <div>
      {
        winner === 1 ? <div className="win">You Win!</div>
        : winner === -1 ? <div className="lose">You Lose...</div>
        : <button onClick={resetThrows} className="tie">Tie, throw again</button>
      }
    </div>
  );
}

export default Win;