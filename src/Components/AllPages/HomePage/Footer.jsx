import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="container mx-auto">
        <footer className="footer footer-horizontal footer-center text-base-content rounded p-10">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Gadget Heaven</h1>
            <p className="text-base text-neutral-600 font-medium">
              Leading the way in cutting-edge technology and innovation.
            </p>
          </div>
          <div className="divider before:bg-slate-100 after:bg-transparent w-full"></div>
          <div className="footer text-center sm:footer-horizontal items-baseline">
            <nav className="flex flex-col items-center">
              <h6 className="text-lg font-bold text-black">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav className="flex flex-col items-center">
              <h6 className="text-lg font-bold text-black">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav className="flex flex-col items-center">
              <h6 className="text-lg font-bold text-black">Legal</h6>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
