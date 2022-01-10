import FeaturedPosts from "../../components/blog/FeaturedPosts";
import PostCategories from "../../components/blog/PostCategories";
import PostDetail from "../../components/blog/PostDetail";
import Layout from "../../components/Layout";
import { getPostDetails, getPosts } from "../../services/blog";
import Head from "next/head";
import Error404 from "../../components/Error404";

function PostDetails({ post }) {
  if (post == null) {
    return <Error404 />;
  }
  return (
    <>
      <Head>
        <title>Blog - {post?.title}</title>
      </Head>
      <Layout>
        <div className="grid gap-5 md:grid-cols-12 mt-12 mx-5">
          {/* New Posts */}
          <div className="md:max-w-[70ch] md:mx-auto md:col-span-9 md:px-5 overflow-hidden">
            <PostDetail post={post} />
          </div>

          {/* Featured post */}
          <div className="md:col-span-3">
            <div className="md:sticky top-14">
              <div className="mb-12">
                <div className="mb-12">
                  <FeaturedPosts
                    slug={post?.slug}
                    categories={post?.categories.map(
                      (category) => category.slug
                    )}
                  />
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
export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
