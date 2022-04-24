import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
  const [loading, setLoading] = useState(true);
  const [tour, setTour] = useState([]);

  const removeTour = (id)=>{
    const newTour = tour.filter(t=>t.id !== id)
    setTour(newTour);
  }

  const vivek = async () => {
    console.log("vivek");

    const url = "https://course-api.com/react-tours-project";

    try {
      let data = await fetch(url);
      let Data = await data.json();
      setLoading(false);
      setTour(Data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    vivek();
  }, []);



    
    if(tour.length !== 0){
      return(
        <>
        {loading && <Loading />}
        {!loading && <main><Tours tours = {tour} removeTour = {removeTour}/></main>}
        </>
      )
    }else{
      return (
        <section>
          <div class="title">
            <h2>experience</h2>
            <div class="underline"></div>
          </div>
          <div className='title'>
            <h2>no tours left</h2>
            <button className='btn' onClick={() => vivek()}>
              refresh
            </button>
          </div>
        </section>
      )
    }
      
}

export default App;
