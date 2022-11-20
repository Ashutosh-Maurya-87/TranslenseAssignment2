import React, { useState } from "react";
import "./Navbar.css";
const Navbar = (props) => {
  const { handleDesktopMode, handleMobile, handleTablet, handleTabletP } =
    props;
  return (
    <div id="container">
      <div className="left">
        <h2 className="h2">
          <span>Massively</span>
        </h2>
        <ul className="list">
          <li onClick={handleDesktopMode}>
            <a href="#">Desktop</a>
          </li>
          <li onClick={handleTablet}>
            <a href="#">Tablet</a>
          </li>
          <li onClick={handleTabletP}>
            <a href="#">Tablet (Portrait)</a>
          </li>
          <li onClick={handleMobile}>
            <a href="#">Mobile</a>
          </li>
        </ul>
        <a href="">
          {" "}
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <div className="right">
        <ul className="share ">
          <li className="like">
            <a href="https://www.facebook.com/" target="blank">
              <button className="likeBtn cursor-pointer">
                <i className="fa-solid fa-thumbs-up"></i>
                Like
              </button>
            </a>
          </li>

          <li className="tweet">
            <a href="https://www.twitter.com/" target="blank">
              <button className="tweetBtn cursor-pointer">
                <i className="fa-brands fa-twitter"></i>Tweet
              </button>
            </a>{" "}
          </li>
        </ul>
        <ul className="back cursor-pointer">
          <li> Back</li>
        </ul>
        <ul className="download cursor-pointer">
          <li className="dwld">
            {" "}
            <strong>Download </strong>(200,925)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
