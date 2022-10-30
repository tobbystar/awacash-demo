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
import LevelOneData from "./LevelOneData";

import { Link } from "react-router-dom";
import LevelTwoData from "./LevelTwoData";
import LevelThreeData from "./LevelThreeData";

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


          {id === "1" ? <LevelOneData /> : id === "2" ? <LevelTwoData /> : <LevelThreeData />}
>>>>>>> 3d60d83fdcbe2283564a30226013680168a4534b
        </BlockTitle>
      </Content>
    </React.Fragment>
  );
};
export default CustomerDetails;
