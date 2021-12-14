import Head from "next/head";
import Layout from "../components/Layout";

function error() {
  return (
    <>
      <Head>
        <title>Error</title>
      </Head>
      <Layout>
        <div className="mt-12 mx-5 h-[70vh] flex justify-center items-center">
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-700">
            <span className="animate-pulse text-primary">404 </span>| Page not
            found
          </h2>
        </div>
      </Layout>
    </>
  );
}

export default error;
