import React from "react";

function Design({ PlaceHolder, id, active, handleClick }) {
  const name = PlaceHolder.toLowerCase();
  return (
    <div
      className={`list_design${active == id ? " active" : ""}`}
      id={id}
      onClick={() => {
        console.log(id);
        handleClick(id);
      }}
    >
      <li>{PlaceHolder}</li>
    </div>
  );
}

export default Design;
