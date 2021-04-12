import { useState } from "react";

export default function LetterContainer(props){

    const letterContainerStyle = {
        height:"60vh",
        width:"60vh",
        backgroundColor:"black",
        borderColor:"red",
        borderStyle:"solid",
        borderWidth:"10px",
        borderRadius:"50%",
        color:"white",
        fontSize:"20em"
    }

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

    const [selected,setSelected] = useState(ABC[0]);
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

    return(
        <button onClick={props.handleClick} style={letterContainerStyle}>
            {selected}
        </button>
    )
}