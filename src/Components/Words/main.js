import React,{useState,useEffect} from 'react';
import WordElement from './WordElement';
import FormElement from './FormElement';
import {db} from "../../firebase-config.js";
import { auth } from '../../firebase-config.js';
import {addDoc, collection,getDocs,deleteDoc,doc} from "firebase/firestore";
import { async } from '@firebase/util';




const list=[]
const Dictionary = (props) => {
    
    const [collect,setCollect]=useState(list)
    const dbPath="Users/"+auth.currentUser.email.toString()+"/myWords"
    const userReference1 = collection(db,dbPath)

    const getData = async ()=>{
        const data = await getDocs(userReference1)
       setCollect(data.docs.map((doc)=>({...doc.data(),id: doc.id})))
    };

    const onAdd=async (inp)=>{
        await addDoc(userReference1,inp)
        getData();

        }
    

    const Delete = async(ID)=>{
       const userDoc=doc(db,dbPath,ID)
       await deleteDoc(userDoc);
       getData();
    }
    useEffect(()=>getData(),[])
  

    return (
        <div className='background'>
            
        <FormElement userEmail={props.userEmail} onAdd={onAdd}/>
        {collect.map((Word)=>(
        <WordElement WordMeaning={Word} key={Word.id} Delete={Delete}/>
        ))
        }
        </div>
    )
}

export default Dictionary;