import User from "../../../images/avatar/b-sm.jpg";
import User2 from "../../../images/avatar/c-sm.jpg";
import User3 from "../../../images/avatar/a-sm.jpg";
import User4 from "../../../images/avatar/d-sm.jpg";

export const kycData = [
  {
    id: "UD01544",
    name: "Regular Savings",
    description: "These accounts are federally insured up to $250,000....",
    rate: "5%",
    duration:"6mths",
    check: false,
    front: true,
    back: true,
    date: "18 Dec, 2019 01:02 PM",
    status: "Approved",
    checked: "false",
  },
  {
    id: "UD01489",
    name: "Online Savings",
    rate: "10%",
    duration:"6mths",
    description: "A brick-and-mortar financial institution isn’t the only place that you can shop for a savings account....",
    check: false,
    doc: "NationalID",
    front: true,
    back: true,
    date: "12 Jan, 2020 01:02 PM",
    status: "Approved",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD01434",
    name: "High-yield savings",
    rate: "15%",
    description: "High-yield savings accounts are similar to traditional savings accounts with one big difference:",
    doc: "Passport",
    check: false,
    front: true,
    back: true,
    date: "18 Dec, 2019 01:02 PM",
    status: "Approved",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD01286",
    name: "Student savings",
    rate: "4%",
    description: "If you’re in school, another savings account option is one geared specifically to students.",
    front: true,
    check: false,
    back: false,
    date: "12 Jan, 2020 01:02 PM",
    status: "Pending",
    checked: "Ernesto Vargas",
  },
  {
    id: "UD01235",
    name: "CDs",
    rate: "25%",
    description: "A certificate of deposit, or CD, is another way to build your savings. CDs typically pay a higher yield than traditional savings accounts in exchange for keeping your money for a set term ",
    check: false,
    front: true,
    back: true,
    date: "18 Dec, 2019 01:02 PM",
    status: "Approved",
    checked: "Janet Snyder",
  },
 
];

export const filterStatus = [
  { value: "approved", label: "Approved" },
  { value: "pending", label: "Pending" },
  { value: "deleted", label: "Deleted" },
  { value: "rejected", label: "Rejected" },
];

export const filterDoc = [
  { value: "nid", label: "Nidcard" },
  { value: "passport", label: "Passport" },
  { value: "driving", label: "Driving" },
];

export const bulkActionKycOptions = [
  { value: "Reject", label: "Reject" },
  { value: "Delete", label: "Delete" },
];
