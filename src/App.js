
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
  const [timerWidth, setTimerWidth] = useState(0.1);
  
  useEffect(() => {
    if(isRunning){
      setTimerWidth(0.00)
      const interval = setInterval(() => {
        if(stateIndex<ABC.length-1){
          setStateIndex(stateIndex + 1);
        }
        else{
          setStateIndex(0);
        }
        setSelected(ABC[stateIndex])
        //console.log(`${stateIndex}  --  ${ABC[stateIndex]}`)
      }, 10);
      
      return () => clearInterval(interval);
    }
  });

  //Este useEffect se usaba para un timer, despues me acorde que el mercadito no se juega con un timer...
  /*useEffect(() => {
    if(!isRunning && timerWidth<99.9){
      const interval = setInterval(() => {
        setTimerWidth(timerWidth + 0.10)
      }, 10);
      
      return () => clearInterval(interval);
    }
  });
*/

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

  let timerStyle = {
    width:`${timerWidth}%`
  }


  return (
    <>
      <div>
        <div className="MainContainer">
          <button onClick={handleClick} className="LetterContainer">
            <span>{selected}</span>
          </button>
        </div>
      </div>


      {/* El div para el timer que al final no se uso */}
      {/*<div className="timerBox">
        <div className="timer" style={timerStyle}></div>
  </div>*/}
      
    </>
  );
}

export default App;
