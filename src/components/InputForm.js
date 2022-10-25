// basic code
import {useState} from 'react';

const InputForm = ()=>{
    const [enterName, setEnterName] = useState("");
    const [isEnterNameValid, setIsEnterNameValid] = useState(false);
    const [enteredNameTouched, setEnteredNameTouched] = useState(false);
    
//3step- on every keystroke
const inputHandler =(event)=>{
    setEnterName(event.target.value);

    if(event.target.value !==""){
        setIsEnterNameValid(true);
        
    }
}

//2nd step -when input loses focus
const nameInputBlurHandler =(event)=>{
    setEnteredNameTouched(true);

if(enterName.trim() === ""){
    setIsEnterNameValid(false);
    
    return;
}
}

//1st step- when form is submit
const submitHandler = (event)=>{
event.preventDefault();

setEnteredNameTouched(true);

if(enterName.trim() === ""){
    setIsEnterNameValid(false);
    return;
}

setIsEnterNameValid(true);

}

const nameInputIsInvalid = !isEnterNameValid && enteredNameTouched;

return <>
    <form onSubmit={submitHandler}>
    <div>
        <label htmlFor="name">Enter Name</label>
       <input type="text" id="name" value = {enterName} onChange={inputHandler}
        onBlur ={nameInputBlurHandler}
       />
    </div>
   {nameInputIsInvalid && <p>Input is Empty</p>}
<button type="submit">Submit</button>
    </form>
</>
}

export default InputForm;