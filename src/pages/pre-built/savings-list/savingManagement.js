import React, { useState, useEffect } from "react";
import Content from "../../../layout/content/Content";
import Head from "../../../layout/head/Head";
import DatePicker from "react-datepicker";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Card,
  FormGroup,
  Modal,
  ModalBody,
  DropdownItem,
  Form,
  Badge,
} from "reactstrap";
import {
  Button,
  Block,
  BlockBetween,
  BlockDes,
  BlockHead,
  BlockHeadContent,
  BlockTitle,
  UserAvatar,
  Icon,
  Col,
  PaginationComponent,
  Row,
  RSelect,
  PreviewAltCard,
  TooltipComponent,
} from "../../../components/Component";
import { statusOptions } from "./TransData";
import { dateFormatterAlt } from "../../../utils/Utils";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { BalanceBarChart, DepositBarChart, WithdrawBarChart } from "../../../components/partials/charts/invest/InvestChart";

var smsSearchData = ""

const TransListBasic = () => {
  const [onSearch, setonSearch] = useState(true);
  const [onSearchText, setSearchText] = useState("");
  const [modal, setModal] = useState({
    add: false,
  });
  const [viewModal, setViewModal] = useState(false);
  const [detail, setDetail] = useState({});
  const [data, setData] = useState([{}]);
  const [formData, setFormData] = useState({
    bill: "",
    issue: new Date(),
    due: new Date(),
    total: "",
    status: "",
    ref: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemPerPage, setItemPerPage] = useState(10);
  const [sort, setSortState] = useState("");

  const handleUserFetch = async () => {
    fetch("https://api.github.com/users")
    .then( response => response.json())
    .then( data => {setData(data); smsSearchData = data})
  }

  useEffect(() => {
    handleUserFetch()
  },[])

  const sortingFunc = (params) => {
    let defaultData = data;
    if (params === "asc") {
      let sortedData = [...defaultData].sort((a, b) => parseFloat(a.ref) - parseFloat(b.ref));
      setData([...sortedData]);
    } else if (params === "dsc") {
      let sortedData = [...defaultData].sort((a, b) => parseFloat(b.ref) - parseFloat(a.ref));
      setData([...sortedData]);
    }
  };

  // Changing state value when searching name
  useEffect(() => {
    if (onSearchText !== "") {
      const filteredObject = smsSearchData.filter((item) => {
        return item.login.toLowerCase().includes(onSearchText.toLowerCase());
      });
      setData([...filteredObject]);
    } else {
      setData([...smsSearchData]);
    }
  }, [onSearchText]);

  // onChange function for searching name
  const onFilterChange = (e) => {
    setSearchText(e.target.value);
  };

  // function to reset the form
  const resetForm = () => {
    setFormData({
      bill: "",
      issue: new Date(),
      due: new Date(),
      total: "",
      status: "",
    });
  };

  // function to close the form modal
  const onFormCancel = () => {
    setModal({ add: false });
    resetForm();
  };

  // submit function to add a new item
  const onFormSubmit = (submitData) => {
    const { bill, total } = submitData;
    let submittedData = {
      id: data.length + 1,
      ref: 4970 + data.length,
      bill: bill,
      issue: dateFormatterAlt(formData.issue, true),
      due: dateFormatterAlt(formData.due, true),
      total: total + ".00",
      status: formData.status,
    };
    setData([submittedData, ...data]);

    resetForm();
    setModal({ add: false });
  };

  // function to load detail data
  const loadDetail = (id) => {
    let index = data.findIndex((item) => item.id === id);
    setDetail(data[index]);
  };

  // function to toggle the search option
  const toggle = () => setonSearch(!onSearch);

  // Get current list, pagination
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Change Page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const { errors, register, handleSubmit } = useForm();

  return (
    <React.Fragment>
      <Head title="Transaction Lists - Basic"></Head>
      <Content>
        <BlockHead size="sm">
          <BlockBetween>
            <BlockHeadContent>
              <BlockTitle page>Savings Management</BlockTitle>
              <BlockDes className="text-soft">
                <p>You have total {data.length} active Savings </p>
              </BlockDes>
            </BlockHeadContent>
            {/* <BlockHeadContent>
              <ul className="nk-block-tools g-3">
                <li>
                  <Button color="primary" className="btn-icon" onClick={() => setModal({ add: true })}>
                    <Icon name="plus"></Icon>
                  </Button>
                </li>
              </ul>
            </BlockHeadContent> */}
          </BlockBetween>
        </BlockHead>

        <Block>
          <Row className="g-gs">
            <Col md="4">
              <PreviewAltCard className="card-full">
                <div className="card-title-group align-start mb-0">
                  <div className="card-title">
                    <h6 className="subtitle">Total Savings (Long Term)</h6>
                  </div>
                  <div className="card-tools">
                    <TooltipComponent
                      iconClass="card-hint"
                      icon="help-fill"
                      direction="left"
                      id="invest-deposit"
                      text="Long Term"
                    ></TooltipComponent>
                  </div>
                </div>
                <div className="card-amount">
                  <span className="amount">
                    49,595.34 <span className="currency currency-usd">USD</span>
                  </span>
                  <span className="change up text-success">
                    <Icon name="arrow-long-up"></Icon>1.93%
                  </span>
                </div>
               
              </PreviewAltCard>
            </Col>

            <Col md="4">
              <PreviewAltCard className="card-full">
                <div className="card-title-group align-start mb-0">
                  <div className="card-title">
                    <h6 className="subtitle">Total Savings (Short Term)</h6>
                  </div>
                  <div className="card-tools">
                    <TooltipComponent
                      iconClass="card-hint"
                      icon="help-fill"
                      direction="left"
                      id="invest-withdraw"
                      text="Short Term"
                    ></TooltipComponent>
                  </div>
                </div>
                <div className="card-amount">
                  <span className="amount">
                    49,595.34 <span className="currency currency-usd">USD</span>
                  </span>
                  <span className="change down text-danger">
                    <Icon name="arrow-long-down"></Icon>1.93%
                  </span>
                </div>
              </PreviewAltCard>
            </Col>

            <Col md="4">
              <PreviewAltCard className="card-full">
                <div className="card-title-group align-start mb-0">
                  <div className="card-title">
                    <h6 className="subtitle">Total Withdrawals</h6>
                  </div>
                  <div className="card-tools">
                    <TooltipComponent
                      iconClass="card-hint"
                      icon="help-fill"
                      direction="left"
                      id="invest-balance"
                      text="Total withdrawals"
                    ></TooltipComponent>
                  </div>
                </div>
                <div className="card-amount">
                  <span className="amount">
                    79,358.50 <span className="currency currency-usd">USD</span>
                  </span>
                </div>
                
              </PreviewAltCard>
            </Col>
          </Row>
        </Block>

        <Block>
          <Card className="card-bordered card-stretch">
            <div className="card-inner-group">
              <div className="card-inner">
                <div className="card-title-group">
                  <div className="card-title">
                    <h5 className="title">All Savings</h5>
                  </div>
                  <div className="card-tools mr-n1">
                    <ul className="btn-toolbar">
                      <li>
                        <Button onClick={toggle} className="btn-icon search-toggle toggle-search">
                          <Icon name="search"></Icon>
                        </Button>
                      </li>
                      <li className="btn-toolbar-sep"></li>
                      <li>
                        <UncontrolledDropdown>
                          <DropdownToggle tag="a" className="dropdown-toggle btn btn-icon btn-trigger">
                            <Icon name="setting"></Icon>
                          </DropdownToggle>
                          <DropdownMenu right>
                            <ul className="link-check">
                              <li>
                                <span>Show</span>
                              </li>
                              <li className={itemPerPage === 10 ? "active" : ""}>
                                <DropdownItem
                                  tag="a"
                                  href="#dropdownitem"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                    setItemPerPage(10);
                                  }}
                                >
                                  10
                                </DropdownItem>
                              </li>
                              <li className={itemPerPage === 15 ? "active" : ""}>
                                <DropdownItem
                                  tag="a"
                                  href="#dropdownitem"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                    setItemPerPage(15);
                                  }}
                                >
                                  15
                                </DropdownItem>
                              </li>
                            </ul>
                            <ul className="link-check">
                              <li>
                                <span>Order</span>
                              </li>
                              <li className={sort === "dsc" ? "active" : ""}>
                                <DropdownItem
                                  tag="a"
                                  href="#dropdownitem"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                    setSortState("dsc");
                                    sortingFunc("dsc");
                                  }}
                                >
                                  DESC
                                </DropdownItem>
                              </li>
                              <li className={sort === "asc" ? "active" : ""}>
                                <DropdownItem
                                  tag="a"
                                  href="#dropdownitem"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                    setSortState("asc");
                                    sortingFunc("asc");
                                  }}
                                >
                                  ASC
                                </DropdownItem>
                              </li>
                            </ul>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </li>
                    </ul>
                  </div>
                  <div className={`card-search search-wrap ${!onSearch ? "active" : ""}`}>
                    <div className="search-content">
                      <Button
                        className="search-back btn-icon toggle-search"
                        onClick={() => {
                          setSearchText("");
                          toggle();
                        }}
                      >
                        <Icon name="arrow-left"></Icon>
                      </Button>
                      <input
                        type="text"
                        className="form-control border-transparent form-focus-none"
                        placeholder="Search by customer name"
                        value={onSearchText}
                        onChange={(e) => onFilterChange(e)}
                      />
                      <Button className="search-submit btn-icon">
                        <Icon name="search"></Icon>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-inner p-0">
                <table className="table table-tranx">
                  <thead>
                    <tr className="tb-tnx-head">
                      <th className="tb-tnx-id">
                        <span className="">SN</span>
                      </th>
                      <th className="tb-tnx-info">
                        <span className="tb-tnx-desc d-none d-sm-inline-block">
                          <span>Account Number</span>
                        </span>
                        <span className="tb-tnx-date d-md-inline-block d-none">
                          <span className="d-md-none">Type</span>
                          <span className="d-none d-md-block">
                            <span>Transaction Type</span>
                            <span>Savings Tenure</span>
                          </span>
                        </span>
                      </th>
                      <th className="tb-tnx-amount is-alt">
                        <span className="tb-tnx-total d-none d-md-inline-block">Amount</span>
                        <span className="tb-tnx-status">Status</span>
                      </th>
                      <th className="tb-tnx-action">
                        <span>&nbsp;</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentItems.length > 0
                      ? currentItems.map((item) => {
                          return (
                            <tr key={item.id} className="tb-tnx-item">
                              <td className="tb-tnx-id">
                                <a
                                  href="#ref"
                                  onClick={(ev) => {
                                    ev.preventDefault();
                                  }}
                                >
                                  <span>{item.id}</span>
                                </a>
                              </td>
                              <td className="tb-tnx-info">
                                <div className="tb-tnx-desc">
                                  <span className="title">1224342927</span>
                                </div>
                                <div className="tb-tnx-date">
                                  <span className="date">{"WithDrawal"}</span>
                                  <span className="date">{"Long"}</span>
                                </div>
                              </td>
                              <td className="tb-tnx-amount is-alt">
                                <div className="tb-tnx-total">
                                  <span className="amount">{"57,098,74 USD"}</span>
                                </div>
                                <div className="tb-tnx-status">
                                  <span className="amount">{"Successful"}</span>
                                </div>
                                
                              
                              </td>
                              <td className="tb-tnx-action">
                                <UncontrolledDropdown>
                                  <DropdownToggle
                                    tag="a"
                                    className="text-soft dropdown-toggle btn btn-icon btn-trigger"
                                  >
                                    <Icon name="more-h"></Icon>
                                  </DropdownToggle>
                                  <DropdownMenu right>
                                    <ul className="link-list-plain">
                                      <li
                                        onClick={() => {
                                          loadDetail(item.id);
                                          setViewModal(true);
                                        }}
                                      >
                                        <DropdownItem
                                          tag="a"
                                          href="#view"
                                          onClick={(ev) => {
                                            ev.preventDefault();
                                          }}
                                        >
                                          View
                                        </DropdownItem>
                                      </li>
                                      <li>
                                        <DropdownItem
                                          tag="a"
                                          href="#print"
                                          onClick={(ev) => {
                                            ev.preventDefault();
                                          }}
                                        >
                                          Print
                                        </DropdownItem>
                                      </li>
                                    </ul>
                                  </DropdownMenu>
                                </UncontrolledDropdown>
                              </td>
                            </tr>
                          );
                        })
                      : null}
                  </tbody>
                </table>
              </div>
              <div className="card-inner">
                {currentItems.length > 0 ? (
                  <PaginationComponent
                    noDown
                    itemPerPage={itemPerPage}
                    totalItems={data.length}
                    paginate={paginate}
                    currentPage={currentPage}
                  />
                ) : (
                  <div className="text-center">
                    <span className="text-silent">No data found</span>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </Block>

        <Modal isOpen={viewModal} toggle={() => setViewModal(false)} className="modal-dialog-centered" size="lg">
          <ModalBody>
            <a
              href="#cancel"
              onClick={(ev) => {
                ev.preventDefault();
                setViewModal(false);
              }}
              className="close"
            >
              <Icon name="cross-sm"></Icon>
            </a>
            <div className="nk-modal-head">
              <h4 className="nk-modal-title title">
                Savings <small className="text-primary">#{detail.ref}</small>
              </h4>
            </div>
            <div className="nk-tnx-details mt-sm-3">
              <Row className="gy-3">
                <Col lg={6}>
                  <span className="sub-text">Account Number</span>
                  <span className="caption-text">1234567890</span>
                </Col>
                <Col lg={6}>
                  <span className="sub-text">Transaction Type</span>
                  <span className="caption-text text-break">{"Withdrawal"}</span>
                </Col>
                <Col lg={6}>
                  <span className="sub-text">Amount</span>
                  <span className="caption-text">$ {"67,3857.93"}</span>
                </Col>
                <Col lg={6}>
                  <span className="sub-text">Status</span>
                  <Badge
                    color={detail.status === "Paid" ? "success" : detail.status === "Due" ? "warning" : "danger"}
                    size="md"
                  >
                    {"Failed"}
                  </Badge>
                </Col>
                <Col lg={6}>
                  <span className="sub-text">Savings Tenure</span>
                  <span className="caption-text"> Long </span>
                </Col>
                <Col lg={6}>
                  <span className="sub-text">Due Date</span>
                  <span className="caption-text"> {"12 Apr 2022"}</span>
                </Col>
              </Row>
            </div>
          </ModalBody>
        </Modal>
      </Content>
    </React.Fragment>
  );
};

export default TransListBasic;
