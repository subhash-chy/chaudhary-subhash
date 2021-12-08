// HOMEPAGE

import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import Button from "../components/button/Button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>Neplab</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="overflow-hidden">
          <div
            style={{
              transform: `translateY(${offsetY * 0.55}px)`,
            }}
            className="w-screen h-screen "
          >
            {/* <Image
              className="image"
              alt="Subash chaudhary on a shirt."
              src="/subashv2.png"
              layout="fill"
              objectFit="contain"
              objectPosition="left bottom"
              quality={30}
            /> */}
            <div className="h-full justify-center items-center flex flex-col gap-x-20 gap-y-10 md:flex-row bg-secondaryDark p-10 md:p-20">
              <h1 className="text-gradient text-6xl">
                Hi! I am Subash. A designer.
              </h1>
              <p className="text-gray-100 text-lg">
                I am also a front-end developer with pretty good experience in
                creating an eye catching and engaging UI.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[70ch] my-12 text-center">
          <h1 className="text-2xl font-semibold mb-2">Mr. Subash Chaudhary.</h1>
          <p>Who is actually Mr. Subash Chaudhary?</p>
        </div>

        <div className="grid md:grid-cols-5 mx-5 gap-x-5 gap-y-2 overflow-hidden">
          <div className="row-start-2 md:row-start-1 md:col-span-2 w-full h-full flex items-end">
            {/* Do not delete this imageContainer class */}
            <div className="imageContainer">
              <Image
                className="image"
                alt="Selfie of Mr Subash Chaudhary wearing jeans jacket at sangha."
                src="/subash.jpg"
                // width={1000}
                // height={1000}
                layout="fill"
                objectPosition="right"
                objectFit="cover"
                quality={30}
              />
            </div>
          </div>
          <div className="dark:bg-secondaryDark bg-gray-100 md:col-span-3 p-10">
            <h1 className="text-3xl font-semibold mb-2">
              Front End Developer.
            </h1>
            <p className="mb-5 text-xs">(HTML, CSS, Javascript, React)</p>
            <p className="mb-5">
              Mr Subash Chaudhary is an awesome front-end developer who likes to
              write &lt;/code&gt;. The <b>favourite</b> programming language is
              Javascript (js). To create UI of an application, he uses HTML,
              CSS, Javascript. On top, he uses `React` a library created by
              Facebook. And on the top of React, he uses `Next.js` for SEO kind
              of stuffs.
            </p>
            <p className="mb-5">
              The above tools described are not only the known tools to him!
              There are also some more tools that he knows. Some of them are
              Adobe XD, Figma, and Lunacy as a Prototyping tools, Blender as a
              3D design tool, Photoshop as a photo editing tool, Adobe
              illustrator as a vector drawing and illustration tool.
            </p>
            <Button
              accent
              title="LEARN MORE >"
              onClick={() => router.push("/about")}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
