import React, { useState, useRef } from 'react';
import data from './data';
function App() {
  
   const [time, setTime] = useState(0);
  const inputRef = useRef(null);

  const handle = (event)=>{
    event.preventDefault();
    console.log("vivek is gr8")
    setTime(inputRef.current.value)
  }

  const vivek = [];
  if(time < 0) vivek.push(<h1>input any positive number</h1>)
  for(let i = 0; i<time; i++){
    vivek.push(<p>{data[i%13]}</p>)
  }
  
  return (
    <>
    <section class="section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form class="lorem-form">
          <label for="amount">paragraphs:</label>
          <input type="number" name="amount" id="amount" ref={inputRef}/>
          <button class="btn" onClick={handle}>generate</button>
        </form>
        <article class="lorem-text">
            {vivek}
        </article>
    </section>
    </>
    )
}

export default App;
