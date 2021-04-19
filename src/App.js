
import { useEffect, useState } from 'react';
import './App.css';

const ABC = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]


function App() {
  
  const [stateIndex, setStateIndex] = useState(0);
  const [selected, setSelected] = useState(ABC[stateIndex]);
  const [isRunning, setIsRunning] = useState(false);
  
  
  useEffect(() => {
    if(isRunning){
      
      const interval = setInterval(() => {
        if(stateIndex<ABC.length-1){
          setStateIndex(stateIndex + 1);
        }
        else{
          setStateIndex(0);
        }
        setSelected(ABC[stateIndex])
        
      }, 10);
      
      return () => clearInterval(interval);
    }
  });

  return (
    
      <div>
        <div className="MainContainer">
          <button onClick={()=>{setIsRunning(!isRunning)}} className="LetterContainer">
            <span>{selected}</span>
          </button>
        </div>
      </div>
  );
}

export default App;
