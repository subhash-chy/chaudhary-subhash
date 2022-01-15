import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState, useRef } from "react";
import Link from "next/link";
import { navLinks } from "./navigation-links/navlinks";
import gsap from "gsap";

function Header() {
  const navRef = useRef();

  const [showMenu, setShowMenu] = useState(true);
  function toggleNav() {
    if (navRef.current.classList.contains("hidden")) {
      navRef.current.classList.remove("hidden");
      navRef.current.classList.add("flex");
    } else {
      navRef.current.classList.remove("flex");
      navRef.current.classList.add("hidden");
    }
    gsap.from(".slide-nav", {
      y: -600,
      opacity: 0,
      height: 0,
    });
    setShowMenu(!showMenu);
  }

  return (
    <div className="z-50 backdrop-blur-md sticky top-0 max-h-min px-5 py-2 md:flex items-center justify-between bg-secondaryDark/90 text-gray-100">
      <div className="max-h-min flex items-center justify-between opacity-100">
        <Link href="/">
          <a className="font-bold text-xl">
            SUBASH <span className="text-primary text-xs">.c</span>
          </a>
        </Link>

        {/* <p className="">{router.pathname !== "/" && path}</p> */}

        <div className="md:hidden flex items-center gap-x-2">
          <h2>Menu</h2>
          <div
            // onClick={() => setShowMenu(!showMenu)}
            onClick={() => {
              toggleNav();
            }}
            className="cursor-pointer"
          >
            {showMenu ? (
              <HiMenuAlt3 className="w-6 h-6" />
            ) : (
              <HiX className="w-6 h-6" />
            )}
          </div>
        </div>
      </div>
      <div
        ref={navRef}
        className="max-h-min slide-nav text-center hidden h-full md:flex flex-col md:flex-row gap-5 justify-end"
      >
        {navLinks.map((navLink) => (
          <Link key={navLink.name} href={navLink.path} passHref>
            <p className="py-3 md:py-0 font-bold md:font-normal w-full md:w-max cursor-pointer duration-150 hover:text-gray-100">
              {navLink.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Header;
