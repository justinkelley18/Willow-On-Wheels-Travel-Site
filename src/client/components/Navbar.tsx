import * as React from "react";
import { NavLink } from "react-router-dom";
import Youtube from "./Svg/Youtube";
import Insta from "./Svg/Insta";

const NavBar: React.FC<NavBarProps> = (props) => {
  return (
    <div className="JMB jumbotron-fluid fixed-top">
  <div className="center container ">
    <h1 className="title display-4">WILLOW ON WHEELS</h1>
    <NavLink
        exact
        className="font-weight-light mx-5"
        activeClassName="text font-weight-bold"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="font-weight-light mx-5"
        activeClassName="text font-weight-bold"
        to="/About"
      >
        About Us
      </NavLink>

      <NavLink
        className="font-weight-light mx-5"
        activeClassName="text font-weight-bold"
        to="/busbuild"
      >
        Our Build
      </NavLink>
      <NavLink
        className="font-weight-light mx-5"
        activeClassName="text font-weight-bold"
        to="/shop"
      >
        Shop
      </NavLink>
      <div className="topNavRight">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link" href="https://www.instagram.com/willowonwheels_/" target="_blank">
            <Insta />
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="https://www.youtube.com/channel/UCSdIbWTGlEZFJfNRLx5tSsQ" target="_blank">
            <Youtube />
          </a>
        </li>
      </ul>
      </div>
  </div>
</div>
  );
};

interface NavBarProps { }

export default NavBar;