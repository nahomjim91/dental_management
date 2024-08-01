"use client";

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import Link from "next/link";
import { motion } from "framer-motion";

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleLinkClick = () => {
    setOpenMenu(false);
  };

  return (
    <nav className="text-primary xl:hidden">
      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="text-3xl cursor-pointer"
      >
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20 p-6"
      >
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
        >
          <IoMdClose />
        </div>

        <ul
          className={`h-full flex flex-col justify-center items-center gap-y-5 text-primary font-primary font-bold text-2xl ${
            openMenu ? "block" : "hidden"
          }`}
        >
        
          <li>
            <Link href="/">
              <div onClick={handleLinkClick} className="w-full text-2xl ">
                Home
              </div>
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <div onClick={handleLinkClick} className="w-full text-2xl">
                Portfolio
              </div>
            </Link>
          </li>
          <li>
            <Link href="/myservice">
              <div onClick={handleLinkClick} className="w-full text-2xl">
                My service
              </div>
            </Link>
          </li>
          <li>
            <Link href="/packageslist">
              <div onClick={handleLinkClick} className="w-full text-2xl">
                Packages
              </div>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div onClick={handleLinkClick} className="w-full text-2xl">
                About
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div onClick={handleLinkClick} className="w-full text-2xl">
                Contact
              </div>
            </Link>
          </li>
          <ul className=" flex flex-col gap-y-1 text-center ">
          
          </ul>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
