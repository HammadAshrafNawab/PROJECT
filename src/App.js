import  ImageUpload  from "./home";
import React from "react"
import './App.css'

import MAIN from './component/MAIN'
import Fire from './fire'
import Login from './component/Login'
import {useState , useEffect} from 'react'

function App() {
  const [user,setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError,setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState('');

const clearInputs = () =>
{
  setEmail('');
  setPassword('');

}
const passwordmail = ()=>
{
  
Fire.auth().sendPasswordResetEmail(email)
  .then(() => {
    // Password reset email sent!
    alert("Password reset email sent!")
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
const clearErrors = () =>
{
  setEmailError('');
  setPasswordError('');
  
}




const handleLogin =()=>
{
clearErrors();
Fire
.auth()
.signInWithEmailAndPassword(email,password) 
.then(() => {
  // Password reset email sent!
  alert("Successful Login")
  // ..
})

.catch(err =>{
switch(err.code){
  case "auth/Invalid-email":
    case "auth/user-disabled":
      case "auth/usernotfound":
        setEmailError(err.message);
        break;
        case "auth/wrong-password":
          setPassword(err.message);
          break;
          
}
})
}



const handleSignup =()=>
{
clearErrors();
Fire
.auth()
.createUserWithEmailAndPassword(email,password)
.then(() => {
  // Password reset email sent!
  alert("Successful SignUp")
  // ..
})
.catch(err =>{
switch(err.code){
  case "auth/email-already-in-use":
    case "auth/invalid-email":
      
        setEmailError(err.message);
        break;
        case "auth/weak-password":
          setPassword(err.message);
          break;

}
})
}

const handleLogout = () =>
{
  Fire.auth().signOut();
};

const authListener = () =>
{
  Fire.auth().onAuthStateChanged((user) => {
       if (user){
         clearInputs();
         setUser(user);
       }
       else {
         setUser('');
       }
  })
};

useEffect(() => {
  authListener();
  
}, [])


  return(
    <div className="App">
      
       {
      user ?(<ImageUpload handleLogout={handleLogout} />  )
        :
        ( <Login 
         email={email}
         password={password} 
         setEmail={setEmail} 
         setPassword={setPassword}  
         handleLogin={handleLogin} 
         handleLogin={handleSignup}
         hasAccount={hasAccount}
         setHasAccount={setHasAccount}
         emailError={emailError}
         passwordError={passwordError}
         passwordmail={passwordmail}
         />)
    
    }  
  
   
    </div>
  ) //<ImageUpload />
  

}
export default App;
