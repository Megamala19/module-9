import React from 'react';

const blogs = [
  { id: 1, title: 'Understanding React Hooks', published: true },
  { id: 2, title: 'Draft: Advanced State Management', published: false },
  { id: 3, title: 'CSS Modules Explained', published: true }
];

function BlogDetails() {
  return (
    <div>
      <h2>Blog Details</h2>
      <ul>
        {blogs.map((blog) => {
          // Technique 2: element variable holding conditionally-picked JSX.
          let statusLabel;
          if (blog.published) {
            statusLabel = <span style={{ color: 'green' }}>Published</span>;
          } else {
            statusLabel = <span style={{ color: 'orange' }}>Draft</span>;
          }

          return (
            <li key={blog.id}>
              {blog.title} —{' '}
              {/* Technique 3: inline ternary operator */}
              {blog.published ? <em>Live</em> : <em>Not live yet</em>} — {statusLabel}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BlogDetails;
