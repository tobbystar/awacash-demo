import User from "../../../images/avatar/b-sm.jpg";
import User2 from "../../../images/avatar/c-sm.jpg";
import User3 from "../../../images/avatar/a-sm.jpg";
import User4 from "../../../images/avatar/d-sm.jpg";
import SubAdminOne  from "./SubAdminOne";
import {useState} from "react";


function levelone() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Middlename, setMiddlename] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bvn, setBvn] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");


  const [SubAdminOne, setSubAdminOne] = useState([

    {
      id: "1",
      firstname: "Adeagbo Oluwatobi",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "2",
      firstname: "Amelia Grant",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "3",
      firstname: "Kristen Hawkins",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "4",
      firstname: "Tommy Vasquez",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "5",
      firstname: "Alejandro Haynes",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "6",
      firstname: "Brooke Harmon",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "7",
      firstname: "Trevor Miller",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "8",
      firstname: "Lonnie Ferguson",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "9",
      firstname: "Mack Kennedy ",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "10",
      firstname: "Zia Burkett",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "11",
      firstname: "Ferdinand Karl",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "12",
      firstname: "Inez Wilkerson",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "13",
      firstname: "Alyana Thomson",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "14",
      firstname: "Alexa Rollins",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "15",
      firstname: "Moira Baxter",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "16",
      firstname: "Irma Rogers",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "17",
      firstname: "Candice Wu",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
    {
      id: "18",
      firstname: "Eva Calvert",
      lastname: "Calvert",
      Middlename: "Kelvin",
      email: "@evacalvert.com",
      phone: "08166454782",
      bvn: "134354675",
      dob: "12/03/2002",
      address: "No, 4, house",
    },
  ]);


const ShowSubAdminOne = true
return (
  <div className="levelone">
    {ShowSubAdminOne ? (
      <>
        <input
        type="text"
        onChange={(e) => {
        console.log(e.target.value);
          setFirstname(e.target.value);
          setLastname(e.target.value);
          setMiddlename(e.target.value);
          setEmail(e.target.value);
          setPhone(e.target.value);
          setBvn(e.target.value);
          setDob(e.target.value);
          setAddress(e.target.value);
          setSubAdminOne(e.target.value);
        }}
        />
        <div className="flex flex-wrap justify-center">
          {SubAdminOne.map((SubAdminOne) => {
            return (
              <SubAdminOne
                key={SubAdminOne.id}
                firstname={SubAdminOne.firstname}
                lastname={SubAdminOne.lastname}
                Middlename={SubAdminOne.Middlename}
                email={SubAdminOne.email}
                phone={SubAdminOne.id}
                bvn={SubAdminOne.id}
                dob={SubAdminOne.id}
                />
            );
          })}
        </div>
      </>
    ) : (
      <p></p>
      )}
  </div>
);
}

export default levelone;