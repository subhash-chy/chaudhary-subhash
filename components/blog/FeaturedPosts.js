import { useState, useEffect } from "react";
import { getSimilarPosts, getRecentPosts } from "../../services/blog";
import Link from "next/link";
import moment from "moment";

const FeaturedPosts = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  // useEffect(() => {
  //   if (slug) {
  //     getSimilarPosts(categories, slug).then((result) => {
  //       setRelatedPosts(result);
  //     });
  //   } else {
  //     getRecentPosts().then((result) => {
  //       setRelatedPosts(result);
  //     });
  //   }
  // }, [slug]);

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">
        {slug ? "Related posts" : "Recent Posts"}
      </h2>
      {relatedPosts.length === 0
        ? "No posts to show!"
        : relatedPosts
            .map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <a>
                  <div className="border-b border-primary/5 py-3 group">
                    <div>
                      <p className="mb-2 group-hover:text-gray-300">
                        {post.title}
                      </p>
                      <p className="text-primary text-xs italic">
                        {moment(post.createdAt).format("MMM DD, YYYY")}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            ))
            .reverse()}
    </>
  );
};

export default FeaturedPosts;
