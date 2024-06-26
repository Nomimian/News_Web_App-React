// import React, { Component } from 'react'

// export class NewsItem extends Component {
//     render() {
//         let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
//         return (
//             <div className="my-3">
//                 <div className="card" >
//                     <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:0}}>
//                 <span class=" badge rounded-pill bg-danger" >
//                 {source}</span>
//                 </div>
//                     <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2024/06/17/1600x900/Upcoming_IPOs_DEE_Development_Engineers_IPO_1718594026397_1718594026568.jpg" : imageUrl} className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">{title} 
//                             <span class="visually-hidden">unread messages</span></h5>
//                     <p className="card-text">{description}</p>
//                     <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small> </p>
//                     <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
//                 </div>
//             </div>
//             </div >
//         )
//     }
// }

// export default NewsItem


import React from "react";

const NewsItem =(props) => {
    
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" >
                    <div style={{display:'flex', justifyContent:'flex-end',position:'absolute',right:0}}>
                <span class=" badge rounded-pill bg-danger" >
                {source}</span>
                </div>
                    <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2024/06/17/1600x900/Upcoming_IPOs_DEE_Development_Engineers_IPO_1718594026397_1718594026568.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} 
                            <span class="visually-hidden">unread messages</span></h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small> </p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
            </div >
        )
    }

export default NewsItem
