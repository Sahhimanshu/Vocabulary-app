import { getDefaultNormalizer } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import Card from '../../UI/Card';
import './FormElement.css';

const FormElement = (props)=>{
    const [Word,wordState]=useState("") 

    const wordHandler=(event)=>{
    wordState(event.target.value)
    }



    const submitHandler=(event)=>{
        event.preventDefault();
        if(Word.trim()==="")
            alert("Please enter the word")
        else{
            try {
                
                URL="https://api.dictionaryapi.dev/api/v2/entries/en/"+Word;
                fetch(URL)
                .then(res=>res.json())
                .then(data=>{
                let Meaning=data[0]['meanings'][0]['definitions'][0]['definition']
                props.onAdd({Word:Word.charAt(0).toLocaleUpperCase()+Word.slice(1),Meaning:Meaning})
                wordState("")
                })
        
               
                }

            catch (error){
                console.log("error detected"+error)
                }
            
        
            }
    }
    return(
        <Card className='form'>
            <form className='form-main' onSubmit={submitHandler}>
                <h1>WELCOME!</h1>
                <label>You can add your favorite words</label>
                <div className='form-blocks'>
                    <input type='text' onChange={wordHandler} value={Word}/>
                <button className='add-btn' >Add</button>
                </div>
            </form>
        </Card>
    )
}

export default FormElement;