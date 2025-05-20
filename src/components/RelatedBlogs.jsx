import React from "react";
import BlogCard from "./BlogCard";

const RelatedBlogs = ({ blogs, currentBlogId, categorySlug }) => {
  // Filter out current blog and get max 3 related blogs
  const relatedBlogs = blogs
    .filter(
      (blog) => blog.id !== currentBlogId && blog.category.slug === categorySlug
    )
    .slice(0, 3);

  if (relatedBlogs.length === 0) {
    return null;
  }

  return (
    <div className="animate-on-scroll">
      <h3 className="text-2xl font-bold mb-6">Related Articles</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedBlogs.map((blog, index) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            excerpt={blog.excerpt}
            slug={blog.slug}
            image={blog.image}
            imageAlt={blog.imageAlt}
            category={blog.category}
            publishDate={blog.publishDate}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedBlogs;
