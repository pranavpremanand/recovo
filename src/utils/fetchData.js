import axios from "axios";

// export const baseUrl = "http://localhost:5000/api";
export const baseUrl = "https://recovo-blogplatform-backend.vercel.app/api";

// get latest blogs in all category for home page
export const getBlogs = async () => {
  try {
    const res = await axios.get(`${baseUrl}/blogs/latest/${3}`);
    return res.data;
  } catch (error) {
    return { success: false };
  }
};

// get categories
export const getCategories = async () => {
  try {
    const res = await axios.get(`${baseUrl}/categories`);
    return res.data;
  } catch (error) {
    return error;
  }
};

// get blog by slug
export const getBlogBySlug = async (slug) => {
  try {
    const res = await axios.get(`${baseUrl}/blogs/slug/${slug}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

// get blogs by category
export const getBlogsByCategory = async ({ slug, currentPage, limit }) => {
  try {
    const res = await axios.get(
      `${baseUrl}/blogs/category/${slug}?page=${currentPage}&limit=${limit}`
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
