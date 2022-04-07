import React from "react"

export default function Card(props) {
    return (
        <div className="card">
        <img src="https://images.unsplash.com/photo-1647136398366-160694959b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="vivek" className="card--image" />
        <div className="card--stats">
            <span>5.0</span>
            <span className="gray">(6) • </span>
            <span className="gray">USA</span>
        </div>
        <p>{props.heading}</p>
        <p><span className="bold">From $136</span> / person</p>
    </div>
    )
}