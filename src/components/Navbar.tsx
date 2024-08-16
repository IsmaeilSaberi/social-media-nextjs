import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="">
      {/* LEFT */}
      <div className="">
        <Link href={"/"}>ISMAEILSOCIAL</Link>
      </div>
      {/* CENTER */}
      <div className="hidden"></div>
      {/* RIGHT */}
      <div className="">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
