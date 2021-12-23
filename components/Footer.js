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
import { useEffect } from "react";

// importing animation
import {
  fadeAnimation,
  triggerXSlide,
  triggerYSlide,
} from "../styles/animations";

function Footer() {
  useEffect(() => {
    // Here, fs= footer social
    triggerXSlide(".slide-fs-left");
    triggerXSlide(".fh-right");
    triggerXSlide(".fh-left");
    fadeAnimation(".fade-animation-scroll");

    // y-direction
    triggerYSlide(".f-slide-bottom ");
    triggerYSlide(".f-slide-top");
    triggerYSlide(".f-social-slide-bottom");
  }, []);
  const router = useRouter();

  let link = router.pathname;
  const pathname = link.substring(1);
  let path = pathname ? pathname[0]?.toUpperCase() + pathname?.slice(1) : "/";

  return (
    <div className=" bg-gray-100 dark:bg-secondaryDark dark:text-gray-100 z-40 mt-20 py-12 px-5 w-full flex flex-col items-center text-center">
      {path === "/" ? (
        ""
      ) : (
        <nav className="w-full text-gray-500 dark:text-gray-400 text-xs">
          <ol className="flex items-center gap-x-2">
            <Link href="/">
              <a>Home</a>
            </Link>
            <li>
              <BsChevronRight className="w-3 h-3" />
            </li>
            <li>
              <span>{path}</span>
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
        <p className="mb-5">Currently, the signup doesn't work!!</p>
        <div className="mb-5 flex items-center justify-center gap-x-2">
          <input
            type="text"
            placeholder="Your email"
            className="p-2 focus:outline-none text-primaryDark"
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
        >
          <BsFacebook className="w-6 h-6 cursor-pointer hover:text-[#4267B2]" />
        </a>

        <a
          className=""
          href="https://www.instagram.com/subash.002/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram className="w-6 h-6 cursor-pointer hover:text-[#cd486b]" />
        </a>

        <a
          className=""
          href="https://github.com/Suubash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="w-6 h-6 cursor-pointer hover:text-[#333333]" />
        </a>
      </div>

      <div className="mb-12 flex flex-wrap gap-5 justify-center">
        {/* <p className="font-semibold">About</p>
        <p className="font-semibold">Newsletter</p>
        <p className="font-semibold">Contact</p>
        <p className="font-semibold">Sell</p> */}
        {navLinks.map((navLink) => (
          <Link key={navLink.name} href={navLink.path}>
            <p className="cursor-pointer hover:scale-105 duration-150">
              {navLink.name}
            </p>
          </Link>
        ))}
      </div>

      <div className="text-sm text-gray-500 fade-animation-scroll">
        <p>© Copyright 2021 Subash. All rights reserved.</p>
        <li>
          <Link href="/privacy-policy" className="cursor-pointer">
            Privacy Policy
          </Link>
        </li>
      </div>
    </div>
  );
}

export default Footer;
