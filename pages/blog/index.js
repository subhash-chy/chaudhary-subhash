import Layout from "../../components/Layout";
import Head from "next/head";
import { getPosts } from "../../services/blog";
import PostCard from "../../components/blog/PostCard";
import FeaturedPosts from "../../components/blog/FeaturedPosts";
import PostCategories from "../../components/blog/PostCategories";

function blog({ posts }) {
  return (
    <>
      <Head>
        <title>Blog - Subash</title>
      </Head>
      <Layout>
        <div className="grid gap-5 md:grid-cols-12 mt-12 mx-5">
          {/* New Posts */}
          <div className="md:col-span-9">
            <div className=" max-w-[70ch] mx-auto">
              <h2 className="text-2xl font-bold mb-5">New posts</h2>
              {
                <div className="flex flex-wrap gap-5">
                  {posts.length === 0
                    ? "There are currently no posts to show!"
                    : posts
                        .map((post, index) => (
                          <PostCard key={index} post={post.node} />
                        ))
                        .reverse()}
                </div>
              }
            </div>
          </div>

          {/* Featured post */}
          <div className="md:col-span-3">
            <div className="md:sticky top-14">
              <div className="mb-12">
                <div className="mb-12">
                  <FeaturedPosts />
                </div>
                <div className="mb-12">
                  <PostCategories />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default blog;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: {
      posts,
    },
  };
}
