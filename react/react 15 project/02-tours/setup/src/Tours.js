import React from 'react';
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {
  console.log("vivek is great", tours)
  const vivek = tours.map(tour=>{
    return <Tour key={tour.id} {...tour} removeTour = {removeTour}/>
  })
  
  return(
    <section>
      <div className='title'>
        <h2>ours tour</h2>
        <div className='underline'></div>
      </div>
      <div>
        {vivek}
      </div>
    </section>
  )
};

export default Tours;
