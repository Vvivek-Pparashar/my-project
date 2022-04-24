import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [index, setIndex] = useState(0);
  const [Data, setData] = useState(data[0]);

  const toggleleft = ()=>{
    let x = index;
    if(x === 0){
      x = data.length - 1;
      setIndex(x);
    }else{
      x--;
      setIndex(x);
    }

    setData(data[x]);
  }

  const toggleright = ()=>{
    let x = index;
    if(index === data.length - 1){
      x = 0;
      setIndex(x);
    }else{
      x++;
      setIndex(x);
    }

    setData(data[x]);
  }

  useEffect(()=>{
    
    let slider = setInterval(()=>{
      let x = index;
      if(index === data.length - 1){
        x = 0;
        setIndex(x);
      }else{
        x++;
        setIndex(x);
      }
  
      setData(data[x]);
    }, 10000/2)
  
    return ()=>clearInterval(slider)
  }, [index])
  
  return(
    <section className="section">
      <div className="title">
        <h2><span>/</span>reviews</h2>
      </div>
      <div className="section-center">
        <article className="activeSlide">
          <img src={Data.image} alt="maria ferguson" className="person-img"/>
          <h4>{Data.name}</h4>
          <p className="title">{Data.title}</p>
          <p className="text">{Data.quote}</p>
           <FaQuoteRight className="icon"/>
        </article>
        <button className='prev' onClick={toggleleft}><FiChevronLeft/></button>
        <button className='next' onClick={toggleright}><FiChevronRight/></button>
      </div>
    </section>
  )
}

export default App;
