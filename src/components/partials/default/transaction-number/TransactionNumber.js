import React from "react";
import { CardTitle } from "reactstrap";
import { Icon, TooltipComponent } from "../../../Component";
import { BarChart } from "../../charts/default/Charts";

const TransactionNumber = () => {
  return (
    <React.Fragment>
      <div className="card-title-group align-start mb-2">
        <CardTitle>
          <h6 className="title">Total Number of Transactions</h6>
          <p>Total Number of Transactions In last 30 days.</p>
        </CardTitle>
        <div className="card-tools">
          <TooltipComponent
            icon="help-fill"
            iconClass="card-hint"
            direction="left"
            id="tooltip-1"
            text="Transaction from subscription"
          />
        </div>
      </div>
      <div className="align-end gy-3 gx-5 flex-wrap flex-md-nowrap flex-lg-wrap flex-xxl-nowrap">
        <div className="nk-sale-data-group flex-md-nowrap g-4">
          <div className="nk-sale-data">
            <span className="amount">
              2500{" "}
              <span className="change down text-danger">
                <Icon name="arrow-long-down" />
                16.93%
              </span>
            </span>
            <span className="sub-title">This Month</span>
          </div>
          <div className="nk-sale-data">
            <span className="amount">
              800{" "}
              <span className="change up text-success">
                <Icon name="arrow-long-up" />
                4.26%
              </span>
            </span>
            <span className="sub-title">This Week</span>
          </div>
        </div>
        <div className="nk-sales-ck sales-revenue">
          <BarChart sales />
        </div>
      </div>
    </React.Fragment>
  );
};
export default TransactionNumber;
