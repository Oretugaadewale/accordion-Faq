import React from 'react'
import {useState} from "react"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title, info}) => {
    const [details, setShowDetails] = useState(false);
     //it means details should return the first operands if its false
  return (
    <article className='question'>
      <header>
      <h4>{title}</h4>
      </header>
      <button className='btn' onClick={()=>setShowDetails(!details)}>{details ? < AiOutlineMinus/> : <AiOutlinePlus/> }</button>
      {details && <p>{info}</p>}
    </article>
  )
}

export default Question;
