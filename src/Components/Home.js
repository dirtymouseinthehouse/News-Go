import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './Home.css';
import { Link } from 'react-router-dom';
import Spinner from './Spinner.js';
export class Home extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 3,
    category: "general"
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };
  constructor() {
    super();
    console.log('Hello');
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      isActive: "carousel-item active",
      nActive: "carousel-item"
    }
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);
    this.setState({ articles: parseddata.articles, totalResults: parseddata.totalResults, loading: false });
  }
  style = {
    height: "35vw",
    width: "100%",
    objectFit: "cover"
  };
  render() {
    // const {isActive,nActive} = this.state;
    return (
      <div className='container my-3'>
        <div className='row'>
          <div className='col-md-8 my-5'>
            <div className='mx-auto'>
              {this.state.loading && <Spinner />}
              <div id="carouselExampleDark" className="carousel carousel-dark slide mx-auto" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  {!this.state.loading && this.state.articles.map((ele, i) => {
                    return (
                      <div key={i} active={i === 0} className={i === 0 ? this.state.isActive : this.state.nActive} data-interval='8000'>
                        <a rel="noreferrer" href={ele.url} target="_blank"><img src={!ele.urlToImage?"https://static.foxnews.com/foxnews.com/content/uploads/2018/09/istock-524154682.jpg":ele.urlToImage} className="d-block w-100" alt="..." style={this.style} /></a>
                        <div className="carousel-caption d-none d-md-block">
                          <h5 className='home_title'>{ele.title?ele.title:""}</h5>
                          <p className='home_desc'>{ele.description?ele.description.slice(0,100)+"...":""}</p>
                        </div>
                      </div>
                    )
                  }

                  )
                  }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className='col-md-4 my-5 d-flex justify-content-center'>
            <div className="align-self-center home_div" style={{ width: '300px' }}>
              <p className='home_text'>Get Latest news at your door step</p>
              <Link to="/general"><button type="button" className="btn btn-outline-dark">Get Started</button></Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home