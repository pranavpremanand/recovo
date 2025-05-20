import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import { getBlogsByCategory } from "@/utils/fetchData";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const page = async ({ params, searchParams }) => {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;
  const currentPage = Number(resolvedSearchParams.page) || 1;
  const limit = 9;
  try {
    const data = await getBlogsByCategory({ slug, currentPage, limit });

    if (!data.success) {
      return (
        <div className="font-[family-name:var(--font-geist-sans)] h-[70vh] flex text-center justify-center items-center">
          <h1 className="text2 text-red-600">Something went wrong.</h1>
        </div>
      );
    }

    return (
      <div className="py-12 sm:py-16 lg:py-20">
        <div className="wrapper space-y-8">
          <Link href="/" className="flex gap-2 items-center text-gray-600">
            <FaArrowLeftLong /> Back to Home
          </Link>

          <h1 className="text-3xl font-bold mb-4">{data.category.name}</h1>
          <p className="text-gray-600 mb-8">{data.category.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>

          <Pagination currentPage={currentPage} totalPages={data.totalPages} />
        </div>
      </div>
    );
  } catch (err) {
    console.error("Error fetching blogs by category:", err);
    return (
      <div className="font-[family-name:var(--font-geist-sans)] h-[70vh] flex text-center justify-center items-center">
        <h1 className="text2 text-red-600">Something went wrong.</h1>
      </div>
    );
  }
};

export default page;
