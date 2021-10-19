import React from "react";

const Blog = (props) => {
  const { img, name, author, blog } = props.blog;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="">by: {author}</p>
            <p className="card-text px-2 text-start">{blog}</p>
          </div>
          <div className="card-footer">
            <button className="btn btn-primary">Reade more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
