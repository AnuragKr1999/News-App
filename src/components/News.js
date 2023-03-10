import React, { Component } from "react";
import NewsItem from "./NewsItem";
import alternateNewsImage from "./alternateNewsImage.png";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
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
      totalResults: 0,
    };

    document.title = 'Newsapp - ' + this.capitalizeWord(this.props.category) + ' News'
  }

  async updateNews() {
    this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30)
    let parsedData = await data.json();
    this.props.setProgress(70)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async() => {
    this.setState({
      page: this.state.page + 1,
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
        <h1 className="text-center my-4">Top Headlines | Category - {this.capitalizeWord(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
        <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
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
        </div>
        </InfiniteScroll>
      </>
    );
  }
}
