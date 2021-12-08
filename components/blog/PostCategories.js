import { getCategories } from "../../services/blog";
import { useState, useEffect } from "react";
function PostCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, [categories]);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Tags & Catgories</h2>
      {categories.map((category) => (
        <p key={category.slug}>{category.name}</p>
      ))}
    </div>
  );
}

export default PostCategories;
