import Layout from "../components/Layout";
import Head from "next/head";
import Button from "../components/button/Button";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";

function contact() {
  return (
    <>
      <Head>
        <title>Contact - Subash</title>
      </Head>
      <Layout>
        <div className="mt-12 mx-5">
          {/* You can reach us via email <strong>imsuubash@gmail.com</strong> */}
          <h1 className="text-3xl font-semibold mb-2">Contact Me</h1>
          <div className="grid md:grid-cols-7 gap-5">
            <div className="md:col-span-3">
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
            <div className="md:col-span-2 p-2">
              <div className="imageContainer rounded-lg">
                <Image
                  className="image rounded-lg"
                  alt="Selfie of Mr Subash Chaudhary wearing jeans jacket at sangha."
                  src="/subash.jpg"
                  layout="fill"
                  objectPosition="right"
                  quality={30}
                />
              </div>
            </div>
            <div className="md:col-span-2 p-2">
              <div className="imageContainer">
                <Image
                  className="image rounded-lg"
                  alt="Subash chaudhary on a shirt."
                  src="/subashv2.jpg"
                  layout="fill"
                  objectFit="cover"
                  quality={30}
                />
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-lg mb-2 font-semibold">Contact via phone</h2>
            <p className="mb-5">
              Due to some privacy reasons, contacting via phone is unavailable!
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-lg mb-2 font-semibold">Via social media</h2>
            <div className="flex items-center gap-x-2">
              <a
                href="https://www.facebook.com/SubashTharu.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook className="w-6 h-6 cursor-pointer hover:text-[#4267B2]" />
              </a>

              <a
                href="https://www.instagram.com/subash.002/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram className="w-6 h-6 cursor-pointer hover:text-[#cd486b]" />
              </a>

              <a
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

export default contact;
