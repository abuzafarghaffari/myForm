import {useState} from 'react';
const SimpleFormTwo = ()=>{
const [enterName, setEnterName] = useState("");
const [isEnterNameTouched, setIsEnterNameTouched] = useState(false);
const isEnterNameValid = enterName.trim() !== "";
const isEnterNameInvalid = !isEnterNameValid && isEnterNameTouched;

const [enteremail, setEnterEmail] = useState("");
const [isenteremailTouched, setEnterEmailTouched] = useState(false);
const IsEnterMailValid = enteremail.trim() !== "";
const isEnterEmailIsInvalid = !IsEnterMailValid && isenteremailTouched;

const inputHandler = (event)=>{
    setEnterName(event.target.value);
}

const nameBlurHandler =()=>{
    setIsEnterNameTouched(true);
}

const emailHandler =(event)=>{
    setEnterEmail(event.target.value);
}

const emaiBlurHandler= ()=>{
    setEnterEmailTouched(true);
}

let formIsValid = false;

  
if(isEnterNameValid && IsEnterMailValid){
    formIsValid = true;
    } 

const sumbitHandler =(event)=>{
    event.preventDefault();
setIsEnterNameTouched(true);
setEnterEmailTouched(true);

if(!IsEnterMailValid && !IsEnterMailValid){
    return;
}
setEnterName("");
setEnterEmail("");

setIsEnterNameTouched(false);
setEnterEmailTouched(false);
}

return(<>
    <form onSubmit={sumbitHandler}>
        <div>
            <label htmlFor="name">Enter User Name</label>
            <input type="text" id="name" onChange={inputHandler} value ={enterName} onBlur={nameBlurHandler}/>
        </div>
        {isEnterNameInvalid && <p>Enter name is Invalid</p>}
        <div>
        <label htmlFor="email">Enter Email</label>
            <input type="text" id="email" onChange={emailHandler} value ={enteremail} onBlur={emaiBlurHandler}/>
        </div>
        {isEnterEmailIsInvalid && <p>Email is invalid</p>}
        <button type="submit" disabled ={!formIsValid}>Submit</button>
    </form>
</>)

}

export default SimpleFormTwo;