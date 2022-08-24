import React, { useState } from "react";
import data from "./Dataforface";
import Str from "./Str";
import Left_items from "./Left_container_item";
import List_design from "./List_design";
import Logo from "./Logo";
import Header from "./Header";

function Facial() {
  const [active, setActive] = useState(0);

  const handleClick = (e) => {
    console.log(e);
    setActive(e);
  };


  let arr = []
  
  if(data.length){
    arr = data.map((e) => {
      if(e.Name == "Unknown") return;
      return <Str Name={e.Name} RollNO={e.RollNO}></Str>;
    });
  }
   
  
  

  let i = 0;
  const left_items = Left_items.map((e) => {
    return (
      <List_design
        PlaceHolder={e}
        id={i++}
        active={active}
        handleClick={handleClick}
      ></List_design>
    );
  });

  let j = 0;
  const logo_design = Logo.map((e) => {
    return (
      <div
        className={`container_logo${active == j ? " active" : ""}`}
        onClick={(event) => {
          handleClick(event.target.id);
        }}
      >
        <i className={e} id={j++}></i>
      </div>
    );
  });

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="left">
          <div className="upper">
            <div className="upper-left">
              <i class="fa fa-graduation-cap" aria-hidden="true"></i>
            </div>
            <div className="upper-right">
              <p>ATTENDANCE</p>
            </div>
          </div>
          <div className="lower">
            <div className="logo">{logo_design}</div>
            <div className="menu">
              <ul>{left_items}</ul>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right_items">
            {data.length  ? arr : "MASS BUNK"}
          </div>
        </div>
      </div>
    </>
  );
}

export default Facial;
