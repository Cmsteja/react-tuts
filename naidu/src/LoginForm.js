import React,{useState} from 'react'
import './Loginform.css'

const LoginForm =() =>{
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    
    const[mail,setMail] = useState("");
  
    const[number,setNumber] = useState("");
  
    const handleChange = (event) => {
      if(event.target.name === "firstName"){
        setFirstName(event.target.value);
  
      }
      if(event.target.name ==="lastName"){
        setLastName(event.target.value);
  
      }
      if(event.target.name === "mail"){
        setMail(event.target.value);
  
      }
      if(event.target.name === "number"){
        setNumber(event.target.value);
  
      }
    }
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(firstName);
      console.log(lastName);
      console.log(mail);
      console.log(number);
    }
  return (
   <form onSubmit={handleSubmit}>
                  
               <label> First name</label>
               <input type="text" name='firstName'  value={firstName} onChange={handleChange}  required/>
               <label> Last name:</label>
               <input type="text" name='lastName'  value={lastName} onChange={handleChange}  />
               <label> mail id:</label>
               <input type="email" name='mail' value={mail} onChange={handleChange}  required />
               <label> phone no:</label>
               <input type="text" name='number'  value={number} onChange={handleChange}  />
              
               <button type='submit' className='submit'>Submit</button>
   </form>
  )
}

export default LoginForm
