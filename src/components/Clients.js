import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BlogSection() {
  const [allBlogs, setAllBlogs] = useState([]);
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const { data: response } = await axios({
          method: "post",
          url: "https://kitech.rw/api/v1/article/web",
          data: {
            website: "63ca3476f44626306abe61d8",
            limit: 3,
            order: "createdAt",
          },
        });
        console.log("succ", response.data);
        setAllBlogs(response.data);
      } catch (error) {
        console.log("err", error);
      }
    };
    fetchArticles();
  }, []);

  const blogContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
    margin: '8%',
    border: '1px solid gray', 
    backgroundColor: 'lightgray', 
    padding: '10px', 
    borderRadius: '5px', 
  };

  const blogStyle = {
    width: '30%',
    marginBottom: '20px',
    boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
    padding: '10px', 
    border: '1px solid gray', 
    borderRadius: '5px', 
    backgroundColor: 'white', 
  };

  const titleStyle = {
    fontWeight: 'bold',
    textAlign: 'center',
  };

  const fontb = {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '24px',
    color: 'blue',
  };

  const fontc = {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '18px',
  };

  const descriptionStyle = {
    color: '#555',
  };

  const blogs = allBlogs.map((blog, index) => {
    return (
      <div key={index} style={blogStyle}>
        <h2 style={titleStyle}>{blog.title}</h2>
        <p style={descriptionStyle}>{blog.description}</p>
        <img src={blog.thumbnail} alt={blog.title} style={{ width: '100%', height: 'auto' }} />
      </div>
    );
  });

  return (
    <div>
      <h1 style={fontb}>Our latest website blogs</h1>
      <h2 style={fontc}>Join Us on a Journey Through Our Blog</h2>
      <div style={blogContainerStyle}>
      
        {blogs}
      </div>
    </div>
  );
}

export default BlogSection;
