import React, { useEffect, useState } from "react";
import Blog from "./Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="container py-4">
      <h1>Blogs</h1>
      <p className="w-75 mx-auto">
        Our doctors and consultants wrote some interesting blogs from their
        experience in medical field. Take a read. These will help you to keep
        healthy and give some knowledge on medical science
      </p>
      <hr />
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
