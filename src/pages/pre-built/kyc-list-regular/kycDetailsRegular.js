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
import { kycData } from "./KycData";
import { Link } from "react-router-dom";

const KycDetailsRegular = ({ match }) => {
  const [data] = useState(kycData);
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
      <Head title="KYC Details - Regular"></Head>
      <Content>
        <BlockTitle page>
          {id === "1" ? (
            <strong className="text-primary small">Hi</strong>
          ) : id === "2" ? (
            <strong className="text-primary small">hello</strong>
          ) : (
            <strong className="text-primary small">hey</strong>
          )}
        </BlockTitle>
      </Content>
    </React.Fragment>
  );
};
export default KycDetailsRegular;
