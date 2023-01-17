import './Main.css';

import BlogCard from '../../BlogCard/BlogCard';
// import background from '../../../assets/images/background.jpg';
import { useBlogs } from '../../hooks/useBlogs';

export default function Main() {
  const blogs = useBlogs();
  return (
    <main>
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </main>
  );
}
