import React, { Component } from "react";
import NewsItem from "./NewsItem";
import alternateNewsImage from "./alternateNewsImage.jpeg";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export default class News extends Component {

  static defaultProps = {
    pageSize: 6,
    country: 'in',
    apiKey: '0e746d560d594ca19a6571531efc98ca',
    category: 'general',
  }

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    apiKey: PropTypes.string,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  // cdm runs after render
  async componentDidMount() {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  // showNextButton = true

  handleNextClick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
      return;
    }
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  handlePreviousClick = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center">Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div key={element.url} className="col-md-4">
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={
                    element.urlToImage ? element.urlToImage : alternateNewsImage
                  }
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          {this.state.page <= 1 ? null : (
            <button
              className="btn btn-primary"
              onClick={this.handlePreviousClick}
            >
              {" "}
              &larr; Previous
            </button>
          )}

          {this.state.page + 1 >
          Math.ceil(this.state.totalResults / this.props.pageSize) ? null : (
            <button className="btn btn-primary" onClick={this.handleNextClick}>
              Next &rarr;
            </button>
          )}
          {/* {(this.showNextButton)?<button className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>:null} */}
        </div>
      </div>
    );
  }
}
