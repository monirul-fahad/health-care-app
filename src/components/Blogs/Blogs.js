import React, { useEffect, useState } from "react";
import Blog from "./Blog/Blog";
import "./Blog/Blogs.css";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className=" py-4 blogs-bg">
      <div className="container ">
        <h1 className="text-start">Blogs</h1>
        <p className="w-75 text-start fs-5">
          Our doctors and consultants wrote some interesting blogs from their
          experience in medical field. Take a read. These will help you to keep
          healthy and give some knowledge on medical science
        </p>
        <hr />
        <div className="row  g-4">
          {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
