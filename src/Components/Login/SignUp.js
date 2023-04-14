import {React, useState} from 'react';
import {db,auth} from "../../firebase-config";
import {createUserWithEmailAndPassword } from "firebase/auth";
import { doc,deleteDoc } from 'firebase/firestore';

import "./SignUp.css";
import { addDoc, collection, setDoc,createCollection} from 'firebase/firestore';
import { async } from '@firebase/util';

export default function SignUp(props) {
    const [signUpEmail,setEmail]=useState("")
    const [signUpPassword,setPassword]=useState("")
    const [signedUp,setSignedUp]=useState(false)

    const emailHandler=(event)=>{
        setEmail(event.target.value)
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value)
    }  
    const errorFun=async(msg)=>{
        const userDoc=doc(db,"Users/",signUpEmail)
       await deleteDoc(userDoc);
        alert(msg)
        setSignedUp(false)
    }
    const submitHandler= (event)=>{
        event.preventDefault()
        const reference=collection(db,"Users/"+signUpEmail.toString()+"/myWords");  
        addDoc(reference,{Word:"WORD HERE",Meaning:"MEANING WILL APPEAR HERE"})
       createUserWithEmailAndPassword(auth, signUpEmail, signUpPassword)
        .then((res) => {
            
            alert("You have successfully signed up!");
            console.log(signUpEmail);
 
        setSignedUp(true) 
         })
        .catch(err => errorFun(err.message))
        
        

    }
    if(signedUp==false)
    return (
    <div className="signUp-container">
        <h3>Sign Up!</h3>
        <div className='signUp-form'>
            <form className='signUp' onSubmit={submitHandler}>
                <label className='label-signUp'>Enter your email </label>
                <input type="email" onChange={emailHandler} className="signUp-input" value={signUpEmail}/>
                    <label className='label-signUp'>Enter password </label>
                <input type="password" onChange={passwordHandler} className="signUp-input"value={signUpPassword}/>
                <button>Sign Up</button>
            </form>
        </div>
    </div>
  )
  else{
    
    window.location.reload(false)
    return(<></>)
  }
}

