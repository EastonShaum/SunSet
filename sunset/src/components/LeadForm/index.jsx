import React from "react";
import "./LeadForm.css";

function LeadForm(props) {
  const { className } = props;

  return (
    <div className={`lead-form-1 ${className || ""}`}>
      <div className="overlap-group2-2">
        <div className="leave-your-info-to-schedule-a-call-1 opensans-normal-white-36px">
          Leave your Info to schedule a call.
        </div>
        <div className="overlap-group5-1">
          <div className="place-1 valign-text-middle opensans-normal-granite-gray-24px">
            <span>
              <span className="span-2 opensans-normal-granite-gray-24px">&nbsp;&nbsp;&nbsp;&nbsp;</span>
              <span className="span-2 opensans-semi-bold-granite-gray-20px">Name</span>
            </span>
          </div>
        </div>
        <div className="overlap-group-container-1">
          <div className="overlap-group4-1">
            <div className="email-1 valign-text-middle opensans-normal-granite-gray-24px">
              &nbsp;&nbsp;&nbsp;&nbsp;Email
            </div>
          </div>
          <div className="overlap-group-3">
            <div className="rectangle-4-1"></div>
            <div className="phone-2 valign-text-middle opensans-normal-granite-gray-24px">
              &nbsp;&nbsp;&nbsp;&nbsp;Phone
            </div>
          </div>
        </div>
        <div className="overlap-group1-3">
          <div className="message-1 valign-text-middle opensans-normal-granite-gray-24px">&nbsp;&nbsp;Message</div>
        </div>
        <div className="overlap-group3-1">
          <div className="book-a-consultation-1 valign-text-middle opensans-normal-navy-blue-24px">
            Book a Consultation
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeadForm;
