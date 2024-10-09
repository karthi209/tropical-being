import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";

function Blog() {

  const [post, setPost] = useState('');

  useEffect(() => {
    // Fetch the Markdown file
    fetch('1.md')
      .then((res) => res.text())
      .then((text) => {
        setPost(text);
      })
      .catch((error) => {
        console.error('Error fetching the markdown file:', error);
      });
  }, []);

  return (
    <div className='pages-custom'>
      <ReactMarkdown children={post} />
    </div>
  );
}

export default Blog;