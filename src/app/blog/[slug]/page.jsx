import Head from "next/head";
import Link from "next/link";
import { FaCalendar, FaUser, FaTag } from "react-icons/fa";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedBlogs from "@/components/RelatedBlogs";
import { getBlogBySlug, getBlogs } from "@/utils/fetchData";
import Image from "next/image";
import { formatDate } from "@/utils/dateUtils";

const BlogDetail = async ({ params }) => {
  const { slug } = await params;

  const data = await getBlogBySlug(slug);

  if (!data.success) {
    <div className="font-[family-name:var(--font-geist-sans)] h-[70vh] flex text-center justify-center items-center">
      <h1 className="text2 text-red-600">Blog not found</h1>
    </div>;
  }

  const blog = data.blog;

  // Get related blogs (same category, excluding current blog)
  // const blogs = await getBlogs();
  // const relatedBlogs = blogs
  //   .filter(
  //     (b) => b.categoryId._id === blog.categoryId._id && b.id !== blog.id
  //   )
  //   .slice(0, 3);

  return (
    <>
      <Head>
        <title>{`${blog.title} | Recovo`}</title>
        <meta
          name="description"
          content={blog.metaDescription || blog.excerpt}
        />
        <meta name="keywords" content={blog.tags.join(", ")} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:image" content={blog.imageUrl} />
        <meta
          property="og:url"
          content={`https://recovo.com/blog/${blog.slug}`}
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.excerpt} />
        <meta name="twitter:image" content={blog.imageUrl} />

        {/* Article specific meta */}
        <meta property="article:published_time" content={blog.publishDate} />
        {blog.updatedDate && (
          <meta property="article:modified_time" content={blog.updatedDate} />
        )}
        <meta property="article:section" content={blog.category?.name || ""} />
        {blog.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      </Head>

      {/* Structured Data / JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://recovo.com/blog/${blog.slug}`,
            },
            headline: blog.title,
            description: blog.excerpt,
            image: blog.imageUrl,
            author: {
              "@type": "Person",
              name: blog.author?.name || "",
            },
            publisher: {
              "@type": "Organization",
              name: "Recovo",
              logo: {
                "@type": "ImageObject",
                url: "https://recovo.com/logo.png",
              },
            },
            datePublished: blog.publishDate,
            dateModified: blog.updatedDate || blog.publishDate,
          }),
        }}
      />

      <div className="py-12 sm:py-16 lg:py-20">
        <div className="wrapper">
          <Breadcrumb
            items={[
              {
                label: blog.categoryId?.name || "Category",
                path: `/category/${blog.categoryId?.slug || ""}`,
              },
              { label: blog.title, path: `/blog/${blog.slug}` },
            ]}
          />

          <article>
            {/* Header Section */}
            <header className="mb-8">
              <div className="">
                {/* Category */}
                <Link
                  href={`/category/${blog.category?.slug}`}
                  className="inline-block px-3 py-1 bg-accent text-white text-sm font-medium rounded-full mb-4"
                >
                  {blog.category?.name}
                </Link>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  {blog.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-x-6 gap-y-3">
                  <div className="flex items-center">
                    <FaCalendar className="mr-2" />
                    <time dateTime={blog.publishDate}>
                      {formatDate(blog.publishDate)}
                    </time>
                  </div>

                  {/* {blog.authorId && (
                      <div className="flex items-center">
                        <FaUser className="mr-2" />
                        <span>{blog.author.name}</span>
                      </div>
                    )} */}

                  {blog.tags.length > 0 && (
                    <div className="flex items-center">
                      <FaTag className="mr-2" />
                      <div className="flex flex-wrap gap-2">
                        {blog.tags.map((tag) => (
                          <span key={tag} className="text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative h-[300px] md:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src={blog.imageUrl}
                  alt={blog.imageAlt}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </header>

            {/* Content */}
            <div className="">
              <div
                className="prose prose-lg max-w-none blog-content"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />

              {/* Affiliate Disclaimer */}
              {/* <div className="mt-12 p-4 bg-gray-100 rounded-lg text-sm text-gray-600">
                  <p>
                    <strong>Affiliate Disclosure:</strong> This post contains
                    affiliate links. We may earn a commission if you make a
                    purchase through these links, at no additional cost to you.
                    We only recommend products we truly believe in.
                  </p>
                </div> */}
            </div>
          </article>

          {/* Related Posts */}
          <div className="mt-16">
            {/* <RelatedBlogs
                blogs={relatedBlogs}
                currentBlogId={blog.id}
                categorySlug={blog.category?.slug || ""}
              /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
