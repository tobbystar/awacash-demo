import React, { useState, useEffect } from "react";
import { Col } from "../../../components/grid/Grid";
import { BlockHead, BlockHeadContent, BlockTitle } from "../../../components/block/Block";
import { Card } from "reactstrap";
import { Icon } from "../../../components/Component";
import { customerData } from "./CustomerData";

function CustomerQuickView() {
  const [user, setUser] = useState(customerData);
  return (
    <div>

      <Col lg="6">
        <BlockHead>
          <BlockHeadContent>
            <BlockTitle tag="h5">Applicant Information</BlockTitle>
          </BlockHeadContent>
        </BlockHead>
        <Card className="card-bordered">
          <ul className="data-list is-compact">
            <li className="data-item">
              <div className="data-col">
                <div className="data-label">First Name</div>
                <div className="data-value">Tolu</div>
              </div>
            </li>

            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Middle Name</div>
                <div className="data-value">Emma</div>
              </div>
            </li>

            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Last Name</div>
                <div className="data-value">Adeagbo</div>
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
                <div className="data-label">BVN</div>
                <div className="data-value text-soft">
                  <em>2345556567</em>
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
                <div className="data-label">Full Address</div>
                <div className="data-value">6516, Eldoret, Uasin Gishu, 30100</div>
              </div>
            </li>
            <h5> Next of Kin:</h5>

            <li className="data-item">
              <div className="data-col">
                <div className="data-label">First Name</div>
                <div className="data-value">Tolulope</div>
              </div>
            </li>

            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Last Name</div>
                <div className="data-value">Tife</div>
              </div>
            </li>

            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Middle Name</div>
                <div className="data-value">Ade</div>
              </div>
            </li>

            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Email Address</div>
                <div className="data-value">@opeoluwa.com</div>
              </div>
            </li>

            <li className="data-item">
              <div className="data-col">
                <div className="data-label">Resident Address</div>
                <div className="data-value">No. 8 Nelson street</div>
              </div>
            </li>
          </ul>
        </Card>
      </Col>
    </div>
  );
}

export default CustomerQuickView;
