import React from "react";
import { Link } from "react-router-dom";
import "./Page2Shop.css";

function Page2Shop(props) {
  const {
    clBg12,
    clBg13,
    clBg14,
    clBg15,
    title,
    tickets,
    standardTicket19999,
    vipTicket39999,
    backstagePass69999,
    infoCoinlineCom,
    coinline,
    text1,
    x0201Hat11,
    x0203Shirt41,
    x02051,
    x0204Sticker1,
    x02061,
    x02021,
    price1,
    price2,
    price3,
    price4,
    price5,
    price6,
    shop,
    logo,
    aboutUs,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="page2-shop screen">
        <div className="overlap-group6">
          <div className="overlap-group">
            <img className="cl-bg1-2" src={clBg12} />
            <img className="cl-bg1-3" src={clBg13} />
            <img className="cl-bg1-4" src={clBg14} />
            <img className="cl-bg1-5" src={clBg15} />
            <div className="bg-fade"></div>
          </div>
          <div className="merchlist">
            <h1 className="title futura-medium-white-100px">{title}</h1>
          </div>
          <div className="ticketlist">
            <div className="tickets futura-medium-white-100px">{tickets}</div>
            <div className="overlap-group-container">
              <div className="ticket-container">
                <div className="ticket1"></div>
                <div className="standard-ticket-19999 futura-medium-white-50px">{standardTicket19999}</div>
              </div>
              <div className="ticket-container-1">
                <div className="ticket2"></div>
                <div className="vip-ticket-39999 futura-medium-white-50px">{vipTicket39999}</div>
              </div>
              <div className="overlap-group3">
                <div className="ticket3"></div>
                <div className="backstage-pass-69999 futura-medium-white-50px">{backstagePass69999}</div>
              </div>
            </div>
          </div>
          <div className="overlap-group4 futura-medium-white-30px">
            <div className="infocoinlinecom">{infoCoinlineCom}</div>
            <div className="coin-line">{coinline}</div>
            <div className="text-1">{text1}</div>
          </div>
          <img className="x02-01-hat1-1" src={x0201Hat11} />
          <img className="x02-03-shirt4-1" src={x0203Shirt41} />
          <img className="x02-05-1" src={x02051} />
          <img className="x02-04-sticker-1" src={x0204Sticker1} />
          <img className="x02-06-1" src={x02061} />
          <img className="x02-02-1" src={x02021} />
          <div className="price futura-medium-white-40px">{price1}</div>
          <div className="price-1 futura-medium-white-40px">{price2}</div>
          <div className="price-2 futura-medium-white-40px">{price3}</div>
          <div className="price-3 futura-medium-white-40px">{price4}</div>
          <div className="price-4 futura-medium-white-40px">{price5}</div>
          <div className="price-5 futura-medium-white-40px">{price6}</div>
        </div>
        <div className="header">
          <div className="overlap-group5">
            <div className="header-1"></div>
            <div className="shop galvji-bold-white-25px">{shop}</div>
            <Link to="/page1-homepage">
              <img className="logo" src={logo} />
            </Link>
            <Link to="/page3-aboutus">
              <div className="about-us galvji-bold-white-25px">{aboutUs}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2Shop;
