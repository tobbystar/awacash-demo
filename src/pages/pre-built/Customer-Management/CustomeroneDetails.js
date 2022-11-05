import React, { useEffect, useState } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import { Badge, Card } from "reactstrap";
import {
  Button,
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  Icon,
  Row,
  Col,
  UserAvatar,
} from "../../../components/Component";
import { findUpper } from "../../../utils/Utils";

import { customerData } from "./CustomerData";

import { Link, useParams } from "react-router-dom";

function CustomerOneDetails({id}) {

  //const {id} = props;
  //console.log(props);

  const details = customerData.filter((e) => e.id === id);

  console.log(details);

  return (
    <React.Fragment>
      <Head title="Customer Details "></Head>
      <Content >
        <BlockHeadContent className="back-arrow">
          <Link to={`${process.env.PUBLIC_URL}/customer-management`}>
            <Button color="light" outline className="bg-white d-none d-sm-inline-flex align='right'">
              <Icon name="arrow-left"></Icon>
              <span>Back</span>
            </Button>
            <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
              <Icon name="arrow-left"></Icon>
            </Button>
          </Link>
        </BlockHeadContent>

        <BlockTitle page>
          <Content>
            <Col lg="6">
              <BlockHead>
                <BlockHeadContent>
                  <BlockTitle tag="h5" padding="auto">
                    Applicant Information
                  </BlockTitle>
                </BlockHeadContent>
              </BlockHead>


              <img src={details[0].image} alt="" />
              <img src={details[0].avatarBg} alt="" />
              <Card className="card-bordered">
                <ul className="data-list is-compact">
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">First Name</div>
                      <div className="data-value">{details[0].Firstname}</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Middle Name</div>
                      <div className="data-value">{details[0].Middlename}</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Last Name</div>
                      <div className="data-value">{details[0].Lastname}</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Email Address</div>
                      <div className="data-value">{details[0].email}</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Phonenumber</div>
                      <div className="data-value">{details[0].Phonenumber}</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">BVN</div>
                      <div className="data-value text-soft">
                        <em>{details[0].BVN}</em>
                      </div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Date of Birth</div>
                      <div className="data-value">{details[0].dob}</div>
                    </div>
                  </li>
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Full Address</div>
                      <div className="data-value">{details[0].Fulladdress}</div>
                    </div>
                  </li>
                </ul>
              </Card>
            </Col>
          </Content>
        </BlockTitle>

        <BlockTitle page>
          <Content>
            <Col lg="6">
              <BlockHead>
                <BlockHeadContent>
                  <BlockTitle tag="h5">Next of Kin</BlockTitle>
                </BlockHeadContent>
              </BlockHead>
              <Card className="card-bordered">
                <ul className="data-list is-compact">
                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">First Name</div>
                      <div className="data-value">{details[0].nokFirstName}</div>
                    </div>
                  </li>

                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Middle Name</div>
                      <div className="data-value">{details[0].Nokmiddlename}</div>
                    </div>
                  </li>

                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">last Name</div>
                      <div className="data-value">{details[0].Noklastname}</div>
                    </div>
                  </li>

                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Email</div>
                      <div className="data-value">{details[0].Nokemail}</div>
                    </div>
                  </li>

                  <li className="data-item">
                    <div className="data-col">
                      <div className="data-label">Resident Address</div>
                      <div className="data-value">{details[0].Residentaddress}</div>
                    </div>
                  </li>
                </ul>
              </Card>
            </Col>
          </Content>
        </BlockTitle>
      </Content>
    </React.Fragment>
  );
}

export default CustomerOneDetails;
