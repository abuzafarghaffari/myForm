import {useState} from 'react';
import useInput from '../hooks/use-input';

const SimpleFormThree = ()=>{
const {value:enteredName,
    isValid:enteredIsValid,
hasError:nameInputHasError,
valueChangeHandler:nameChangedHandler,
inputBlurHandler:nameBlurHandler,
reset:resetNameInput
} = useInput(value =>value.trim() !== "");


const [enteremail, setEnterEmail] = useState("");
const [isenteremailTouched, setEnterEmailTouched] = useState(false);
const IsEnterMailValid = enteremail.trim() !== "";
const isEnterEmailIsInvalid = !IsEnterMailValid && isenteremailTouched;



const emailHandler =(event)=>{
    setEnterEmail(event.target.value);
}

const emaiBlurHandler= ()=>{
    setEnterEmailTouched(true);
}

let formIsValid = false;

  
if(enteredIsValid && IsEnterMailValid){
    formIsValid = true;
    } 

const sumbitHandler =(event)=>{
    event.preventDefault();

setEnterEmailTouched(true);

if(!IsEnterMailValid && !IsEnterMailValid){
    return;
}
resetNameInput();
setEnterEmail("");


setEnterEmailTouched(false);
}

return(<>
    <form onSubmit={sumbitHandler}>
        <div>
            <label htmlFor="name">Enter User Name</label>
            <input type="text" id="name" onChange={nameChangedHandler} value ={enteredName} onBlur={nameBlurHandler}/>
        </div>
        {nameInputHasError && <p>Enter name is Invalid</p>}
        <div>
        <label htmlFor="email">Enter Email</label>
            <input type="text" id="email" onChange={emailHandler} value ={enteremail} onBlur={emaiBlurHandler}/>
        </div>
        {isEnterEmailIsInvalid && <p>Email is invalid</p>}
        <button type="submit" disabled ={!formIsValid}>Submit</button>
    </form>
</>)

}

export default SimpleFormThree;