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
import { levelone } from "./Levelone";

import { Link } from "react-router-dom";

const CustomerDetails = ({ match }) => {
  const [user, setUser] = useState();
  const id = match.params.id;

  useEffect(() => {
    console.log(id);

    // if (id !== undefined || null || "") {
    //   let spUser = data.find((item) => item.id === id);
    //   +setUser(spUser);
    // } else {
    //   setUser(data[0]);
    // }
  });

  return (
    <React.Fragment>
      <Head title="Customer Details "></Head>
      <Content>
        <BlockTitle page>
          {id === "1" ? (
           <levelone/>
          ) : id === "2" ? (
            <strong className="text-primary small">Level 2</strong>
          ) : (
            <strong className="text-primary small">level 3</strong>
          )}
        </BlockTitle>
      </Content>
    </React.Fragment>
  );
};
export default CustomerDetails;
