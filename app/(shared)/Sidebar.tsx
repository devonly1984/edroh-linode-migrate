import React from "react";
import { Subscribe, SocialLinks } from "./";

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
      <div className="bg-wh-900 my-8">advert image</div>
      <h4 className="bg-wh-900  px-5 text-xs font-bold text-center py-3 text-wh-50 ">
        About the Blog
      </h4>
      <div className="bg-wh-900 my-8">profile image</div>
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
