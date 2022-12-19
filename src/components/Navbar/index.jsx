import React from "react";
import { Menu } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDown } from "react-icons/bs";

const SmNav = () => {
  return (
    <div className="flex md:hidden items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7">
          <img src="\images\Vector.png" alt="logo" className="w-full h-full" />
        </div>
        <div className="flex items-start">
          <img src="\images\Vector-1.png" alt="title" />
          <img src="\images\Vector-2.png" alt="title" />
          <img src="\images\Vector-3.png" alt="title" />
          <img src="\images\Vector-4.png" alt="title" />
        </div>
      </div>
      <div className="border border-gray-200 flex items-center justify-center p-3 text-blue-700">
        <GiHamburgerMenu />
      </div>
    </div>
  );
};

const LargeNav = () => {
  return (
    <div className="hidden md:flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7">
          <img src="\images\Vector.png" alt="logo" className="w-full h-full" />
        </div>
        <div className="flex items-start">
          <img src="\images\Vector-1.png" alt="title" />
          <img src="\images\Vector-2.png" alt="title" />
          <img src="\images\Vector-3.png" alt="title" />
          <img src="\images\Vector-4.png" alt="title" />
        </div>
      </div>
      <div className="flex items-center justify-between gap-12">
        <h3 className="text-sm font-medium text-gray-700">Overview</h3>
        <Menu as="div">
          <div>
            <Menu.Button className="flex items-center text-sm font-medium text-gray-700 gap-1">
              Pages
              <BsChevronDown size={10} />
            </Menu.Button>
          </div>
        </Menu>
        <h3 className="text-sm font-medium text-gray-700">Template</h3>
      </div>
      <button className="bg-blue-700 text-white py-2 px-4 text-sm">Contact Us</button>
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="px-3 py-6 md:px-24 md:py-9 lg:px-48">
      <SmNav />
      <LargeNav />
    </nav>
  );
};

export default Navbar;
