//API route for fetching posts/blog data
import { getAllPosts } from "lib/api";

export default async function getBlogs(req, res) {
  const data = await getAllPosts();
  res.status(200).json(data);
}