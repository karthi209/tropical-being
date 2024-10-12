import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams, Link, useNavigate } from 'react-router-dom';
import "./css/Pages.css";
import "./css/BlogList.css"

// Component to display a single blog post
const BlogPost = () => {
  const [post, setPost] = useState('');
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_PATH}posts/${slug}.md`);
        if (!response.ok) {
          navigate('/blog');
          return;
        }
        const text = await response.text();
        setPost(text);
      } catch (error) {
        console.error('Error loading post:', error);
        navigate('/blog');
      }
    };

    fetchPost();
  }, [slug, navigate]);

  return (
    <div className='master-blog'>
      <div className="pages-individual">
        <Link to="/blog">
          ← Back to Posts
        </Link>
        <article className="blog">
          <ReactMarkdown>{post}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
};

// Component to display the list of blog posts
const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_PATH}posts/posts.json`);
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error loading posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="pages-custom">
      <h3>Blog Posts</h3>
      <div className="blogposts">
        {posts.map((post) => (
          <article key={post.slug} className='articleclass'>
            <Link to={`/blog/${post.slug}`} aria-label={`Read more about ${post.title}`}>
              <img src={`${import.meta.env.VITE_BASE_PATH}${post.image}`} alt={post.title} />
              <h4>
                {post.title}
              </h4>
              <time>
                {new Date(post.date).toLocaleDateString()}
              </time>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

// Main Blog component that handles routing
const Blog = () => {
  const { slug } = useParams();

  return slug ? <BlogPost /> : <BlogList />;
};

export default Blog;