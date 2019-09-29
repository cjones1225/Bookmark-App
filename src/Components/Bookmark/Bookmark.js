import React from "react";
import "./Bookmark.css";
import Rating from "../rating/Rating";

export default function Bookmark(props) {
  return (
    <div className="bookmark">
      <div className="bookmark-row">
        <div className="bookmark_title">
          <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
          </a>
        </div>
        <Rating value={props.rating} />
      </div>
      <div className="bookmark_description">{props.description}</div>
    </div>
  );
}
