import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import { blogList } from "../../config/data";
import Chip from "../../Components/common/Chip/index";
import EmptyList from "../../Components/common/EmptyList/index";
import {Link} from "react-router-dom";
import "./styles.css";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    let blog = blogList.find((blog) => blog.id === parseInt(id));

    if (blog) {
      setBlog(blog);
    }
  }, []);

  return (
    <>
      <Link to="/">
        <span>&#8592</span> Go Back to Homepage
      </Link>
      {blog ? (
        <div className="blog-wrap">
          <header>
            <p className='blog-date'>Published {blog.createdAt}</p>
            <h1>{blog.title}</h1>
            <div className="blog-subCategory">
              {blog.subCategory.map((category, index) => (
                <div key={index}>
                  <Chip label={category} />
                </div>
              ))}
            </div>
          </header>
          <img src={blog.cover} alt='cover' />
          <p className='blog-desc'>{blog.description}</p>
        </div>
      ) : (
        <EmptyList />
        )}
    </>
  );
};

export default Blog