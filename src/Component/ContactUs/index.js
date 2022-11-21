import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Col, Form, FormGroup, Input, Label, Row, Button } from "reactstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Form className="form">
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleEmail">Name</Label>
              <Input id="name" name="name" placeholder="" type="text" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder=""
                type="email"
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Message</Label>
              <textarea
                id="textArea"
                name="textArea"
                placeholder=""
                type="text"
              />
            </FormGroup>
            <Button>SEND MESSAGE</Button>
          </Col>
          <Col sm={12} lg={6} md={6}>
            <Col sm={12} lg={2} md={2}>
              <p>Address</p>
            </Col>
            <Col sm={12} lg={10} md={10}>
              <p>1234 Somewhere Rad # 87257 Nashville, TN 00000-0000</p>
            </Col>
            <Col sm={12} lg={2} md={2}>
              <p>PHONE</p>
            </Col>
            <Col sm={12} lg={10} md={10}>
              <p>(000)000-0000</p>
            </Col>
            <Col sm={12} lg={2} md={2}>
              <p>EMAIL</p>
            </Col>
            <Col sm={12} lg={10} md={10}>
              <p>info@untitled.com</p>
            </Col>
            <Col sm={12} lg={2} md={2}>
              <p>SOCIAL MEDIA</p>
            </Col>
            <Col sm={12} lg={10} md={10}>
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
              <FaGithub />
            </Col>
          </Col>
        </Row>
      </Form>
      {/* <div class="row g-0 form-section">
        <div class="col-sm-6 col-md-6">
          {" "}
          <div class="form-left-side">
            <form>
              <div class="mb-3">
                <label for="exampleInputName1" class="form-label">
                  NAME
                </label>
                <input
                  type="type"
                  class="form-control"
                  id="exampleInputName1"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  EMAIL{" "}
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail 1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  MESSAGE
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="button" class="btn btn-outline-secondary">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
        <div class="col-6 col-md-6">
          <div class="form-right-side ">
            <form>
              <div class="mb-3 row border p-4 g-0">
                <label for="staticAddress" class="col-sm-2 col-form-label">
                  ADDRESS
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticAddress"
                    value="1234 Somewhere Rad # 87257  Nashville, TN 00000-0000"
                  />
                </div>
              </div>

              <div class="mb-3 row border p-4 g-0">
                <label for="staticAddress" class="col-sm-2 col-form-label">
                  PHONE
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticAddress"
                    value=""
                  />
                </div>
              </div>
              <div class="mb-3 row border p-4 g-0">
                <label for="staticAddress" class="col-sm-2 col-form-label">
                  EMAILE
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticAddress"
                    value=""
                  />
                </div>
              </div>
              <div class="mb-3 row border p-4 g-0">
                <label for="staticAddress" class="col-sm-2 col-form-label">
                  SOCIAL MEDIA
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    readonly
                    class="form-control-plaintext"
                    id="staticAddress"
                    value=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Contact;
