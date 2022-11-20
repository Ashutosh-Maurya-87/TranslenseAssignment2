import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Row, Col } from "reactstrap";
import ElementRef from "./ElementsReference/Index";
import GenericPage from "./GenericPage/Index";
import Massively from "./Massively/Index";
import "./TabComponent.css";

const TabsComponent = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>THIS IS MASSIVELY</Tab>
          <Tab>GENERIC PAGE</Tab>
          <Tab>ELEMENTS REFERENCE</Tab>
        </TabList>
        <TabPanel>
          {/* <Row> */}
            {/* <Col sm={12} lg={6} md={6}> */}
              <Massively />
            {/* </Col> */}
          {/* </Row> */}
        </TabPanel>
        <TabPanel>
          <Row>
            <Col sm={12} lg={6} md={6}>
              <GenericPage />
            </Col>
          </Row>
        </TabPanel>
        <TabPanel>
          <Row>
            <Col sm={12} lg={6} md={6}>
              <ElementRef />
            </Col>
          </Row>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabsComponent;
