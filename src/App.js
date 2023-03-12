import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 6;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const country = "in";

  const [progress, setProgress] = useState(0)

  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Routes>
          <Route exact path='/'  element={<News setProgress={setProgress}key='general' pageSize={pageSize} country={country} apiKey={apiKey} category={'general'}/>} /> 
          <Route exact path='/business'  element={<News setProgress={setProgress}key='business' pageSize={pageSize} country={country} apiKey={apiKey} category={'business'} />} /> 
          <Route exact path='/entertainment'  element={<News setProgress={setProgress}key='entertainment' pageSize={pageSize} country={country} apiKey={apiKey} category={'entertainment'} />} />
          <Route exact path='/health'  element={<News setProgress={setProgress}key='health' pageSize={pageSize} country={country} apiKey={apiKey} category={'health'} />} />
          <Route exact path='/science'  element={<News setProgress={setProgress}key='science' pageSize={pageSize} country={country} apiKey={apiKey} category={'science'} />} />
          <Route exact path='/sports'  element={<News setProgress={setProgress} key='sports' pageSize={pageSize} country={country} apiKey={apiKey} category={'sports'} />} />
          <Route exact path='/technology'  element={<News setProgress={setProgress}key='technology' pageSize={pageSize} country={country} apiKey={apiKey} category={'technology'} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App
