// HOMEPAGE

import Head from "next/head";
import Layout from "../components/Layout";
import Image from "next/image";
import { useEffect } from "react";
import Button from "../components/button/Button";
import { useRouter } from "next/router";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

//Importing colors
const primary = require("../styles/constants");
const primaryDark = require("../styles/constants");
const cardDark = require("../styles/constants");

// import animations
import { triggerXSlide, triggerYSlide } from "../styles/animations";

export default function Home() {
  const router = useRouter();
  gsap.registerPlugin(ScrollTrigger);

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

    // Animating SVG card
    //creating timeline
    let tl = gsap.timeline({
      defaults: {
        duration: 0.7,
        ease: "back.inOut",
        opacity: 0,
        transformOrigin: "center",
      },
    });

    tl.from(
      "#card",
      {
        scale: 0,
      },
      "=.2"
    )
      .from("#header", { scaleY: 0, transformOrigin: "top" })
      .from("#logo", { scale: 0 }, "-=.4")
      .from("#title", { scaleX: 0, transformOrigin: "left" })
      .from("#para-one", { scaleX: 0, transformOrigin: "left" }, "-=.4")
      .from("#para-two", { scaleX: 0, transformOrigin: "left" }, "-=.4")
      .from("#btn-submit", { scale: 0 })
      .from("#btn-cancel", { scale: 0 }, "-=.6");
    // Animating the whole card
    gsap.to("#skewed-card", { y: 4, delay: 3.5, repeat: -1, yoyo: true });
  }, []);

  return (
    <>
      <Head>
        <title>Subash</title>
        <meta
          name="google-site-verification"
          content=" V8plfmHs6tIBpKivorNTMKn-zQH6sknk8LdwAqsjjDU"
        />
        <meta
          name="description"
          content="Want to know advanced topics on Front-end development? You are in the right place. You can find different blogs covering advanced topics on front-end development using NextJS and ReactJS."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="overflow-hidden">
          <div className="w-screen  bg-secondaryDark">
            <div className=" featured-image  h-full justify-center items-center text-center flex flex-col md:flex-row gap-x-20 gap-y-10 p-10 md:p-20 text-gray-100">
              <div className="featured-slide-collides-up h-min flex flex-col gap-y-10 text-left">
                <h1 className="max-w-[70ch] text-6xl font-semibold text-white intro">
                  Hi! I am Subash. A front-end developer.
                </h1>
                <p className="intro-desc">
                  I am also a front-end developer with pretty good experience in
                  creating an eye catching and engaging UI.
                </p>
              </div>

              <div className="flex flex-col items-center justify-center gap-y-5">
                <div className=" w-[70ch] md:w-full h-full">
                  <svg
                    className="mx-auto"
                    width="379"
                    height="402"
                    viewBox="0 0 529 552"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="skewed-card">
                      <rect
                        id="card"
                        width="404"
                        height="442"
                        transform="matrix(0.942641 0.333807 -0.332326 0.943165 147.783 0)"
                        fill={primaryDark.primaryDark}
                      />
                      <rect
                        id="header"
                        width="404"
                        height="139"
                        transform="matrix(0.942641 0.333807 -0.332326 0.943165 147.783 0)"
                        fill={cardDark.cardDark}
                      />
                      <rect
                        id="title"
                        width="116"
                        height="19"
                        rx="9.5"
                        transform="matrix(0.942641 0.333807 -0.332326 0.943165 102.715 176.054)"
                        fill={primary.primary}
                      />
                      <rect
                        id="para-one"
                        width="342"
                        height="19"
                        rx="9.5"
                        transform="matrix(0.942641 0.333807 -0.332326 0.943165 81.778 235.473)"
                        fill="#636363"
                      />
                      <rect
                        id="para-two"
                        width="234"
                        height="19"
                        rx="9.5"
                        transform="matrix(0.942641 0.333807 -0.332326 0.943165 60.8415 294.892)"
                        fill="#636363"
                      />
                      <rect
                        id="btn-submit"
                        width="90"
                        height="37"
                        rx="18.5"
                        transform="matrix(0.942641 0.333807 -0.332326 0.943165 40.902 351.482)"
                        fill={primary.primary}
                      />
                      <rect
                        id="btn-cancel"
                        width="90"
                        height="37"
                        rx="18.5"
                        transform="matrix(0.942641 0.333807 -0.332326 0.943165 145.535 388.535)"
                        fill="#636363"
                      />
                      <g id="logo">
                        <path
                          d="M266.844 119.296C267.055 118.696 267.005 118.162 266.694 117.694C266.385 117.219 265.742 116.61 264.765 115.867C263.791 115.117 263.044 114.456 262.524 113.882C261.107 112.316 260.681 110.732 261.246 109.129C261.539 108.295 262.034 107.636 262.728 107.152C263.433 106.662 264.287 106.389 265.291 106.332C266.303 106.277 267.356 106.443 268.45 106.831C269.551 107.221 270.461 107.769 271.18 108.477C271.902 109.177 272.371 109.975 272.587 110.869C272.811 111.767 272.76 112.678 272.434 113.603L269.258 112.478C269.507 111.772 269.477 111.146 269.17 110.6C268.864 110.047 268.309 109.628 267.505 109.343C266.728 109.069 266.067 109.021 265.519 109.2C264.974 109.373 264.607 109.727 264.418 110.264C264.241 110.765 264.344 111.274 264.725 111.79C265.114 112.309 265.747 112.891 266.623 113.535C268.238 114.718 269.317 115.859 269.859 116.956C270.401 118.054 270.461 119.203 270.038 120.403C269.568 121.738 268.693 122.607 267.415 123.013C266.14 123.411 264.648 123.308 262.94 122.703C261.755 122.283 260.751 121.685 259.929 120.91C259.109 120.127 258.575 119.267 258.326 118.328C258.084 117.393 258.138 116.427 258.489 115.432L261.676 116.56C261.076 118.262 261.792 119.473 263.825 120.192C264.58 120.46 265.223 120.517 265.753 120.363C266.286 120.202 266.65 119.847 266.844 119.296ZM287.864 113.944L284.285 124.102C283.691 125.79 282.691 126.937 281.287 127.543C279.889 128.153 278.276 128.134 276.449 127.486C274.649 126.849 273.388 125.866 272.665 124.538C271.942 123.21 271.864 121.709 272.43 120.035L276.05 109.76L279.226 110.885L275.639 121.064C275.284 122.074 275.263 122.897 275.579 123.533C275.904 124.164 276.494 124.631 277.348 124.934C279.134 125.566 280.371 124.948 281.061 123.08L284.678 112.816L287.864 113.944ZM285.035 130.288L290.469 114.866L295.868 116.778C297.738 117.44 299.03 118.303 299.743 119.366C300.458 120.421 300.572 121.641 300.085 123.025C299.818 123.781 299.389 124.379 298.797 124.821C298.207 125.255 297.519 125.484 296.733 125.508C297.454 125.985 297.934 126.604 298.175 127.364C298.422 128.127 298.392 128.943 298.086 129.811C297.564 131.294 296.695 132.249 295.481 132.677C294.267 133.105 292.782 133.016 291.026 132.41L285.035 130.288ZM290.577 124.698L289.11 128.86L291.831 129.824C292.579 130.089 293.223 130.118 293.764 129.913C294.314 129.703 294.7 129.283 294.922 128.655C295.419 127.243 294.941 126.267 293.488 125.729L290.577 124.698ZM291.368 122.452L293.718 123.284C295.33 123.823 296.356 123.468 296.797 122.218C297.043 121.519 297.015 120.945 296.713 120.497C296.42 120.044 295.836 119.662 294.961 119.352L292.738 118.565L291.368 122.452ZM308.703 135.096L303.135 133.124L300.956 135.927L297.579 134.731L308.751 121.34L311.694 122.383L312.03 139.848L308.653 138.652L308.703 135.096ZM304.899 130.854L308.752 132.218L308.849 125.759L304.899 130.854ZM322.888 139.142C323.099 138.542 323.049 138.008 322.738 137.54C322.429 137.065 321.786 136.456 320.809 135.713C319.835 134.963 319.088 134.302 318.568 133.728C317.151 132.162 316.725 130.578 317.29 128.975C317.583 128.142 318.077 127.483 318.772 126.998C319.476 126.509 320.331 126.235 321.335 126.178C322.347 126.123 323.4 126.289 324.494 126.677C325.595 127.067 326.505 127.615 327.224 128.323C327.945 129.023 328.415 129.821 328.631 130.715C328.855 131.613 328.804 132.524 328.478 133.449L325.302 132.324C325.551 131.618 325.521 130.992 325.213 130.446C324.908 129.893 324.353 129.475 323.549 129.19C322.772 128.915 322.11 128.867 321.563 129.046C321.018 129.219 320.651 129.573 320.462 130.11C320.285 130.611 320.388 131.12 320.769 131.637C321.158 132.156 321.791 132.737 322.667 133.381C324.282 134.564 325.361 135.705 325.903 136.802C326.445 137.9 326.505 139.049 326.082 140.249C325.611 141.584 324.737 142.454 323.459 142.859C322.184 143.257 320.692 143.154 318.984 142.549C317.799 142.129 316.795 141.531 315.973 140.756C315.153 139.973 314.619 139.113 314.37 138.175C314.128 137.239 314.182 136.274 314.533 135.278L317.719 136.406C317.12 138.108 317.836 139.319 319.869 140.039C320.624 140.306 321.267 140.363 321.797 140.209C322.33 140.048 322.694 139.693 322.888 139.142ZM339.353 149.524L336.177 148.399L338.506 141.789L332.313 139.596L329.984 146.206L326.808 145.081L332.242 129.659L335.418 130.784L333.216 137.033L339.409 139.226L341.611 132.977L344.787 134.101L339.353 149.524Z"
                          fill="#BBBBBB"
                        />
                        <path
                          d="M342.625 148.99C342.796 148.503 343.098 148.165 343.53 147.977C343.968 147.79 344.435 147.785 344.929 147.96C345.43 148.137 345.789 148.435 346.007 148.854C346.232 149.275 346.258 149.729 346.086 150.216C345.917 150.697 345.617 151.031 345.185 151.22C344.756 151.401 344.287 151.402 343.779 151.222C343.278 151.045 342.918 150.75 342.697 150.339C342.48 149.92 342.456 149.471 342.625 148.99Z"
                          fill={primary.primary}
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                {/* <p>Scroll down slowly to see animation</p> */}
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
              <div className="w-full h-full relative">
                <Image
                  className=""
                  src="/subash.jpg"
                  alt="chaudhary subash"
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
            <div className="animate-description bg-secondaryDark md:col-span-3 p-10">
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
