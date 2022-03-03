import React from "react";
import { Link } from "react-router-dom";
import "./Page3AboutUs.css";

function Page3AboutUs(props) {
  const {
    clBg111,
    clBg113,
    clBg112,
    clBg114,
    title1,
    infoCoinlineCom,
    coinline,
    text3,
    surname,
    museumsBrooklynMu,
    joshMillerT0KeeudofagUnsplash1,
    coinLineRefersT,
    title2,
    festival1,
    title3,
    brooklynNyIsLoca,
    welcomeToCoinLine,
    image1,
    aboutUs,
    logo,
    shop,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="page3-aboutus screen">
        <div className="overlap-group3-2">
          <div className="overlap-group-2">
            <img className="cl-bg1-11" src={clBg111} />
            <img className="cl-bg1-13" src={clBg113} />
            <img className="cl-bg1-12" src={clBg112} />
            <img className="cl-bg1-14" src={clBg114} />
            <div className="bg-fade-1"></div>
          </div>
          <div className="what-to-do animate-enter1" show-on-scroll>
            <div className="title-1 futura-medium-white-90px">{title1}</div>
          </div>
          <div className="overlap-group1-1 futura-medium-white-30px">
            <div className="infocoinlinecom-2">{infoCoinlineCom}</div>
            <div className="coin-line-2">{coinline}</div>
            <div className="text-3">{text3}</div>
          </div>
          <div className="surname futura-medium-white-30px animate-enter2">{surname}</div>
          <div className="museums-brooklyn-mu futura-medium-white-30px">{museumsBrooklynMu}</div>
          <img className="josh-miller-t0ke-eud-ofag-unsplash-1" src={joshMillerT0KeeudofagUnsplash1} />
          <div className="coin-line-refers-t futura-medium-white-30px animate-enter3" show-on-scroll>
            {coinLineRefersT}
          </div>
          <div className="history animate-enter4" show-on-scroll>
            <div className="title-2 futura-medium-white-90px">{title2}</div>
          </div>
          <img className="festival-1" src={festival1} />
          <div className="back-contrast"></div>
          <div className="title-3 futura-medium-white-90px animate-enter5" show-on-scroll>
            {title3}
          </div>
          <div className="brooklyn-ny-is-loca futura-medium-white-30px">{brooklynNyIsLoca}</div>
          <div className="welcome-to-coin-line futura-medium-white-30px animate-enter6" show-on-scroll>
            {welcomeToCoinLine}
          </div>
          <img className="image-1" src={image1} />
        </div>
        <div className="header-3">
          <div className="overlap-group2-1">
            <div className="about-us-2 galvji-bold-white-25px">{aboutUs}</div>
            <Link to="/page1-homepage" className="align-self-flex-start">
              <img className="logo-2" src={logo} />
            </Link>
            <Link to="/page2-shop">
              <div className="shop-2 galvji-bold-white-25px">{shop}</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page3AboutUs;
