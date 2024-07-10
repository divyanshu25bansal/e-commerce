import React from 'react'
import './Sign_in.css'
const Sign_in = () => {
  return (
    <div className="account-page">
        <div className="sign-in">
          <div className="sign-in-title">
          <h1>Already Have an Account?</h1>
          <p>Sign In with your registered Email</p>
          </div>
          <form className="sign-in-details">
            <input type="email" placeholder='Email' name='email' required/>
            <input type="password"  placeholder='Password' required/>
          <div className="sign-in-btn">
            <button type='submit'>SIGN IN</button>
            <button type='google'>GOOGLE SIGN IN</button>
          </div>
          </form>
        </div>
        <div className="create-account">
          <div className="create-title">
            <h1>Don't have an Account</h1>
            <p>Create your new Account here with your Email</p>
          </div>
          <div className="create-details">
            <input type="text" placeholder='Display Name'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input type="password" placeholder='Confirm Password'/>
          </div>
          <button>SIGN UP</button>
        </div>
    </div>
  )
}

export default Sign_in