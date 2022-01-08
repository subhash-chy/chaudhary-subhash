import { getCategories } from "../../services/blog";
import { useState, useEffect } from "react";
function PostCategories() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Tags & Catgories</h2>
      <div className="max-h-[400px] overflow-y-auto">
        {categories.map((category) => (
          <p key={category.slug}>{category.name}</p>
        ))}
      </div>
    </div>
  );
}

export default PostCategories;
