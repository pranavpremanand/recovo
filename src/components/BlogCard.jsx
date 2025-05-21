import { formatDate } from "@/utils/dateUtils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCalendar, FaTag } from "react-icons/fa6";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <Link
        href={`/blog/${blog.slug}`}
        className="relative block overflow-hidden h-48 md:h-64 group"
      >
        <Image
          width={250}
          height={50}
          src={blog.imageUrl}
          alt={blog.imageAlt}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end">
          <div className="p-4 md:p-6">
            <span className="inline-block px-3 py-1 bg-[color:var(--secondary)] text-white text-xs font-medium rounded-full mb-2">
              {blog.categoryId.name}
            </span>
            <h3 className="text-lg md:text-xl font-bold text-white line-clamp-2">
              {blog.title}
            </h3>
          </div>
        </div>
      </Link>

      <div className="p-4 md:p-6 flex-grow flex flex-col">
        <p className="text-gray-600 line-clamp-3 mb-4">{blog.excerpt}</p>

        <div className="flex items-center text-sm text-gray-500 mt-auto space-x-4">
          <div className="flex items-center">
            <FaCalendar className="mr-1" size={12} />
            <span>{formatDate(blog.publishDate)}</span>
          </div>
          <div className="flex items-center">
            <FaTag className="mr-1" size={12} />
            <Link
              href={`/category/${blog.categoryId.slug}`}
              className="hover:text-[color:var(--primary)] transition-colors"
            >
              {blog.categoryId.name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
