import React from "react";
import { Subscribe, SocialLinks } from "./";
import Image from "next/image";
import Ad2 from "/public/assets/ad-2.png";
import AboutProfile from "/public/assets/about-profile.jpg";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className="bg-wh-900  px-5 text-xs font-bold text-center py-3 text-wh-50 ">
        Subscribe and Follow
      </h4>
      <div className="my-5 mx-5">
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className="bg-wh-900 my-8">
        <Image
          src={Ad2}
          alt="Advert image"
          className="hidden md:block my-8 w-full"
          width={500}
          height={1000}
        />
      </div>
      <h4 className="bg-wh-900  px-5 text-xs font-bold text-center py-3 text-wh-50 ">
        About the Blog
      </h4>
      <div className="flex justify-center my-3">
        <Image
          src={AboutProfile}
          alt="Advert image"
          style={{ width: "500px", height: "250px", objectFit: "cover" }}
        />
      </div>
      <h4 className="  px-5  font-bold text-center py-3 text-wh-500 ">
        Geoffrey Epstein
      </h4>
      <p className="text-wh-500 text-center text-sm">
        Consequat id deserunt in officia aute.
      </p>
    </section>
  );
};

export default Sidebar;
