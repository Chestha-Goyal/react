import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor() {
    super(); 
    // console.log("Hello I am a constructor from new component");
    this.state = {
      articles: [],
      loading: false
    }
 }
//yeah ik life cycle hota hai 
// render ke bd run hota hai

// async function apni body ke andr kuch function ke resolve hona ka await kr skta hai
async componentDidMount(){
  // console.log("cdm");
  let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c4ba04d1a84e4bae9c49f950721a3ab1"
  let data = await fetch(url);
  let parsedData = await data.json()
  console.log(parsedData);
  this.setState({articles: parsedData.articles})
 }

  render() {
    console.log("render")
    return (
      <div className="container my-4">
        <h1>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key={element.url}> 
              <NewsItem title={element.title?element.title.slice(0, 45):" "} description={element.description?element.description.slice(0, 88):" "} imageUrl={element.urlToImage} newsUrl={element.url}/>
            </div>
          })}
        </div>
      </div>
    )
  }  
}

export default News