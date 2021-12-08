import Layout from "../components/Layout";
import Head from "next/head";

function myProjects() {
  return (
    <>
      <Head>
        <title>My-projects - Neplab</title>
      </Head>
      <Layout>
        <div className="mt-12 mx-5">
          <h2>There are currently no projects to show..</h2>
        </div>
      </Layout>
    </>
  );
}

export default myProjects;
