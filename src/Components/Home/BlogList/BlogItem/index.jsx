import React from 'react';
import { Link } from "react-router-dom";
import './styles.css';
import Chip from '../../../common/Chip';


const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    authorAvatar,
    category,
    cover
    },
  }) => 
    <div className='blogItem-wrap'>
     
    <img src={cover} alt="cover" className='blogItem-cover' />
      <Chip label={category} />
    <Link className='link' to={`/blog/${id}`}> 
      <h3>{title}</h3>
    </Link>
      <p className='blogItem-desc'>{description}</p>

      <footer>
        <div className="blogItem-author">
          <img src={authorAvatar} alt="avatar" />
          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>
        <Link className='blogItem-link' to={`/blog/${id}`}>
         ➝
        </Link>
      </footer>
    </div>


export default BlogItem