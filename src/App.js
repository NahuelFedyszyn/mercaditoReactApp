
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


/*
------------------------------------------
Esta funcion se usa para mover el indice del array ABC
Necesita ser llamada de forma recurrente (usando setInterval),
pero solo si isRunning es igual a true


function move(){
  if (stateIndex<ABC.length){
    setStateIndex(stateIndex + 1);
  }
  else{
    setStateIndex(0)
  }
}
-------------------------------------------



 */


//Componente ----------------------
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
        console.log(`${stateIndex}  --  ${ABC[stateIndex]}`)
      }, 10);
      
      return () => clearInterval(interval);
    }
  });

  function handleClick(){
    if(!isRunning){
      //alert("Running");
      setIsRunning(true);
      
    }
    else{
      //alert("Stopped");
      setIsRunning(false);
      
    }
    
    

  }



  return (
    <>
      <div>
        <div className="MainContainer">
          <div className="LetterContainer">
            <span>{selected}</span>
          </div>
        </div>
      </div>
      <div className="MainButtonContainer">
        <button onClick={handleClick}>START/STOP</button>
      </div>
    </>
  );
}

export default App;
