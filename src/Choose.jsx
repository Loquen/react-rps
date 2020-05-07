import React from 'react';

function Choose({throws, handleChoice}) {
  return (
    <div>
      {throws.map(t => 
        <div 
          key={t.name}
          onClick={(e) => handleChoice(e, t)}
          className={`throw ${t.className}`}>
          <img src={t.img} alt={t.name}/>
        </div>
      )}
    </div>
  );
}

export default Choose;