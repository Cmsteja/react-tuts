import React from 'react'
import'./Form.css';
function Form() {
  return (
    <>
    <div className='signupPage'>
        {/* <div className="main_img"> 
            <img src="image.jpg" alt="" />
        </div> */}
        <div className="form">
            <h1>Sign Up</h1>
            
            <div className="formContent">
                <div> 
                <label htmlFor="F_Name">First name:</label> <br />
                <input type="text" />
                </div>
                <div> 
                <label htmlFor="L_Name">Last name:</label><br />
                <input type="text" />
                </div>
                <div> 
                <label htmlFor="e-id">E-Mail:</label><br />
                <input type="email" />
                </div>
                <div> 
                <label htmlFor="number">Contact no:</label><br />
                <input type="number" maxlength="10"/>
                </div>
                
                
            </div>
            <button className='submit'> Submit</button>
        </div>




    </div>
    </>
  )
}

export default Form
