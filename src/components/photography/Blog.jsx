import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentEditable from 'react-contenteditable';
import { useDropzone } from 'react-dropzone';

export default function BlogComponent({ blogs: initialBlogs }) {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState(initialBlogs);
  const [isEditing, setIsEditing] = useState(
    localStorage.getItem("isEditing") === "true"
  );

  const handleReadMoreClick = (blog) => {
    navigate("/photography/blog/readmore", { state: { blog } });
  };

  const handleTitleChange = (index) => (evt) => {
    const updatedBlogs = blogs.map((blog, i) =>
      i === index ? { ...blog, title: evt.target.value } : blog
    );
    setBlogs(updatedBlogs);
  };

  const handleDescriptionChange = (index) => (evt) => {
    const updatedBlogs = blogs.map((blog, i) =>
      i === index ? { ...blog, description: evt.target.value } : blog
    );
    setBlogs(updatedBlogs);
  };

  const handleImageChange = (index) => (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedBlogs = blogs.map((blog, i) =>
          i === index ? { ...blog, image: reader.result } : blog
        );
        setBlogs(updatedBlogs);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <section name="Blog">
        <main className="container mx-auto py-12">
          <h1 className="text-4xl font-bold text-center mb-8 text-red-400 dark:text-red-300">BLOG</h1>
          {blogs.map((post, index) => {
            const { getRootProps, getInputProps, open } = useDropzone({
              onDrop: handleImageChange(index),
              accept: {
                "image/jpeg": [".jpg", ".jpeg"],
                "image/png": [".png"],
                "image/gif": [".gif"],
                "image/bmp": [".bmp"],
                "image/webp": [".webp"],
              },
              noClick: true,
              disabled: !isEditing,
            });

            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
                <div className="lg:flex">
                  <div
                    {...getRootProps({
                      className: "lg:w-1/3 overflow-hidden cursor-pointer",
                      onClick: (event) => {
                        if (isEditing) open();
                      },
                    })}
                  >
                    <input {...getInputProps()} />
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover-shadow-zoom transition-transform duration-300"
                    />
                  </div>
                  <div className="lg:w-2/3 p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-4 h-4 bg-red-500 mr-2"></div>
                      <ContentEditable
                        html={post.title}
                        disabled={!isEditing}
                        onChange={handleTitleChange(index)}
                        className="text-xl font-bold text-red-400 dark:text-red-300"
                        style={isEditing ? { border: "1px dashed red" } : {}}
                      />
                    </div>
                    <ContentEditable
                      html={post.description}
                      disabled={!isEditing}
                      onChange={handleDescriptionChange(index)}
                      className="text-gray-700 dark:text-gray-300 mb-4"
                      style={isEditing ? { border: "1px dashed red" } : {}}
                    />
                    <button onClick={() => handleReadMoreClick(post)} className="px-4 py-2 bg-gray-800 dark:bg-red-700 text-white font-semibold rounded shadow-md hover:bg-red-500 hover:shadow-lg transition duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </main>
        <style>
          {`
            .hover-shadow-zoom:hover {
              transform: scale(1.05);
              box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            }
          `}
        </style>
      </section>
    </section>
  );
}
