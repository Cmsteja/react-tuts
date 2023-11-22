import React from 'react'
import './Childform.css';
import { useState } from 'react';
function ChildForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    // console.log(event.target.name, event.target.value);
    if (event.target.name == "email") {
      setEmail(event.target.value);
    }
    if (event.target.name == "password") {

      setPassword(event.target.value);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);

  }
  return (
    <div className='wrapper'>
      <div className='login-box'>
        <form action='' onSubmit={handleSubmit} className="formContent" >

          <h2>Login</h2>


          <div className="input-box">
            <span className="icon">
              <ion-icon name="mail"></ion-icon>
            </span>
            <input type="email" name="email" value={email} onChange={handleChange} />
            <label>Email</label>
          </div>

          <div className="input-box">
            <span className="icon">
              <ion-icon name="lock-closed"></ion-icon>
            </span>
            <input type="password" name="password" value={password} onChange={handleChange} />
            <label>Password</label>
          </div>
          <div className="remember-forgot">
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>

          <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>





        </form>
      </div>
    </div>




  )
}

export default ChildForm;