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
import   CustomerOneDetails  from "./CustomerOneDetails";
import  CustomerTwoDetails  from "./CustomerTwoDetails";
import  CustomerThreeDetails  from "./CustomerThreeDetails";

import { Link, useParams } from "react-router-dom";

const CustomerDetails = ({ match }) => {
   const [level, setLevel] = useState();

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
            {id === "1" ? <CustomerOneDetails /> : id === "2" ? <CustomerTwoDetails  />: <CustomerThreeDetails  />}

        </BlockTitle>
      </Content>
    </React.Fragment>
  );
};
export default CustomerDetails;

// function CustomerDetails() {
//   const { id } = useParams();
//   const details = customerData.filter((e) => e.id === id);
//   // console.log(id);
//   console.log(details[0]);

//   return (
//     <React.Fragment>

//       <Head title="Customer Details "></Head>
//       <Content>

//               <BlockHeadContent >
//                 <Link to={`${process.env.PUBLIC_URL}/customer-management`}>
//                   <Button color="light" outline className="bg-white d-none d-sm-inline-flex align='right'">
//                     <Icon name="arrow-left"></Icon>
//                     <span>Back</span>
//                   </Button>
//                   <Button color="light" outline className="btn-icon bg-white d-inline-flex d-sm-none">
//                     <Icon name="arrow-left"></Icon>
//                   </Button>
//                 </Link>
//               </BlockHeadContent>

//         <BlockTitle page>
//           <div>
//             <Col lg="6">
//               <BlockHead>
//                 <BlockHeadContent>
//                   <BlockTitle tag="h5" padding="auto">Applicant Information</BlockTitle>
//                 </BlockHeadContent>
//               </BlockHead>
//               <Card className="card-bordered">
//                 <ul className="data-list is-compact">
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">First Name</div>
//                       <div className="data-value">{details[0].Firstname}</div>
//                     </div>
//                   </li>
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Middle Name</div>
//                       <div className="data-value">{details[0].Middlename}</div>
//                     </div>
//                   </li>
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Last Name</div>
//                       <div className="data-value">{details[0].Lastname}</div>
//                     </div>
//                   </li>
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Email Address</div>
//                       <div className="data-value">{details[0].email}</div>
//                     </div>
//                   </li>
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Phonenumber</div>
//                       <div className="data-value">{details[0].Phonenumber}</div>
//                     </div>
//                   </li>
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">BVN</div>
//                       <div className="data-value text-soft">
//                         <em>{details[0].BVN}</em>
//                       </div>
//                     </div>
//                   </li>
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Date of Birth</div>
//                       <div className="data-value">{details[0].dob}</div>
//                     </div>
//                   </li>
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Full Address</div>
//                     <div className="data-value">{details[0].Fulladdress}</div>
//                     </div>
//                   </li>

//                 </ul>
//               </Card>
//             </Col>
//           </div>
//         </BlockTitle>

//         <BlockTitle page>
//           <div>
//             <Col lg="6">
//               <BlockHead>
//                 <BlockHeadContent>
//                   <BlockTitle tag="h5">Next of Kin</BlockTitle>
//                 </BlockHeadContent>
//               </BlockHead>
//               <Card className="card-bordered">
//                 <ul className="data-list is-compact">

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">First Name</div>
//                       <div className="data-value">{details[0].Nokfirstname}</div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Middle Name</div>
//                       <div className="data-value">{details[0].Nokmiddlename}</div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">last Name</div>
//                       <div className="data-value">{details[0].Noklastname}</div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Email</div>
//                       <div className="data-value">{details[0].Nokemail}</div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Resident Address</div>
//                       <div className="data-value">{details[0].Residentaddress}</div>
//                     </div>
//                   </li>

//                 </ul>
//               </Card>
//             </Col>
//           </div>
//         </BlockTitle>

//       </Content>
//     </React.Fragment>

//   );
// }

// export default CustomerDetails;

// const CustomerDetails = (props) => {
//   console.log(props.user);
//   console.log(props.name);
//   return (
//     <React.Fragment>
//       <Head title="Customer Details "></Head>
//       <Content>
//         <BlockTitle page>
//           <div>
//             <Col lg="6">
//               <BlockHead>
//                 <BlockHeadContent>
//                   <BlockTitle tag="h5">Applicant Information</BlockTitle>
//                 </BlockHeadContent>
//               </BlockHead>
//               <Card className="card-bordered">
//                 <ul className="data-list is-compact">
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">First Name</div>
//                       <div className="data-value">Tolu</div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Middle Name</div>
//                       <div className="data-value">Emma</div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Last Name</div>
//                       <div className="data-value">Adeagbo</div>
//                     </div>
//                   </li>
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Email Address</div>
//                       <div className="data-value">info@softnio.com</div>
//                     </div>
//                   </li>
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Phone Number</div>
//                       <div className="data-value text-soft">
//                         <em>Not available</em>
//                       </div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">BVN</div>
//                       <div className="data-value text-soft">
//                         <em>2345556567</em>
//                       </div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Date of Birth</div>
//                       <div className="data-value">28 Oct, 2015</div>
//                     </div>
//                   </li>
//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Full Address</div>
//                       <div className="data-value">6516, Eldoret, Uasin Gishu, 30100</div>
//                     </div>
//                   </li>
//                   <h5> Next of Kin:</h5>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">First Name</div>
//                       <div className="data-value">Tolulope</div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Last Name</div>
//                       <div className="data-value">Tife</div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Middle Name</div>
//                       <div className="data-value">Ade</div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Email Address</div>
//                       <div className="data-value">@opeoluwa.com</div>
//                     </div>
//                   </li>

//                   <li className="data-item">
//                     <div className="data-col">
//                       <div className="data-label">Resident Address</div>
//                       <div className="data-value">No. 8 Nelson street</div>
//                     </div>
//                   </li>
//                 </ul>
//               </Card>
//             </Col>
//           </div>
//         </BlockTitle>
//       </Content>
//     </React.Fragment>
//   );
// };
// export default CustomerDetails;
