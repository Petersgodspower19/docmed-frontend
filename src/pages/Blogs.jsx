import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchBlogs() {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?category=health&apiKey=${apiKey}`);
  const data = await response.json();
  return data;
}

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setIsLoading(true);
        const data = await fetchBlogs();
        if (data && data.articles) {
          setBlogs(data.articles);
          setIsLoading(false);
        } else {
          setError('No articles found.');
        }
      } catch (err) {
        setError('Failed to fetch blogs.');
        console.error(err);
      }
    };

    loadBlogs();
  }, []);

  return (
    <div className="blogs-container mt-[30px] mb-[30px]">
      <h1 className="text-2xl font-bold mb-4">Medical Blogs</h1>
      {error && <p className="text-red-500">{error}</p>}
      {isLoading ? <Loader /> : (
        <div className="flex flex-wrap justify-center gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card w-[300px] md:w-[350px] lg:w-[400px] bg-white hover:bg-lightBlue hover:text-white rounded-lg shadow-md">
              <img src={blog.urlToImage} alt="" className="w-full rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-lg font-bold">{blog.title}</h2>
                <p className="text-gray-600">{blog.description}</p>
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-darkBlue mt-2 block"
                >
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Blogs;
