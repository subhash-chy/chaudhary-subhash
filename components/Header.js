import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import { navLinks } from "./navigation-links/navlinks";
// import { useRouter } from "next/router";

function Header() {
  // const router = useRouter();
  // let link = router.pathname;
  // const pathname = link.substring(1);
  // let path = pathname ? pathname[0]?.toUpperCase() + pathname?.slice(1) : "/";

  const [showMenu, setShowMenu] = useState(true);

  return (
    <div className="sticky top-0 z-50 px-5 py-2 bg-gray-100 dark:bg-secondaryDark dark:text-gray-100">
      <div className=" flex items-center justify-between ">
        <Link href="/">
          <a className="font-bold text-xl">Subash</a>
        </Link>

        {/* <p className="">{router.pathname !== "/" && path}</p> */}

        <div className="flex items-center gap-x-2">
          <h2>Menu</h2>
          <div
            onClick={() => setShowMenu(!showMenu)}
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

      {!showMenu && (
        <div className="text-center flex flex-col sm:flex-row gap-3 justify-end">
          {navLinks.map((navLink) => (
            <Link key={navLink.name} href={navLink.path}>
              <p className="py-3 sm:py-0 font-bold sm:font-normal w-full sm:w-max cursor-pointer duration-150 hover:bg-gray-200 sm:hover:bg-transparent sm:hover:scale-105">
                {navLink.name}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
