import React, { Component } from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {

  constructor() {
    super();
    console.log("Hllo i am a constructor");

    this.state = {
      articles: [],
      loading : false,
      page : 1
      
    };
  }

  async componentDidMount(){
    this.setState({
      loading: true
    })


    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aa1a7a632e7d4353943296a25118ceef&page=${this.state.page }`;

    let data = await fetch(url);
    let parsedData = await data.json();

    console.log(parsedData);
    this.setState({articles : parsedData.articles,
                    loading : false})
  }

  handlePreviousClick = async () =>{
    console.log("vivek")

    this.setState({
      loading: true
    })

    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aa1a7a632e7d4353943296a25118ceef&page=${this.state.page - 1}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    
      this.setState({
        articles : parsedData.articles,
        loading:false,
        page : this.state.page - 1
      })
    
  }

  handleNextClick = async () =>{
    console.log("parashar");

    this.setState({
      loading: true
    })
 
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aa1a7a632e7d4353943296a25118ceef&page=${this.state.page + 1}`;

    let data = await fetch(url);
    let parsedData = await data.json();

      this.setState({
        articles : parsedData.articles,
        loading:false,
        page : this.state.page + 1
      })

    console.log(this.state.page);
  }

  render() {
    return (
      <div className="container my-5">
        <h1>NewsMonkey - Top headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key = {element.url}>
                      <NewsItem
                        title= {element.title}
                        description = {element.description}
                        imageurl = {element.urlToImage}
                        newsUrl={element.url}
                      />
                    </div>
          })}
        </div>

        <div className="conatiner d-flex justify-content-between my-5">
        <button disabled = {this.state.page <= 1} type="button" class="btn btn-dark py-3 px-4" onClick={this.handlePreviousClick}>&larr;  Previous</button>
        <button type="button" class="btn btn-dark py-3 px-4" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
