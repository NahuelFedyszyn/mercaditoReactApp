import { useState } from "react";
import LetterContainer from "../LetterContainer/LetterContainer";


export default function MainContainer(){

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

    const [selected,setSelected] = useState(ABC[1]);
    let index = 0;
    function changeLetter(){
        if (index==26){
            setSelected(ABC[index]);
            index=0;
        }
        else{
            setSelected(ABC[index]);
            index++;
        }
        console.log(selected)
    }

    //setInterval(changeLetter,2000)

/*
    const [rotate,setRotate] = useState(false)
    const [selected, setSelected] = useState("A")

    let letter = "A"



    const handleClick = () => {
        if(rotate){
            clearInterval;
            setRotate(false);
            setSelected(letter);
        }
        else{
            setInterval(changeLetter(),500)
        }
    }
*/
    
    
    return(
        <div className="MainContainer">
            <LetterContainer  letter={selected} />
        </div>
    )
}