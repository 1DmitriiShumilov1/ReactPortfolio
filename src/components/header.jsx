import React from "react";
import Legend from "./common/legend";

const Header = () => {
  return (
    <header className="curved-bottom bg-primary bg-gradient header">
      <Legend />
      <div
        className={
          window.innerWidth < 600
            ? "p-4 text-center text-white no-margin"
            : "p-5 text-center text-white no-margin"
        }
      >
        <p className={window.innerWidth < 600 ? "display-3 " : "display-1"}>
          HELLO, I'M DMITRII
        </p>
        <p className={window.innerWidth < 600 ? null : "fs-3"}>
          Web Developer with functionality in mind
        </p>
      </div>
    </header>
  );
};

export function getHeaderHeight() {
  const headerHeight =
    document.getElementsByClassName("header")[0].clientHeight;
  return headerHeight;
}

export default Header;
