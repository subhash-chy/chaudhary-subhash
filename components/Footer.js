import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsChevronRight,
} from "react-icons/bs";
import Button from "./button/Button";
import { navLinks } from "./navigation-links/navlinks";
import Link from "next/link";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  let link = router.pathname;
  const pathname = link.substring(1);
  let path = pathname ? pathname[0]?.toUpperCase() + pathname?.slice(1) : "/";

  return (
    <div className=" bg-secondaryDark text-gray-100 z-40 mt-20 py-12 px-5 w-full flex flex-col items-center text-center overflow-x-auto">
      {path != "/" && (
        <nav className="w-full text-gray-400 text-xs">
          <ol className="flex items-center gap-x-2">
            <li>
              <Link href="/">
                <a className="breadcrumb-right">Home</a>
              </Link>
            </li>
            <li>
              <BsChevronRight className="breadcrumb-right w-3 h-3" />
            </li>
            <li>
              <span className="breadcrumb-right">{path}</span>
            </li>
          </ol>
        </nav>
      )}

      <div className="f-slide-bottom mb-12 mt-5">
        <h1 className="fh-right text-xl font-bold mb-5">Subash Chaudhary</h1>
        <p className="fh-left">
          Want <strong>Free</strong> blogs on this site? Just Signin and you are
          good to go.
        </p>
      </div>

      <div className="f-slide-top mb-12 trigger-left">
        <p className="mb-5">Currently, the signup doesn&apos;t work!!</p>
        <div className="mb-5 flex items-center justify-center gap-x-2">
          <input
            type="email"
            placeholder="Your email"
            className="p-2 focus:outline-none  bg-cardDark"
          />
          <Button accent title="SIGN UP" />
        </div>
        <p className="text-xs">(Your email will not be shared with anyone)</p>
      </div>

      <div className="f-social-slide-bottom mb-12 flex items-center gap-x-2">
        <a
          className=""
          href="https://www.facebook.com/SubashTharu.0/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <BsFacebook className="w-6 h-6 cursor-pointer duration-150 hover:text-[#4267B2]" />
        </a>

        <a
          className=""
          href="https://www.instagram.com/subash.002/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <BsInstagram className="w-6 h-6 cursor-pointer duration-150 hover:text-[#cd486b]" />
        </a>

        <a
          className=""
          href="https://github.com/Suubash"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
        >
          <BsGithub className="w-6 h-6 cursor-pointer duration-150 hover:text-[#333333]" />
        </a>
      </div>

      <div className="mb-12 flex flex-wrap gap-5 justify-center">
        {/* <p className="font-semibold">About</p>
        <p className="font-semibold">Newsletter</p>
        <p className="font-semibold">Contact</p>
        <p className="font-semibold">Sell</p> */}
        {navLinks.map((navLink) => (
          <Link key={navLink.name} href={navLink.path} passHref>
            <p className="cursor-pointer hover:text-gray-100 duration-150">
              {navLink.name}
            </p>
          </Link>
        ))}
      </div>

      <div className="text-sm text-gray-300 fade-animation-scroll">
        <p>
          © Copyright 2021 SUBASH
          <span className="text-primary text-xs">.c</span>. All rights reserved.
        </p>
        <p className=" hover:text-gray-100">
          <Link href="/privacy-policy" className="cursor-pointer">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Footer;
