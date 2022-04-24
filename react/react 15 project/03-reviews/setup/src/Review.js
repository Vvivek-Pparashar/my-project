import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [data, setData] = useState(people[0]);
  const { name, job, image, text } = data;

  const toggleLeft = ()=>{
    let x = data.id - 1; 

    if(x === 0) x = 3;
    else x--;

   setData(people[x]);
  }

  const toggleRight = ()=>{
   let x = data.id - 1;

   if(x === 3) x = 0;
   else x++;
   
   setData(people[x]);
  }

  const randomPerson = ()=>{
    let x = Math.floor((Math.random()*4))

    while(x === data.id -1){
      x = Math.floor((Math.random()*4))
    }

    console.log(x);
    setData(people[x]);
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={toggleLeft}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={toggleRight}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>

  );
};

export default Review;
