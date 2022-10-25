// optimized  form code

import {useState} from 'react';

const SimpleForm = ()=>{
    const [enterName, setEnterName] = useState("");
 const [enteredNameTouched, setEnteredNameTouched] = useState(false);

const isEnterNameValid = enterName.trim() !== "";
 const nameInputIsInvalid = !isEnterNameValid && enteredNameTouched;
    
//3step- on every keystroke
const inputHandler =(event)=>{
    setEnterName(event.target.value);
}

//2nd step -when input loses focus
const nameInputBlurHandler =(event)=>{
    setEnteredNameTouched(true);

}

//1st step- when form is submit
const submitHandler = (event)=>{
event.preventDefault();

setEnteredNameTouched(true);

if(!isEnterNameValid){
    return;
}


setEnterName("");
setEnteredNameTouched(false);
}



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

export default SimpleForm;