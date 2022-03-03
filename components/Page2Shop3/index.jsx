import React from "react";
import Bg from "../Bg";
import "./Page2Shop3.css";

function Page2Shop3(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    bg,
    spanText9,
    logo,
    x0203Shirt41,
    x02051,
    x0204Sticker1,
    x0201Hat11,
    x02061,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    bgProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="page2shop screen">
        <div className="overlap-group5-2">
          <Bg src={bgProps.src} className={bgProps.className} />
          <div className="merch futura-bold-white-100px">
            <span className="futura-bold-white-100px">{spanText1}</span>
          </div>
          <div className="ticketlist-1">
            <div className="tickets-1 futura-bold-white-100px">
              <span className="futura-bold-white-100px">{spanText2}</span>
            </div>
            <div className="overlap-group-container-1">
              <div className="overlap-group1-3 border-3px-black-2">
                <div className="standard-ticket-19999-1 futura-bold-white-50px">
                  <span className="futura-bold-white-50px">{spanText3}</span>
                </div>
              </div>
              <div className="overlap-group3-4 border-3px-black-2">
                <div className="vip-ticket-39999-1 futura-bold-white-50px">
                  <span className="futura-bold-white-50px">{spanText4}</span>
                </div>
              </div>
              <div className="overlap-group2-3 border-3px-black-2">
                <div className="backstage-pass-69999-1 futura-bold-white-50px">
                  <span className="futura-bold-white-50px">{spanText5}</span>
                </div>
              </div>
            </div>
            <div className="overlap-group-4 futura-medium-white-40px">
              <div className="shop-5">
                <span className="futura-medium-white-40px">{spanText6}</span>
              </div>
              <div className="about-us-5">
                <span className="futura-medium-white-40px">{spanText7}</span>
              </div>
            </div>
          </div>
          <div className="overlap-group4-2 galvji-bold-white-30px">
            <div className="about-us-6">
              <span className="galvji-bold-white-30px">{spanText8}</span>
            </div>
            <img className="logo-4" src={bg} />
            <div className="shop-6">
              <span className="galvji-bold-white-30px">{spanText9}</span>
            </div>
          </div>
          <img className="x02-01-hat1-1-1" src={logo} />
          <img className="x02-03-shirt4-1-1" src={x0203Shirt41} />
          <img className="x02-05-1-1" src={x02051} />
          <img className="x02-04-sticker-1-1" src={x0204Sticker1} />
          <img className="x02-06-1-1" src={x0201Hat11} />
          <img className="x02-02-1-1" src={x02061} />
          <div className="price-6 galvji-bold-white-50px">
            <span className="galvji-bold-white-50px">{spanText10}</span>
          </div>
          <div className="price-7 galvji-bold-white-50px">
            <span className="galvji-bold-white-50px">{spanText11}</span>
          </div>
          <div className="price-8 galvji-bold-white-50px">
            <span className="galvji-bold-white-50px">{spanText12}</span>
          </div>
          <div className="price-9 galvji-bold-white-50px">
            <span className="galvji-bold-white-50px">{spanText13}</span>
          </div>
          <div className="price-10 galvji-bold-white-50px">
            <span className="galvji-bold-white-50px">{spanText14}</span>
          </div>
          <div className="price-11 galvji-bold-white-50px">
            <span className="galvji-bold-white-50px">{spanText15}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page2Shop3;
