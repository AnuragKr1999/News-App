import React, { Component } from 'react'

export class NewsItem extends Component {
    
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    let formattedDate = new Date(date).toGMTString()
    return (
      <div className="card my-3">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", sIndex: "1"}}>{source}</span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-primary">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-success">By {author?author:'Unknown'} on {formattedDate}</small></p>
          <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>

        </div>
      </div>
    )
  }
}

export default NewsItem