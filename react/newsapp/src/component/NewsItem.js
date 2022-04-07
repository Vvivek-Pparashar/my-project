import React, { Component } from "react";

export class NewsItem extends Component {

  render() {
    let {title, description, imageurl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div  className="card" style={{width: "18rem"}}>
          <img src= {imageurl}  className="card-img-top"/>
          <div  className="card-body">
            <h4 className="card-title">{title}</h4>
            <p  className="card-text">{description}</p>
            <a href = {newsUrl} target = "_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
