import React from "react";
import './Blog.css';

function Blog() {
  const blogData = [
    {
      title: 'How to grow your business with data analytics',
      excerpt: 'Data analytics is a powerful tool that can help businesses make better decisions. Learn how to leverage data to grow smarter.',
      link: '#'
    },
    {
      title: 'The future of AI in business',
      excerpt: 'Artificial intelligence is rapidly changing the way businesses operate. Discover how AI is shaping the future of industries.',
      link: '#'
    },
    {
      title: 'Top strategies for digital marketing in 2024',
      excerpt: 'Digital marketing continues to evolve. Stay ahead with these top strategies for 2024 to increase engagement and drive growth.',
      link: '#'
    }
  ];

  return (
    <section className="blog">
      <h2 className="blog__title">Latest Blog Posts</h2>
      <div className="blog__items">
        {blogData.map((post, index) => (
          <div className="blog__item" key={index}>
            <h3 className="blog__item-title">{post.title}</h3>
            <p className="blog__item-excerpt">{post.excerpt}</p>
            <a href={post.link} className="blog__item-link">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog;
