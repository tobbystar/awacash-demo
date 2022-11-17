import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import LogoDark from "../../../images/awacashlogo.png";
import {
  BlockHead,
  BlockTitle,
  Button,
  Icon,
  BlockDes,
  BlockHeadContent,
  Block,
  BlockBetween,
} from "../../../components/Component";
import { invoiceData } from "./Invoice";
import { Link } from "react-router-dom";

const CustomerReportDetails = ({ match }) => {
  const [data] = useState(invoiceData);
  const [user, setUser] = useState();

  useEffect(() => {
    const id = match.params.id;
    if (id !== undefined || null || "") {
      let spUser = data.find((item) => item.id === Number(id));
      setUser(spUser);
    } else {
      setUser(data[0]);
    }
  }, [match.params.id, data]);

  return (
    <React.Fragment>
      <Head title="Customer Report Detail"></Head>
      {user && (
        <Content>
          <BlockHead>
            <BlockBetween className="g-3">
              <BlockHeadContent>
                <BlockTitle>
                  Customer Report <strong className="text-primary small">#{user.orderId}</strong>
                </BlockTitle>
                <BlockDes className="text-soft">
                  <ul className="list-inline">
                    <li>
                      Created At: <span className="text-base">{user.date}</span>
                    </li>
                  </ul>
                </BlockDes>
              </BlockHeadContent>
              <BlockHeadContent>
                <Link to={`${process.env.PUBLIC_URL}/customer-report-list`}>
                  <Button color="light" outline className="bg-white d-none d-sm-inline-flex">
                    <Icon name="arrow-left"></Icon>
                    <span>Back</span>
                  </Button>
                </Link>
                <Link to={`${process.env.PUBLIC_URL}/customer-report-list`}>
                  <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
                    <Icon name="arrow-left"></Icon>
                  </Button>
                </Link>
              </BlockHeadContent>
            </BlockBetween>
          </BlockHead>

          <Block>
            <div className="invoice">
              <div className="invoice-action">
                <Link to={`${process.env.PUBLIC_URL}/customer-report-print/${user.id}`} target="_blank">
                  <Button size="lg" color="primary" outline className="btn-icon btn-white btn-dim">
                    <Icon name="printer-fill"></Icon>
                  </Button>
                </Link>
              </div>
              <div className="invoice-wrap">
                <div className="invoice-brand text-center">
                  <img src={LogoDark} alt="" />
                </div>

                <div className="invoice-head">
                  <div className="invoice-contact">
                    {/*<span className="overline-title">Invoice To</span>*/}
                    <div className="invoice-contact-info">
                      <h4 className="title">{user.name}</h4>
                      <ul className="list-plain">
                        <li>
                          <Icon name="map-pin-fill"></Icon>
                          <span>
                            House #65, 4328 Marion Street
                            <br />
                            Newbury, VT 05051
                          </span>
                        </li>
                        <li>
                          <Icon name="call-fill"></Icon>
                          <span>{user.phone}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="invoice-desc">
                    <h3 className="title">Customer Report</h3>
                    <ul className="list-plain">
                      <li className="invoice-id">
                        <span>Report ID</span>:<span>{user.orderId}</span>
                      </li>
                      <li className="invoice-date">
                        <span>Date</span>:<span>{user.date.split(",")[0]}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="invoice-bills">
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <thead>
                      <tr>
                        <th className="w-150px">SN</th>
                        <th className="w-150px">Complaint</th>
                        <th className="w-150px">Status</th>
                        {/*<th>Amount</th>*/}
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>24108054</td>
                        <td>Conceptual App Dashboard</td>
                        <td>Resolved</td>

                      </tr>
                      <tr>
                        <td>24108054</td>
                        <td>24 months premium support</td>
                        <td>Pending</td>

                      </tr>
                      <tr>
                        <td>23604094</td>
                        <td> Management Dashboard</td>
                        <td>Resolved</td>

                      </tr>
                      <tr>
                        <td>23604094</td>
                        <td>6 months premium support</td>
                        <td>Pending</td>
                      </tr>
                      </tbody>

                    </table>

                  </div>
                </div>
              </div>
            </div>
          </Block>
        </Content>
      )}
    </React.Fragment>
  );
};
export default CustomerReportDetails;
