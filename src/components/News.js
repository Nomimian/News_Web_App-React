// import React, { Component } from 'react'
// import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import PropTypes from 'prop-types'
// import InfiniteScroll from "react-infinite-scroll-component";



// export class News extends Component {

//     static defaultthis.props = {
//         Country: "in",
//         pageSize: 8,
//         category: "general"
//     }
//     static propTypes = {
//         Country: PropTypes.string.isRequired,
//         pageSize: PropTypes.number.isRequired,
//         category: PropTypes.string.isRequired
//     }
//     capitalizeFirstLetter = (string) => {
//         return string.charAt(0).toUpperCase() + string.slice(1);

//     }
//     constructor(this.props) {
//         super(this.props);
//         this.state = {
//             articles: [],
//             loading: false,
//             page: 1,
//             totalResults : 0
//         }
//         document.title = `${this.capitalizeFirstLetter(this.props.category)} - NEWS `;
//     }

   

//     // async componentDidUpdate(prevthis.props) {
//     //     if (prevthis.props.searchQuery !== this.props.searchQuery) {
//     //         await this.updateNews();
//     //     }
//     // }
//     async updateNews() {
//         this.props.setProgress(10)
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=${this.props.apiKey} &page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         this.setState({ loading: true });
//         let data = await fetch(url);
//         this.props.setProgress(30)
//         let parsedData = await data.json()
//         console.log(parsedData);
//         this.props.setProgress(70)
//         this.setState({
//             articles: parsedData.articles,
//             totalResults: parsedData.totalResults,
//             loading: false
//         })
//         this.props.setProgress(100)
//     }
//     async componentDidMount() {
//         this.updateNews()
//     }
//     // handlePrevClick = async () => {
//     //     this.setState({ page: this.state.page - 1 });
//     //     this.updateNews()
//     // };
//     // handleNextClick = async () => {
//     //     this.setState({ page: this.state.page + 1 });
//     //     this.updateNews()
//     // };
//     fetchMoreData = async () => {
//         this.setState({ page: this.setState.page + 1});
//         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//         // this.setState({ loading: true });
//         let data = await fetch(url);
//         let parsedData = await data.json()
//         console.log(parsedData);
//         this.setState({
//             articles: this.state.articles.concat(parsedData.articles),
//             totalResults: parsedData.totalResults
//             // loading: false
//         })
//       };

//     render() {
//         return (
//             <>
//                 <h1 className="text-center" style={{ margin: "35px ,0px" }}  > NEWS APP - TOP  {`${this.capitalizeFirstLetter(this.props.category)}` } HEADLINES
//                     {this.state.loading && <Spinner />}
//                 </h1>
//                 <InfiniteScroll className='text-center'
//           dataLength={this.state.articles.length}
//           next={this.fetchMoreData}
//           hasMore={this.state.articles.length !== this.state.totalResults}
//           loader={<Spinner/>}
//         >
//             <div className="container">
//                 <div className="row">
//                     {/* {!(this.state.loading) && this.state.articles.map((element) => { */}
//                         {this.state.articles.map((element) => {
//                         return <div className="col-md-4" url={element.url}>
//                             <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
//                         </div>
//                     })}

//                 </div>
//                 </div>
//                 </InfiniteScroll>
//                 {/* <div className="container d-flex justify-content-between">
//                     <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
//                     <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
//                 </div> */}
//             </>
//         )
//     }
// }

// export default News


import React, {useEffect, useState} from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 

    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`;
        updateNews(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
      };
 
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px'  }}>NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
                <div className="text-center">
                {loading && <Spinner />}</div>
                <InfiniteScroll
                    className='text-center'
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner/>}
                > 
                    <div className="container">
                         
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div> 
                </InfiniteScroll>
            </>
        )
    
}


News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News