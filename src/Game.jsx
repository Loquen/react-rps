import React from 'react';
import Choose from './Choose';
import Decide from './Decide';

function Game({throws, player, cpu, winner, resetGame, resetThrows, handleChoice}) {
  return (
    <div>
      {
        player.choice ? 
          <Decide 
            player={player}
            cpu={cpu}
            winner={winner}
            resetThrows={resetThrows}
          />
        : <Choose 
            throws={throws}
            handleChoice={handleChoice}
          />
      }
      { winner ? <button onClick={resetGame}>Reset Game</button> : null }
    </div>
  );
}

export default Game;