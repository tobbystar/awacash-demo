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
import CustomerOneDetails from "./CustomerOneDetails";
import CustomerTwoDetails from "./CustomerTwoDetails";
import CustomerThreeDetails from "./CustomerThreeDetails";

import { Link, useParams } from "react-router-dom";

const CustomerDetails = () => {
  //const [level, setLevel] = useState();

  const { id,level } = useParams();
  //console.log(id,typeof level);
  return (
    <React.Fragment>
      <Head title="Customer Details "></Head>
      <Content>
        <BlockTitle page>
          {level === "1" && <CustomerOneDetails id={id} />}
          {level === "2" && <CustomerTwoDetails id={id}/>}
          {level === "3" && <CustomerThreeDetails id={id}/>}
        </BlockTitle>
      </Content>
    </React.Fragment>
  );
};
export default CustomerDetails;
