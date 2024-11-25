import React, { useEffect, useState } from 'react';
import Loader from '../components/Loader';

const apiKey = import.meta.env.VITE_API_KEY;

export async function fetchBlogs(limit = 10, offset = 0) {
  const response = await fetch(
    `https://api.mediastack.com/v1/news?access_key=${apiKey}&keywords=virus,-corona&limit=${limit}&offset=${offset}`
  );
  const data = await response.json();
  return data;
}

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [limit] = useState(10); // Number of articles per page
  const [offset, setOffset] = useState(0); // Current page offset
  const [total, setTotal] = useState(0); // Total articles available

  const loadBlogs = async (currentOffset) => {
    try {
      setIsLoading(true);
      const data = await fetchBlogs(limit, currentOffset);
      if (data && data.data) {
        setBlogs(data.data);
        setTotal(data.pagination.total); // Set total articles
        setError(null);
      } else {
        setError('No articles found.');
      }
      setIsLoading(false);
    } catch (err) {
      setError('Failed to fetch blogs.');
      console.error(err);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs(offset);
  }, [offset]);

  const handleNextPage = () => {
    if (offset + limit < total) {
      setOffset((prev) => prev + limit);
    }
  };

  const handlePreviousPage = () => {
    if (offset > 0) {
      setOffset((prev) => prev - limit);
    }
  };

  return (
    <div className="blogs-container mt-[30px] mb-[30px]">
      <h1 className="text-2xl font-bold mb-4">Medical Blogs</h1>
      {error && <p className="text-red-500">{error}</p>}
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="flex flex-wrap justify-center gap-6">
            {blogs.map((blog, index) => (
              <div
                key={index}
                className="blog-card w-[300px] md:w-[350px] lg:w-[400px] bg-white hover:bg-lightBlue hover:text-white rounded-lg shadow-md"
              >
                {blog.image ? (
                  <img src={blog.image} alt={blog.title} className="w-full rounded-t-lg" />
                ) : (
                  <div className="w-full h-[200px] bg-gray-200 rounded-t-lg flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
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
          <div className="pagination mt-6 flex justify-center items-center gap-4">
            <button
              className="bg-lightBlue text-white px-4 py-2 rounded disabled:opacity-50"
              onClick={handlePreviousPage}
              disabled={offset === 0}
            >
              Previous
            </button>
            <span>
              Page {Math.ceil(offset / limit) + 1} of {Math.ceil(total / limit)}
            </span>
            <button
              className="bg-lightBlue text-white px-4 py-2 rounded disabled:opacity-50"
              onClick={handleNextPage}
              disabled={offset + limit >= total}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Blogs;
