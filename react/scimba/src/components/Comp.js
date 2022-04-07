import React from "react";

export default function Comp(props){
    return(
        <div className="contact-card">
                <img src="https://images.unsplash.com/photo-1647136398366-160694959b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="v"/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <p>{props.number}</p>
                </div>
                <div className="info-group">
                    <p>{props.mail}</p>
                </div>
        </div>
    )
}