import React from 'react';
import Win from './Win';

function Decide({player, cpu, winner, resetThrows}) {
  return (
    <div>
      <div className="player">
        <div className="text">
          You Picked:
        </div> 
        <div className="img">
          <img src={player.choice.img} alt={player.choice.name}/>
        </div>
      </div>
      <div className="cpu">
        <div className="text">
          The CPU Picked:
        </div> 
        <div className="img">
          { cpu.choice ?
            <img src={cpu.choice.img} alt={cpu.choice.name}/>
            : <div className="waiting">. . .</div>
          }
        </div>
      </div>
      <Win 
        winner={winner}
        resetThrows={resetThrows}
      />
    </div>
  );
}

export default Decide;