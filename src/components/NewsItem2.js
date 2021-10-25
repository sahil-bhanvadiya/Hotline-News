import React from "react";
import "./NewsItem2.css";
import { FaArrowAltCircleRight } from "react-icons/fa";
const NewsItem2 = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card">
      <div className="cover">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className="badge rounded-pill bg-danger"> {source} </span>
        </div>
        <img
          src={
            !imageUrl
              ? "https://videohive.img.customer.envatousercontent.com/files/90450ff4-e62c-4189-a38d-b91cc6aad39a/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=ca412effb9b1f390e9944c9b203728ca"
              : imageUrl
          }
          alt="cover"
        />
        <div className="play-icon">
          <a href={newsUrl} rel="noreferrer" target="_blank" className="abc">
            {" "}
            <FaArrowAltCircleRight />{" "}
          </a>
        </div>
      </div>
      <div className="card-content">
        <h5>{title}</h5>
        <p>{description.slice(0, 60)}...</p>
        <small>
          By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
        </small>
      </div>
    </div>
  );
};

export default NewsItem2;
