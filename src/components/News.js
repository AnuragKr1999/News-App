import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import alternateNewsImage from "./alternateNewsImage.png";
import Spinner from "./Spinner";
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from "prop-types";

const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  // document.title = 'Newsapp - ' + capitalizeWord(props.category) + ' News'

  const capitalizeWord = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1)
  } 

  const updateNews = async() => {
    props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(30)
    let parsedData = await data.json();
    props.setProgress(70)

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

    props.setProgress(100)
  }

  useEffect(() => {
    updateNews()
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async() => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };
  return (
    <>
      <h1 className="text-center" style={{margin: '35px 0px', marginTop: '90px'}}>Top Headlines | Category - {capitalizeWord(props.category)}</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
      <div className="container">
        <div className="row">
          {articles.map((element, index) => {
              return (
                <div key={index} className="col-md-4">
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

News.defaultProps = {
  pageSize: 6,
  country: "in",
  apiKey: "0e746d560d594ca19a6571531efc98ca",
  category: "general",
};

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  apiKey: PropTypes.string,
  category: PropTypes.string,
};

export default News
