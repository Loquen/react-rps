import React from 'react';

function Score({player, cpu}) {
  return (
    <div className='scores'>
      <div className='player'>
        Player: {player}
      </div>
      <div className='cpu'>
        CPU: {cpu}
      </div>
    </div>
  );
}

export default Score;