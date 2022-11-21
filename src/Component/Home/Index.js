import React from "react";
import TabsComponent from "../Tabs/Index";
import "./Home.css";
import { CgArrowDownO } from "react-icons/cg";
import Contact from "../ContactUs";

const Home = () => {
  return (
    <>
      <div className="homePage">
        <h1 className="headingName">
          <p className="massively">
            THIS IS
            <br />
            MASSIVELY
          </p>
          {/* <p></p> */}
        </h1>
        <p className="about">
          A free, fully responsive,HTML5+CSS3 site template designed by{" "}
          <a href="">@ajlkn</a> for <a href="https://html5up.net">HTML5 UP</a>{" "}
          and released for free under the{" "}
          <a href="">Creative Commons license.</a>
        </p>
        <CgArrowDownO className="arrowIcon" />
      </div>
      <TabsComponent />
      <Contact />
    </>
  );
};

export default Home;
