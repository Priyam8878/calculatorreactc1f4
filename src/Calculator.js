import React , {useState} from "react";

const Calculator = ()=>{
const [input1 , setInput1] = useState("")
const [input2 , setInput2 ]= useState("")
const [error ,  setError] = useState(null)
const [result , setResult] = useState(null)
// for validation
const validInput = ()=>{
    if(input1 == ""|| input2 == "" || isNaN(input1) || isNaN(input2)){
       setError("Please enter the valid number")
       return false
    }
    setError(null)
    return true
};

const add = ()=>{
    if(validInput){
        setResult(parseFloat(input1) + parseFloat(input2));
    }
}

const subtract = ()=>{
    if(validInput){
        setResult(parseFloat(input1) - parseFloat(input2));
    }
}

const multiplication = ()=>{
    if(validInput){
        setResult(parseFloat(input1) * parseFloat(input2));
    }
}

const division = ()=>{
    if(validInput){
        if(input2 = "0"){
            setError("cant devide the number with zero")
        }
        setResult(parseFloat(input1) / parseFloat(input2));
    }
}

return (
    <div className="calculator">
        <h1>React Calculator</h1>
       <input type="text" value={input1} onChange={(e)=>setInput1(e.target.value) } />
       <input type="text" value={input2} onChange={(e)=>setInput2(e.target.value) } />
       <div>
            <button onClick={add}>+</button>
            <button onClick={subtract}>-</button>
            <button onClick={multiplication}>*</button>
            <button onClick={division}>/</button>
       </div>
       {(error && <div className="error">{error}</div>)}
       {(result != null &&<div className="result">result:{result}</div>)}
    </div>
)

  
}


export default Calculator