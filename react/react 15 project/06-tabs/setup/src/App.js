import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
  const [jobs, setJobs] = useState([]);
  const [indexi, setIndexi] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetching = async ()=>{

    const url = 'https://course-api.com/react-tabs-project';

    const request = await fetch(url);
    const data = await request.json();

    setJobs(data);
    setLoading(false);
  }

  useEffect(()=>{
    fetching();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }

  console.log(jobs[indexi]);
  const {company, dates, duties, title } = jobs[indexi];

  return(
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setIndexi(index)}
                className={`job-btn ${index === indexi && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((p, index)=>{
            return(
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{p}</p>
              </div>
            )
          })}

        </article>
      </div>
      <button type="button" className="btn">
        more info
      </button>
    </section>
  )
  
}


export default App;
