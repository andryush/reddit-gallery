import React from "react";
import defaultThumbnail from "../../../../assets/images/default-image.jpg";

function Post({ thumbnail, title, num_comments, permalink }) {
  let img = null;
  if (thumbnail.includes("http")) {
    img = thumbnail;
  } else {
    img = defaultThumbnail;
  }
  return (
    <div className="card m-2" style={{ width: "18rem" }}>
      <img
        src={img}
        className="card-img-top"
        alt={title}
        style={{ height: "15rem", width: "18rem" }}
      />
      <div className="card-body d-flex flex-column justify-content-between align-items-center">
        <div>
          <h5 className="card-title">{title}</h5>
        </div>
        <div>
          <p className="card-text">Number of comments: {num_comments}</p>
        </div>
        <div className="w-100">
          <a
            href={`https://reddit.com${permalink}`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-dark btn-block"
          >
            Link
          </a>
        </div>
      </div>
    </div>
  );
}
export default Post;
