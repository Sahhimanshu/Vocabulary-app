import React from 'react';
import "./WordElement.css"
import Card from "../../UI/Card";

function WordElement(props){
    const deleteHandler=()=>{
    props.Delete(props.WordMeaning.id)
    }
   
    return (
        <Card className="word-element">
            <div className='word-meaning'>
                <div className="word">{props.WordMeaning.Word} : </div>
                <div className="meaning">{props.WordMeaning.Meaning}</div>
                <div className='sp'></div>
                <button className='btn-delete' onClick={deleteHandler}>Delete</button>
                </div>
        </Card>
    )
}

export default WordElement;