import React,{useState} from "react";
import SignUp from "./SignUp.js";

import "./Login.css";
import {auth} from "../../firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";
function LoginPage(props) {
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [isNew,setIsNew]=useState(false)

    const submitHandler= async (event)=>{
        event.preventDefault();
        if(username==="" || password===""){alert("Please fill all the fields")}
        else{
        try{
            const  User= await signInWithEmailAndPassword(
                auth,
                username,
                password,
            )
           props.userID(auth.currentUser.email)
            props.flag();
            }
        catch(error){
            console.log(error)
        }
       
    }

    }

    const passwordHandler=(event)=>{
        setPassword(event.target.value)
    }
    const userHandler=(event)=>{
        setUsername(event.target.value)
    }
    const newHandler=()=>{
        setIsNew(true);
    }

    if(!isNew){
    return (
        <div className="login-container">
            <span className="login-heading">LOGIN</span>
            <form className="login-form"  onSubmit={submitHandler}>
                <div className="login-form__styling"><label>Username</label>
                <input type="text" onChange={userHandler} value={username}/></div>
                <div className="login-form__styling"><label>Password</label>
                <input type="password" onChange={passwordHandler} value={password}/></div>
                <button className="btn">Login</button>
            </form>
            <div className="footer"><span>Don't have an account?</span><span><button onClick={newHandler} className="link"> Sign up</button></span></div>
        </div>
    )}
    else{
        return(
        <SignUp/>
        )
    }
  }
  
  export default LoginPage;