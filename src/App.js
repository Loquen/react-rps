import React, { useState }from 'react';
import Score from './Score';
import Rules from './Rules';
import Game from './Game';
import './App.scss';

function App() {
  /******  STATE ******/
  const throws = [
    {
      name: 'rock',
      img: './icon-rock.svg',
      className: 'rock',
      beats: 'scissors'
    },
    {
      name: 'paper',
      img: './icon-paper.svg',
      className: 'paper',
      beats: 'rock'
    },
    {
      name: 'scissors',
      img: './icon-scissors.svg',
      className: 'scissors',
      beats: 'paper'
    },
  ];

  const initialState = {
    score: 0,
    choice: null
  }

  const [player, setPlayer] = useState(initialState);
  const [cpu, setCpu] = useState(initialState);
  const [winner, setWinner] = useState(0);
  const [showRules, setShowRules] = useState(false);
  
  /******  HELPERS  ******/
  const randomCPUThrow = () => {
    const max = throws.length;
    
    const cpuThrow = Math.floor(Math.random() * max);
    
    return throws[cpuThrow];
  }
  
  const calculateWinner = async () => {
    if(player.choice && cpu.choice){
      if(player.choice.beats === cpu.choice.name){
        console.log('player wins');
        setWinner(1);
        setPlayer(p => ({
          choice: p.choice,
          score: p.score + 1
        }));
      } else if(player.choice.name === cpu.choice.name){
        console.log(player.choice.name, cpu.choice.name)
        setWinner(0);
      } else {
        console.log('player loses');
        setWinner(-1);
        setCpu(c => ({
          choice: c.choice,
          score: c.score + 1
        }));
      }
    }
  }

  // /******  EFFECTS  ******/
  // useEffect(calculateWinner, [player, cpu]);

  /******  HANDLERS  ******/ 
  // Will work for both open and close of rules comp
  const handleShowRules = (e) => {
    setShowRules(r => !r);
  }

  const handleChoice = async (e, playerThrow) => {
    const playerUpdate = player;

    playerUpdate.choice = playerThrow;
    setPlayer(playerUpdate);

    const cpuThrow = randomCPUThrow();
    const cpuUpdate = cpu;

    cpuUpdate.choice = cpuThrow;
    setCpu(cpuUpdate);

    await calculateWinner();
  }

  const resetGame = (e) => {
    setPlayer(initialState);
    setCpu(initialState);
    setWinner(0);
  }

 const resetThrows = (e) => {
    setWinner(0);
    setPlayer(p => ({
      choice: null,
      score: p.score
    }));
    setCpu(c => ({
      choice: null,
      score: c.score
    }));
  }

  return (
    <div className="App">
      <Score 
        player={player.score}
        cpu={cpu.score}
      />    
      <Game 
        throws={throws}
        player={player}
        cpu={cpu}
        winner={winner}
        resetGame={resetGame}
        resetThrows={resetThrows}
        handleChoice={handleChoice}
      />

      {
        showRules ? <Rules />
        : <button onClick={handleShowRules}>Rules</button>
      }
      
    </div>
  );
}

export default App;
