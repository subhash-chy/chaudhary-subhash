import Layout from "../components/Layout";
import Head from "next/head";
import Button from "../components/button/Button";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import { useEffect } from "react";
import { triggerXSlide, fadeAnimation } from "../styles/animations";

function Contact() {
  useEffect(() => {
    triggerXSlide(".left");
    // triggerXSlide(".right");
    triggerXSlide(".animateSocial");
    fadeAnimation(".fade-animation");
  }, []);
  return (
    <>
      <Head>
        <title>Contact - Subash</title>
        <meta property="og:site_name" content="Chaudhary Subash" />
        <meta
          property="og:url"
          content="https://www.chaudharysubash.com.np/contact"
        />
        <meta property="og:title" content="Contact me" />
        <meta
          property="og:description"
          content="Note: Before sending any email, please be clear about what you want to communicate about and please do not try to spam the mail."
        />
      </Head>
      <Layout>
        <div className="mt-12 mx-5 md:mx-auto max-w-[70ch]">
          {/* You can reach us via email <strong>imsuubash@gmail.com</strong> */}
          <h1 className="text-3xl font-semibold fade-animation">Contact Me</h1>
          <div className="mt-5">
            <div className="fade-animation">
              <h2 className="text-lg mb-2 font-semibold">Contact via email</h2>
              <p className="mb-5">
                <strong>Note:</strong> Before sending any email, please be clear
                about what you want to communicate about and please do not try
                to spam the mail.
              </p>
              <p className="mb-5">
                <strong>Email:</strong> imsuubash@gmail.com
              </p>
              <Button
                onClick={() =>
                  window.open(
                    "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJvnrLKTbwflRnFkJbxttBfhwldvDHgXpkKGfDrhmjVSJhVWjkDpQLrQjcBSqdCffTxmvCL",
                    "_blank",
                    "noopener noreferrer"
                  )
                }
                title="SEND MAIL"
                accent
              />
            </div>
            <div className="mt-5">
              {/* <div className="imageContainer fade-animation">
                <Image
                  className="image"
                  alt="Selfie of Mr Subash Chaudhary wearing jeans jacket at sangha."
                  src="/subash.jpg"
                  layout="fill"
                  objectPosition="right"
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
          </div>

          <div className="left mt-12">
            <h2 className="text-lg mb-2 font-semibold">Contact via phone</h2>
            <p className="mb-5">
              Due to some privacy reasons, contacting via phone is unavailable!
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-lg mb-2 font-semibold animateSocial">
              Via social media
            </h2>
            <div className="flex items-center gap-x-2">
              <a
                className="animateSocial"
                href="https://www.facebook.com/SubashTharu.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="w-6 h-6 cursor-pointer hover:text-[#4267B2]" />
              </a>

              <a
                className="animateSocial"
                href="https://www.instagram.com/subash.002/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="w-6 h-6 cursor-pointer hover:text-[#cd486b]" />
              </a>

              <a
                className="animateSocial"
                href="https://github.com/Suubash"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="w-6 h-6 cursor-pointer hover:text-[#333333]" />
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contact;
