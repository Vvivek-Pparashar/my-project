import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

const newData = data.map(ele => {
  return{
    ...ele,
    status: false
  }
})



function App() {
  const toggle = (id)=>{
    const newData = form.map(ele =>{
      if(ele.id == id){
        return{
          ...ele,
          status: !ele.status
        }
      }else{
        return { ...ele}
      }
    })

    setForm(newData)
  }


  const [form , setForm] = useState(newData)

  const items = form.map(ele=>{
    return (
      <SingleQuestion key={ele.id}{...ele} toggle = {toggle}/>
    )
  })

  


  return(
    <main>
      <div className='container'>
          <h3>Questions And Answers About Login</h3>
        <section className='info'>
          {items}
        </section>
      </div>
    </main>
  )
}

export default App;
