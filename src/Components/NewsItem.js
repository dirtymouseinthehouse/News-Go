import React, { Component } from 'react'

export class NewsItem extends Component {
    style={
        height: "15vw",
        width: "100%",
        objectFit: "cover"
    };
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source} = this.props;
        return (
                <div className="card shadow-lg mb-5 bg-body-tertiary rounded">
                    {/* <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left:'95%',zIndex:'1'}}>{source}</span> */}
                    <a rel="noreferrer" href={newsUrl} target="_blank"><img src={!imageUrl?"https://static.foxnews.com/foxnews.com/content/uploads/2018/09/istock-524154682.jpg":imageUrl} className="card-img-top" alt="..."/></a>
                        <div className="card-body">
                    <span class="badge rounded-pill text-bg-primary">{source}</span>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
                            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                        </div>
                </div>
        )
    }
}

export default NewsItem