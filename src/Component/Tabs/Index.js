import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col } from "reactstrap";
import ElementRef from "./ElementsReference/Index";
import GenericPage from "./GenericPage/Index";
import Massively from "./Massively/Index";
import "./TabComponent.css";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const TabsComponent = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <div className="d-flex">
            <Tab>THIS IS MASSIVELY</Tab>
            <Tab>GENERIC PAGE</Tab>
            <Tab>ELEMENTS REFERENCE</Tab>
          </div>
          <div className="iconFa">
            <FaTwitter className="fa-icon"/>
            <FaFacebook className="fa-icon"/>
            <FaInstagram className="fa-icon"/>
            <FaGithub className="fa-icon"/>
          </div>
        </TabList>
        <TabPanel>
          <Massively />
        </TabPanel>
        <TabPanel>
          <GenericPage />
        </TabPanel>
        <TabPanel>
          <ElementRef />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
