import React from 'react'
import "./NewsItem.css";
const NewsItem = (props)=> {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            
                <div className="card zoom">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }
                    }> 
                    <span className="badge rounded-pill bg-danger"> {source} </span>
                    </div>
                    <img src={!imageUrl ? "https://videohive.img.customer.envatousercontent.com/files/90450ff4-e62c-4189-a38d-b91cc6aad39a/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=ca412effb9b1f390e9944c9b203728ca" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}  </h5>
                        <p className="card-text">{description.slice(0, 60)}...</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on  {new Date(date).toGMTString()}</small></p>
                        <div className="text-center">
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="abc"><span data-attr="Read">Read</span><span data-attr="More">More</span></a>
                        </div>
                    </div>
                </div>



                
            
        )
     
}

export default NewsItem
