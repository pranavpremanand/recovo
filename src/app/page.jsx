import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/utils/fetchData";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default async function Home() {
  try {
    const data = await getBlogs();
    if (!data.success) {
      return (
        <div className="font-[family-name:var(--font-geist-sans)] h-[70vh] flex text-center justify-center items-center">
          <h1 className="text2 text-red-600">Something went wrong.</h1>
        </div>
      );
    }

    return (
      <div className="font-[family-name:var(--font-geist-sans)]">
        {data.blogsByCategory.map((item) => (
          <section
            key={item.category}
            className="odd:bg-gray-50 even:bg-white py-12 sm:py-16 lg:py-20"
          >
            <div className="wrapper space-y-8 flex flex-col items-center">
              <div className="flex justify-between gap-5 flex-wrap w-full">
                <h2 className="text1 font-extrabold text-gray-900">
                  {item.category}
                </h2>
                <Link
                  href={`/blogs/${item.category}`}
                  className="primary-btn flex gap-2 items-center"
                >
                  View All <FaArrowRightLong />
                </Link>
              </div>
              <div className="w-full grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {item.blogs.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Newsletter Section */}
        {/* <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[color:var(--primary)] rounded-lg shadow-xl overflow-hidden">
            <div className="px-6 py-12 sm:px-12 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Ready to stay updated?</span>
                  <span className="block">Join our newsletter today.</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-blue-100">
                  Get the latest product reviews and exclusive deals delivered
                  to your inbox.
                </p>
                <div className="mt-8 flex">
                  <div className="inline-flex rounded-md shadow">
                    <Link
                      href="/signup"
                      className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                    >
                      Sign up for free
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      </div>
    );
  } catch (error) {
    return (
      <div className="font-[family-name:var(--font-geist-sans)] h-[70vh] flex text-center justify-center items-center">
        <h1 className="text2 text-red-600">Something went wrong.</h1>
      </div>
    );
  }
}
