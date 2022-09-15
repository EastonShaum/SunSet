import React from "react";
import "./Benefit3.css";

function Benefit3(props) {
  const { className } = props;

  return (
    <div className={`benefit-3 ${className || ""}`}>
      <img className="tax-receipt-icon-1" src="/img/tax-receipt-icon-1-1@2x.png" />
      <div className="tax-savings opensans-semi-bold-navy-blue-24px">Tax Savings</div>
      <div className="how-you-can-apply-yo opensans-normal-black-24px">
        How you can apply your tax credits for additional savings.
      </div>
    </div>
  );
}

export default Benefit3;
