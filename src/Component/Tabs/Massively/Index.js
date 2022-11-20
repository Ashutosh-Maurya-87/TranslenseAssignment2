import React from "react";
import { data } from "../../Data";
import { Card, CardBody, Col, Row } from "reactstrap";
import firstImage from "../../../assets/Images/pic01.jpg";

const Massively = () => {
  return (
    <div className="container">
      <section>
        <Row>
          <Col className="text-center">
            <div className="firstSection">
              <p>April 25, 2017</p>
              <h1>AND THIS IS A MASSIVE HEADLINE</h1>
              <p>
                Aenean ornare velit lacus enim ullamcorper proin aliquam
                facilisis ante sd etiam magna interdum congue. Lorem ipsum dolor
                amet nullam sed etiam veroeros
              </p>
            </div>
            <img src={firstImage} alt="imageFirst" className="fistImage" />
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          {data.map((item, index) => {
            return (
              <>
                <Col key={index} sm={12} md={6} lg={6} className="border">
                  <p>{item.date}</p>
                  <h1>{item.heading}</h1>
                  <span>{item.image}</span>
                  <p>{item.para}</p>
                  <button>Full Story</button>
                </Col>
              </>
            );
          })}
        </Row>
      </section>
    </div>
  );
};

export default Massively;
