import React from "react";
import { Link } from "react-router-dom";
import { pullRight, h1 } from "./Layout.css";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Link to="/">
        <h1 className={h1}>webpack-react</h1>
      </Link>
      {children}
      <p className={pullRight}>by Yasin Vural</p>
    </React.Fragment>
  );
};

export default Layout;
