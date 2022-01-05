import Image from "next/image";
import { useState, useEffect } from "react";
import { getSimilarPosts, getRecentPosts } from "../../services/blog";
import Link from "next/link";

const FeaturedPosts = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

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
                  <div className="flex gap-x-2 items-center justify-items-start border-b py-3 hover:bgs-secondaryDark group">
                    <div className="flex-shrink-0 w-16 h-16">
                      <Image
                        className="rounded-sm"
                        alt={post.title}
                        src={post.featuredImage.url}
                        height={200}
                        width={200}
                        objectFit="cover"
                        quality={30}
                        //   objectPosition="right"
                      />
                    </div>
                    <div>
                      <p className="text-sm line-clamp-2 group-hover:text-gray-300">
                        {post.title}
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
