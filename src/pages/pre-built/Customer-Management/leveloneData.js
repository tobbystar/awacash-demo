import React from 'react'
import { Col } from "../../../components/grid/Grid";
import { BlockHead, BlockHeadContent, BlockTitle } from "../../../components/block/Block";
import { Card } from "reactstrap";
import { Icon } from "../../../components/Component";
import { customerData } from "./CustomerData";

function levelOneData() {
  return (
    <div>
      <Col lg="6">
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle tag="h5">Applicant Information</BlockTitle>
            <p>Basic info, like name, phone, address, country etc.</p>
          </BlockHeadContent>
        </BlockHead>
        <Card className="card-bordered">
          <ul className="data-list is-compact">
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">First Name</div>
                <div className="data-value">{user.name.split(" ")[0]}</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Last Name</div>
                <div className="data-value">{user.name.split(" ").pop()}</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Middle Name</div>
                <div className="data-value">{user.name.split(" ").pop()}</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Email Address</div>
                <div className="data-value">info@softnio.com</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Phone Number</div>
                <div className="data-value text-soft">
                  <em>Not available</em>
                </div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Date of Birth</div>
                <div className="data-value">28 Oct, 2015</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Country of Residence</div>
                <div className="data-value">Kenya</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Full Address</div>
                <div className="data-value">6516, Eldoret, Uasin Gishu, 30100</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Wallet Type</div>
                <div className="data-value">Bitcoin</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Wallet Address</div>
                <div className="data-value text-break">1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX</div>
              </div>
            </li>
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Telegram</div>
                <div className="data-value">
                  <span>@tokenlite</span>{" "}
                  <a href="https://t.me/tokenlite">
                    <Icon name="telegram"></Icon>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </Card>
      </Col>
    </div>
  );
}

export default levelOneData;