import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 px-3 md:px-24 lg:px-48">
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
      <div className="flex flex-col md:flex-row py-10 gap-12">
        <div className="flex flex-col md:flex-row md:w-1/2 gap-12 md:gap-1">
          <div className="flex flex-col items-start gap-4 md:w-1/3">
            <h3 className="text-xs font-bold text-gray-400">OVERVIEW</h3>
            <span className="text-sm font-medium">Overview</span>
            <span className="text-sm font-medium">Landings</span>
            <span className="text-sm font-medium">Company</span>
            <span className="text-sm font-medium">Pricing</span>
            <span className="text-sm font-medium">CMS Pages</span>
            <span className="text-sm font-medium">Accounts</span>
            <span className="text-sm font-medium">Buy for Figma</span>
          </div>
          <div className="flex flex-col items-start gap-4 md:w-1/3">
            <h3 className="text-xs font-bold text-gray-400">PAGES</h3>
            <h3 className="text-sm font-medium">Landing 1</h3>
            <h3 className="text-sm font-medium">Landing 2</h3>
            <h3 className="text-sm font-medium">Landing 3</h3>
            <h3 className="text-sm font-medium">Company 1</h3>
            <h3 className="text-sm font-medium">Company 2</h3>
            <h3 className="text-sm font-medium">Comapny 3</h3>
            <h3 className="text-sm font-medium">Blog 1</h3>
            <h3 className="text-sm font-medium">Blog 2</h3>
            <h3 className="text-sm font-medium">Contact 1</h3>
            <h3 className="text-sm font-medium">Contact 2</h3>
            <h3 className="text-sm font-medium">Contact 3</h3>
          </div>
          <div className="flex flex-col items-start gap-4 md:w-1/3">
            <h3 className="text-xs font-bold text-gray-400">PAGES</h3>
            <h3 className="text-sm font-medium">Case Studies</h3>
            <h3 className="text-sm font-medium">Careers</h3>
            <h3 className="text-sm font-medium">Pricing 1</h3>
            <h3 className="text-sm font-medium">Pricing 2</h3>
            <h3 className="text-sm font-medium">Pricing 3</h3>
            <h3 className="text-sm font-medium">Login</h3>
            <h3 className="text-sm font-medium">Register</h3>
            <h3 className="text-sm font-medium">Forgot Password</h3>
            <h3 className="text-sm font-medium">Bog Post</h3>
            <h3 className="text-sm font-medium">Team Member</h3>
            <h3 className="text-sm font-medium">Case Study</h3>
            <h3 className="text-sm font-medium">Job Post</h3>
          </div>
        </div>
        <div>
          <form className="flex border border-gray-100 p-1">
            <input
              type="email"
              placeholder="Email address"
              className="p-4 text-sm text-gray-300 w-1/2 md:w-2/3 outline-none"
            />
            <button className="bg-blue-700 text-white py-2 px-4 text-sm w-1/2 md:w-1/3">
              Get Started
            </button>
          </form>
          <div className="flex justify-between py-9 w-full">
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xs text-gray-300 font-bold">
                OPUS FOR WEBFLOW
              </h3>
              <h2 className="text-2xl font-bold text-blue-700">Lorem Ipsum</h2>
            </div>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-xs text-gray-300 font-bold">
                OPUS FOR FIGMA
              </h3>
              <h2 className="text-2xl font-bold text-blue-700">Lorem Ipsum</h2>
            </div>
          </div>
          <p className="text-gray-400">
            © Template by <span className="text-blue-700">Lorem</span> - Powered
            by <span className="text-blue-700">Ipsum</span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center md:justify-start border-t border-gray-100 py-8 gap-5 text-gray-500 text-sm">
        <h3>Style Guide</h3>
        <h3>Licence</h3>
        <h3>Changelog</h3>
      </div>
    </footer>
  );
};

export default Footer;
