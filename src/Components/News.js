import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner.js';
import PropTypes from 'prop-types'

export class News extends Component {
    static defaultProps = {
        country:"in",
        pageSize:6,
        category:"general"
    };
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    };
    constructor(){
        super();
        console.log('Hello');
        this.state = {
            articles:[],
            loading:false,
            page: 1
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading: true});
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({articles :  parseddata.articles,totalResults : parseddata.totalResults,loading: false});
    }
    handlePrevClick = async () => {
        console.log("prev click");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({loading: true});
        let data = await fetch(url);
        let parseddata = await data.json();
        console.log(parseddata);
        this.setState({
            page: this.state.page - 1,
            articles :  parseddata.articles,
            loading: false
        });
        
    }
    handleNextClick = async () => {
        console.log("next click");
        if(!(this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize))){
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({loading: true});
            let data = await fetch(url);
            let parseddata = await data.json();
            console.log(parseddata);
            this.setState({
                page: this.state.page + 1,
                articles :  parseddata.articles,
                loading: false
            }); 
        }
        
    }
  render() {
    console.log(typeof(this.state.articles[0]));
    return (
        <div className="container my-3">
            <h1 className='text-center' style={{margin : '30px'}}>NewsGo - Top Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className="row row-gap-3">
            {!this.state.loading && this.state.articles.map((ele)=>{
                    return (
                        <div className="col-md-4" key={ele.url}>
                            <NewsItem title={ele.title?ele.title:""} description={ele.description?ele.description.slice(0,100)+"...":""} imageUrl={ele.urlToImage} newsUrl={ele.url} author={!ele.author?"Unknown" : ele.author} date={ele.publishedAt} source={ele.source.name}/>
                        </div>
                    )
                })
            }                    
            </div>

            <div className="container d-flex justify-content-between" style={{margin :'auto'}}>
                <button disabled={this.state.page<=1}type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous </button>
                <button disabled={this.state.page + 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr; </button>
            </div>
        </div>
    )
  }
}

export default News
