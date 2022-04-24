import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id, title, info, status, toggle}) => {
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={()=>toggle(id)}>
          {status ? <AiOutlinePlus/> : <AiOutlineMinus/>}
        </button>
      </header>
      
      {status &&<p>{info}</p>}
    </article>
  )
};

export default Question;
