import React from 'react'
import '../App.css'

function Login(props) {
const {email,
   setEmail,
   password,
   setPassword,
   handleLogin,
   handleSignup,
   hasAccount,
   setHasAccount,
   emailError,
   passwordError,passwordmail} = props

    return (
        <div className="login">
           <div className="loginContainer"> 
              <label>USERNAME</label>
            <input type="text"
             autoFocus
             required
             value={email}
             onChange={(e)=> setEmail(e.target.value)} 
              ></input>
              <p className="errorMsg">{emailError}</p>
           
              <label>PASSWORD</label>
            <input type="password"
             autoFocus
             required
             value={password}
             onChange={(e)=> setPassword(e.target.value)} 
              ></input>
              <p className="errorMsg">{passwordError}</p>
              <div className="btnContainer">
{hasAccount ? 
   <>
          <button onClick={handleLogin}>Sign In </button>
          <p>Don't have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign Up</span></p>
   </>
    :    <> 
      <button onClick={handleSignup}>Sign Up </button>
      <p>Have an account ? <span onClick={()=> setHasAccount(!hasAccount)}>Sign In</span></p>
</>}
<button onClick={passwordmail}>Forget password </button>
      
                  
              </div>
           </div>

        </div>
    )
}

export default Login
