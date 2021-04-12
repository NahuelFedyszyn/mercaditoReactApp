
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

/** FUNCTIONS

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
  let index = 0;
  
  useEffect(() => {
    if(isRunning){
      const interval = setInterval(() => {
        if(index<ABC.length-1){
          index++;
        }
        else{
          index = 0;
        }
        console.log(`${index}  --  ${ABC[index]}`)
      }, 500);
      return () => clearInterval(interval);
    }
  });

  function handleClick(){
    if(!isRunning){
      alert("Running");
      setIsRunning(true);
      
    }
    else{
      alert("Stopped");
      setIsRunning(false);
      
    }

    setSelected(ABC[index])

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
