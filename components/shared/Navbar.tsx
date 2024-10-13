"use client";

import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LogoDark from "@/public/shared-img/logo-dark.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  const navItems = [
    { id: 1, text: "Our Company", link: "/about" },
    { id: 2, text: "Locations", link: "/location" },
    { id: 3, text: "Contact", link: "/contacts" },
  ];

  const desktopNav = (
    <ul className="hidden md:flex">
      {navItems.map((item) => (
        <li
          key={item.id}
          className="px-7 hover:bg-[#fde1da] py-2 uppercase rounded-xl text-md cursor-pointer duration-300 hover:text-black"
        >
          <Link href={item.link}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );

  const mobileNav = (
    <ul
      className={
        navIsOpen
          ? "fixed z-40 md:hidden left-0 top-0 w-[60%] h-full border-r border-r-[#f5a998] bg-slate-50 ease-in-out duration-500"
          : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
      }
    >
      {/* Mobile Logo */}
      <div className="m-4">
        <Link href="/">
          <Image src={LogoDark} alt="logo" width={130} />
        </Link>
      </div>

      {/* Mobile Navigation Items */}
      {navItems.map((item) => (
        <li
          key={item.id}
          className="p-4 border-b rounded-xl hover:bg-[#f5a998] duration-300 hover:text-black cursor-pointer border-[#f5a998]"
        >
          <Link href={item.link}>{item.text}</Link>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="mb-5 bg-slate-50 w-full flex justify-between items-center h-24 mx-auto px-4 text-black">
      <div className="lg:mx-36 mx-0">
        {/* Logo */}
        <Link href="/">
          <Image src={LogoDark} alt="logo" width={170} />
        </Link>
      </div>
      <div className="lg:mx-32 mx-0">{desktopNav}</div>
      <div onClick={toggleNav} className="block md:hidden">
        {navIsOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {mobileNav}
    </div>
  );
};

export default Navbar;
