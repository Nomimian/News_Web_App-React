// import './App.css';

// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'
// export default class App extends Component {
//   // constructor() {
//   //   super();
//   //   this.state = {
//   //     searchQuery: ''
//   //   };
//   // }
//   // handleSearch = (query) => {
//   //   this.setState({ searchQuery: query });
//   // };

// pageSize = 5;
// apiKey = process.env.REACT_APP_NEWS_API
// state={
//   progress : 0
// }
// setProgress = (progress) => {
//     this.setState({ progress: progress })
// }
//   render() {
//     return (
// <Router>
//       <div>
//       <LoadingBar
//         color='#f11946'
//         height={4}
//         progress={this.state.progress}
//       />
//       {/* <NavBar onSearch={this.handleSearch} /> */}
//       <NavBar/>
//           <Routes> 
//             <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={apiKey}  key= "general" pageSize={pageSize} Country= "us" category="general" />} />
//             <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={apiKey}  key="science" pageSize={pageSize} Country= "us" category="science" />} />
//             <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={apiKey}  key="sports" pageSize={pageSize} Country= "us" category="sports" />} />
//             <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={apiKey}  key=" health" pageSize={pageSize} Country= "us" category="health" />} />
//             <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={apiKey}  key="entertainment" pageSize={pageSize} Country= "us" category="entertainment" />} />
//             <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={apiKey}  key="business" pageSize={pageSize} Country= "us" category="business" />} />
//             <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={apiKey}  key="technology" pageSize={pageSize} Country= "us" category="technology" />} />
//           </Routes>
//       </div>
//        </Router>
//     )
//   }
// }


// // <News setProgress={this.setProgress} apiKey={apiKey}  pageSize={pageSize} Country= "in" category="sports"/>


import './App.css';
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <Router>
      <div>
        <LoadingBar
          color='#f11946'
          height={4}
          progress={progress}
        />
        {/* <NavBar onSearch={handleSearch} /> */}
        <NavBar />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} Country="us" category="general" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} Country="us" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} Country="us" category="sports" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} Country="us" category="health" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} Country="us" category="entertainment" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} Country="us" category="business" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} Country="us" category="technology" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
