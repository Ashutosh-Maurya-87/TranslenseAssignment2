import React from "react";
import { data } from "../../Data";
import { Card, CardBody, Col, Row } from "reactstrap";
import firstImage from "../../../assets/Images/pic01.jpg";

const Massively = () => {
  return (
    <div className="container">
      <section>
        <Row>
          <Col className="text-center columnSection">
            <div className="date">
              <h6>
                <span className="dateMonth">April 25, 2017</span>
              </h6>
            </div>
            <div className="firstSection">
              <h1 className="massiveHeading">AND THIS IS A MASSIVE HEADLINE</h1>
              <p>
                Aenean ornare velit lacus enim ullamcorper proin aliquam
                facilisis ante sd etiam magna interdum congue. Lorem ipsum dolor
                amet nullam sed etiam veroeros
              </p>
            </div>
            <img src={firstImage} alt="imageFirst" className="fistImage" />
            <button className="firstColumnBtn">FULL STORY</button>
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          {data.map((item, index) => {
            return (
              <>
                <Col
                  key={index}
                  sm={12}
                  md={6}
                  lg={6}
                  className="border column"
                >
                  <p className="cardDate">{item.date}</p>
                  <h1 className="cardHeading">{item.heading}</h1>
                  <span>{item.image}</span>
                  <p className="cardPara">{item.para}</p>
                  <button className="cardButton">FULL STORY</button>
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
