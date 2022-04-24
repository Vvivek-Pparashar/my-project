import React, { useState } from 'react';

const Tour = ({id, image, info, price, name, removeTour}) => {
  console.log(name)
  const [readMore, setReadMore] = useState(true);

  return <article className='single-tour'>
    <img src={image} alt={name}/>
    <h2>{name}</h2>
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>$ {price}</h4>
      </div>
      <p>
      {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>

    </footer>
    <button className='delete-btn' onClick={()=>removeTour(id)}>i'm not interseted</button>
  </article>
};

export default Tour;
