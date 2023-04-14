
import React,{useState} from "react";
import './App.css';
import LoginPage from "./Components/Login/Login.js";

import Dictionary from "./Components/Words/main";

function App() {
  const [loggedIn,setLoggedin]=useState(false)
  const [userEmail,setUser]=useState("")

  const flag=()=>{
      setLoggedin(true)
  }
  const userID=(email)=>{
     setUser(email)
  }
    
  return (
  <>
  {!loggedIn && <LoginPage flag={flag} userID={userID}/>}
  {loggedIn && <Dictionary userEmail={userEmail}/>}
  </>
    );
}

export default App;
