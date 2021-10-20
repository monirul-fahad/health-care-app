import React from "react";

const Blog = (props) => {
  const { img, name, author, blog } = props.blog;
  return (
    <div className="col-md-6 mb-3 ">
      <div className="card h-100 card-bg opacity box-shadow">
        <img
          src={img}
          style={{ height: "275px" }}
          className="card-img-top justify-content-center align-items-center img-fluid"
          alt=""
        />
        <div className="card-body">
          <h3 className="card-title text-center">{name}</h3>
          <p>By: {author}</p>
          <p className="text-start ">{blog}</p>

          <button className="btn btn-primary px-3 ms-auto">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
