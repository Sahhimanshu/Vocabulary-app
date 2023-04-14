import './Card.css';
import React from 'react';

const Card = (props)=> {
    const classes="card "+props.className;
    return(
        <div className='cardContainer'>
        <div className={classes}>{props.children}</div>
        </div>
    )
}

export default Card