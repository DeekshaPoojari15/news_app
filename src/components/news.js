import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './news.css';

class News extends Component {
    constructor(props){
        super(props);
        this.state = {
            articles:[]          
        }
    }

    componentDidMount(){ 
        fetch('https://newsapi.org/v2/everything?q=apple&from=2021-10-18&to=2021-10-18&sortBy=popularity&apiKey=7fe47db5a2fb486c8eff4447b3877db6')
        .then( (response) => {
          return response.json();
        })
        .then( (myjson) => {
                console.log(myjson)
                this.setState({
                    articles : myjson.articles
                });
            }
        )
    }

    render() {
        console.log(this.state);
        return (
          <div class="d-flex flex-wrap justify-content-center align-items-rows ">
          {this.state.articles.map((item,index) => {
            return(
              <div className="News-item">
              <h3 className="App"> {item.title}</h3><br />
              <img src={item.urlToImage} alt=" " style={{width:'25vw'}} />
              <br/>
              <p>{item.description}</p>
              <a href={item.url}>Read More</a>
              <br/>
              </div>
            );
          })}
          </div>
        ); 
      
    }
  }
  
  export default News;
      