import React from "react";
import Benefit2 from "../Benefit2";
import Benefit3 from "../Benefit3";
import "./Phone.css";

function Phone(props) {
  const {
    saveMoneyAndOwnY,
    spanText1,
    spanText2,
    bookConsultation,
    spanText3,
    spanText4,
    spanText5,
    funnelPerson2Png1,
    duringThisFreePre,
    moneySymbolPaid1,
    costSavings,
    wellDiscussHowSo,
    overlapGroup1,
    businessManSuitPng1,
    spanText6,
    spanText7,
    solarProfessional,
    line1,
    x5YearsExperience,
    spanText8,
    spanText9,
    spanText10,
    leaveYourInfoToScheduleACall,
    spanText11,
    spanText12,
    email,
    phone,
    message,
    bookAConsultation,
    solarPanelsWhiteBackground1,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="phone screen">
        <div className="overlap-group7">
          <div className="first-section"></div>
          <div className="save-money-and-own-y opensans-normal-white-20px">{saveMoneyAndOwnY}</div>
          <div className="solar-energy opensans-normal-white-32px">
            <span className="opensans-normal-white-32px">{spanText1}</span>
            <span className="opensans-normal-white-40px">{spanText2}</span>
          </div>
          <div className="overlap-group">
            <div className="button-box"></div>
            <div className="book-consultation valign-text-middle opensans-normal-navy-blue-24px">
              {bookConsultation}
            </div>
          </div>
          <p className="sign-up-for-a-free-c valign-text-middle opensans-normal-white-16px">
            <span>
              <span className="opensans-normal-white-16px">{spanText3}</span>
              <span className="opensans-bold-white-16px">{spanText4}</span>
              <span className="opensans-normal-white-16px">{spanText5}</span>
            </span>
          </p>
          <img className="funnel-person-2-png-1" src={funnelPerson2Png1} />
        </div>
        <div className="during-this-free-pre">{duringThisFreePre}</div>
        <div className="overlap-group6">
          <div className="benefit-1">
            <img className="money-symbol-paid-1" src={moneySymbolPaid1} />
            <div className="cost-savings opensans-semi-bold-navy-blue-24px">{costSavings}</div>
            <div className="well-discuss-how-so opensans-normal-black-20px">{wellDiscussHowSo}</div>
          </div>
          <Benefit2 />
          <Benefit3 />
          <div className="overlap-group1" style={{ backgroundImage: `url(${overlapGroup1})` }}>
            <img className="business-man-suit-png-1" src={businessManSuitPng1} />
          </div>
          <div className="meet-john-section">
            <div className="meet-john">
              <span className="opensans-bold-black-32px">{spanText6}</span>
              <span className="span1">{spanText7}</span>
            </div>
            <div className="overlap-group2">
              <div className="solar-professional">{solarProfessional}</div>
              <img className="line-1" src={line1} />
            </div>
            <p className="x5-years-experience">{x5YearsExperience}</p>
          </div>
        </div>
        <div className="going-green-has-never-been-this-easy">
          <span className="opensans-normal-black-24px">{spanText8}</span>
          <span className="span1-1">{spanText9}</span>
          <span className="opensans-normal-black-24px">{spanText10}</span>
        </div>
        <div className="lead-form">
          <div className="overlap-group3">
            <div className="leave-your-info-to-schedule-a-call opensans-normal-white-32px">
              {leaveYourInfoToScheduleACall}
            </div>
            <div className="overlap-group5">
              <div className="place valign-text-middle opensans-normal-granite-gray-24px">
                <span>
                  <span className="opensans-normal-granite-gray-24px">{spanText11}</span>
                  <span className="opensans-semi-bold-granite-gray-20px">{spanText12}</span>
                </span>
              </div>
            </div>
            <div className="overlap-group-container">
              <div className="overlap-group4">
                <div className="email valign-text-middle opensans-normal-granite-gray-24px">{email}</div>
              </div>
              <div className="overlap-group1-1">
                <div className="rectangle-4"></div>
                <div className="phone-1 valign-text-middle opensans-normal-granite-gray-24px">{phone}</div>
              </div>
            </div>
            <div className="overlap-group-1">
              <div className="message valign-text-middle opensans-normal-granite-gray-24px">{message}</div>
            </div>
            <div className="overlap-group2-1">
              <div className="book-a-consultation valign-text-middle opensans-normal-navy-blue-24px">
                {bookAConsultation}
              </div>
            </div>
          </div>
        </div>
        <img className="solar-panels-white-background-1" src={solarPanelsWhiteBackground1} />
      </div>
    </div>
  );
}

export default Phone;
