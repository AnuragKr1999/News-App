import React, { Component } from "react";
import NewsItem from "./NewsItem";
import alternateNewsImage from "./alternateNewsImage.png";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {

  static defaultProps = {
    pageSize: 6,
    country: "in",
    apiKey: "0e746d560d594ca19a6571531efc98ca",
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string,
    apiKey: PropTypes.string,
    category: PropTypes.string,
  };

  capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  } 

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };

    document.title = 'Newsapp - ' + this.capitalizeWord(this.props.category) + ' News'
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    await this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };

  handlePreviousClick = async () => {
    await this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  render() {
    return (
      <div className="container my-3 ">
        <h1 className="text-center">Top Headlines | Category - {this.capitalizeWord(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div key={element.url} className="col-md-4">
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : alternateNewsImage
                    }
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          {
            <button
              disabled = {this.state.page <= 1}
              className="btn btn-primary"
              onClick={this.handlePreviousClick}
            >
              {" "}
              &larr; Previous
            </button>
          }

          {
            <button
              disabled={ this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize) }
              className="btn btn-primary"
              onClick={this.handleNextClick}
            >
              Next &rarr;
            </button>
          }
        </div>
      </div>
    );
  }
}
