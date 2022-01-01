// HOMEPAGE

import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "../components/button/Button";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// import animations
import { triggerXSlide, triggerYSlide } from "../styles/animations";
// import { Bounce } from "gsap/all";

export default function Home() {
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);

  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.scrollY);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  useEffect(() => {
    gsap.from(".intro", { opacity: 0, y: -200 });
    gsap.from(".intro-desc", { opacity: 0, x: 100, delay: 0.8 });

    //Animating trigger-right sections on scroll
    triggerXSlide(".trigger-right");

    //Animating right sections on scroll
    triggerXSlide(".trigger-left");
    triggerXSlide(".animate-description");

    // Animating top or bottom sliding
    triggerYSlide(".slide-bottom");
    triggerYSlide(".featured-slide-collides-up");

    // Creating a bounce animation
    gsap.fromTo(
      ".bounce-dot",
      {
        y: -10,
      },
      { y: 10, yoyo: true, repeat: -1 }
    );
  }, []);

  return (
    <>
      <Head>
        <title>Subash</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="overflow-hidden">
          <div
            // style={{
            //   transform: `translateY(${offsetY * 0.55}px)`,
            // }}
            className="w-screen h-screen   bg-secondaryDark"
          >
            <div className="featured-image h-full justify-center items-center text-center flex flex-col gap-x-20 gap-y-10 p-10 md:p-20 text-gray-100">
              <div className="featured-slide-collides-up h-min flex flex-col gap-10">
                <h1 className="text-glow max-w-[70ch] text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-700  intro">
                  Hi! I am Subash. A front-end developer.
                </h1>
                <p className="intro-desc text-lg">
                  I am also a front-end developer with pretty good experience in
                  creating an eye catching and engaging UI.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-y-5">
                <div className="h-10 w-5 border-2 rounded-full flex items-center justify-center">
                  <div className="bounce-dot h-1 w-1 rounded-full bg-primary"></div>
                </div>
                <p>Scroll down slowly to see animation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-bottom">
          <div className="mx-auto max-w-[70ch] my-20 text-center">
            <h1 className="trigger-right text-2xl font-semibold mb-2 italic">
              Mr. Subash Chaudhary.
            </h1>
            <p className="trigger-left">
              Who is actually Mr. Subash Chaudhary?
            </p>
          </div>

          <div className="grid md:grid-cols-5 mx-5 gap-x-5 gap-y-2 overflow-hidden">
            <div className="trigger-left row-start-2 md:row-start-1 md:col-span-2 w-full h-full flex items-end">
              {/* Do not delete this imageContainer class */}
              {/* <div className="imageContainer">
                <Image
                  className="image"
                  alt="Subash Chaudhary"
                  src="/subash.jpg"
                  layout="fill"
                  objectPosition="right"
                  objectFit="cover"
                  quality={30}
                />
              </div> */}

              <div className="w-full h-full relative">
                <Image
                  className=""
                  src="/subash.jpg"
                  alt="subash chaudhary"
                  width={1920}
                  height={2080}
                  priority={true}
                  layout="responsive"
                  objectFit="cover"
                  objectPosition="right"
                  quality={30}
                />
              </div>
            </div>
            <div className="animate-description dark:bg-secondaryDark bg-gray-100 md:col-span-3 p-10">
              <h1 className="text-3xl font-semibold mb-2">
                Front End Developer.
              </h1>
              <p className="mb-5 text-xs">(HTML, CSS, Javascript, React)</p>
              <p className=" mb-5">
                Mr Subash Chaudhary is an awesome front-end developer who likes
                to write &lt;/code&gt;. The <b>favourite</b> programming
                language is Javascript (js). To create UI of an application, he
                uses HTML, CSS, Javascript. On top, he uses `React` a library
                created by Facebook. And on the top of React, he uses `Next.js`
                for SEO kind of stuffs.
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
        </div>
      </Layout>
    </>
  );
}
