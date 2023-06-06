import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">Blog of the Future</h4>
          <p className="my-5">Lorem ipsum</p>
          <p className=""> Blog of the Future All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links </h4>
          <p className="my-5">lorem ipsum</p>
          <p className="my-5">lorem ipsum</p>
          <p>lorem ipsum</p>
        </div>
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">lorem ipsum</p>
          <p>(555)555-5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
