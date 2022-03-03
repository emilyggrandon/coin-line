import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Page2Shop from "./components/Page2Shop";
import Page1Homepage from "./components/Page1Homepage";
import Page3AboutUs from "./components/Page3AboutUs";
import Page3AboutUs3 from "./components/Page3AboutUs3";
import Page2Shop3 from "./components/Page2Shop3";
import Page1Homepage3 from "./components/Page1Homepage3";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|page2-shop)">
          <Page2Shop {...page2ShopData} />
        </Route>
        <Route path="/page1-homepage">
          <Page1Homepage {...page1HomepageData} />
        </Route>
        <Route path="/page3-aboutus">
          <Page3AboutUs {...page3AboutUsData} />
        </Route>
        <Route path="/page3aboutus">
          <Page3AboutUs3 {...page3AboutUs3Data} />
        </Route>
        <Route path="/page2shop">
          <Page2Shop3 {...page2Shop3Data} />
        </Route>
        <Route path="/page1homepage">
          <Page1Homepage3 {...page1Homepage3Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const bg1Data = {
    src: "/img/filter@1x.png",
};

const page1HomepageData = {
    clBg111: "/img/cl-bg1-8@1x.png",
    clBg18: "/img/cl-bg1-8@1x.png",
    clBg19: "/img/cl-bg1-8@1x.png",
    clBg112: "/img/cl-bg1-8@1x.png",
    artists: "ARTISTS",
    heroImage: "/img/hero-image@1x.png",
    front: "/img/front@2x.png",
    getticketsButtontext: "GET TICKETS",
    overlapGroup2: "/img/05-mgmt-1-1@2x.png",
    rectangle61: "/img/rectangle-6@2x.png",
    foofighters1: "MGMT",
    x05Mgmt1: "/img/05-mgmt-1@2x.png",
    overlapGroup3: "/img/08-foofighters-1-1@2x.png",
    rectangle62: "/img/rectangle-6-1@2x.png",
    foofighters2: <>Foo<br />Fighters</>,
    x08Foofighters1: "/img/08-foofighters-1@2x.png",
    overlapGroup4: "/img/02-daftpunk-1-1@2x.png",
    rectangle63: "/img/rectangle-6-2@2x.png",
    articMonkeys1: <>Daft<br />Punk</>,
    x02Daftpunk1: "/img/02-daftpunk-1@2x.png",
    overlapGroup5: "/img/06-thechemicalbrothers-1-1@2x.png",
    rectangle64: "/img/rectangle-6-3@2x.png",
    theChemicalBrothers: <>The<br />Chemical<br />Brothers</>,
    x06Thechemicalbrothers1: "/img/06-thechemicalbrothers-1@2x.png",
    overlapGroup6: "/img/07-articmonkeys-1-1@2x.png",
    rectangle65: "/img/rectangle-6-4@2x.png",
    articMonkeys2: <>Arctic<br />Monkeys</>,
    x07Articmonkeys1: "/img/07-articmonkeys-1@2x.png",
    overlapGroup7: "/img/03-thestrokes-2@2x.png",
    rectangle66: "/img/rectangle-6-3@2x.png",
    theStrokes: <>The<br />Strokes</>,
    x03Thestrokes1: "/img/03-thestrokes-1@2x.png",
    overlapGroup8: "/img/04-redhotchilipeppers-1-1@2x.png",
    rectangle67: "/img/rectangle-6-6@2x.png",
    rhcp: <>Red Hot<br />Chili Peppers</>,
    x04Redhotchilipeppers1: "/img/04-redhotchilipeppers-1@2x.png",
    overlapGroup9: "/img/01-starbomb-1-1@2x.png",
    rectangle68: "/img/rectangle-6-7@2x.png",
    starBomb: <>Star<br />Bomb</>,
    x01Starbomb1: "/img/01-starbomb-1@2x.png",
    overlapGroup10: "/img/cagetheelephant-1@2x.png",
    rectangle69: "/img/rectangle-6-8@2x.png",
    cagetheelephan: <>Cage<br />The<br />Elephant</>,
    cagetheelephant: "/img/cagetheelephant@2x.png",
    infoCoinlineCom: "info@coinline.com",
    coinline: "@CoinLine",
    text2: "+(718) - 631- 2022",
    aboutUs: "About Us",
    logo: "/img/logo-1@2x.png",
    shop: "Shop",
    bgProps: bg1Data,
};

const bg2Data = {
    src: "/img/bg-1@2x.png",
    className: "bg-1",
};

const page3AboutUs3Data = {
    spanText1: "Shop",
    spanText2: "About Us",
    spanText3: "what to do in BROOKLYN",
    image3: "/img/image-3-1@2x.png",
    spanText4: "COIN LINE history",
    brooklynhistory: "/img/brooklynhistory-1@2x.png",
    overlapGroup1: "/img/brooklyn-1@2x.png",
    bg: "/img/brooklyn-2@2x.png",
    spanText5: "about COIN LINE",
    spanText6: "About Us",
    brooklyn: "/img/logo-3@2x.png",
    spanText7: "Shop",
    spanText8: "Welcome to Coin Line- A single day music festival in downtown Brooklyn, New York. Our lineup consists of a mix of classic and beloved 80’s and 90’s bands, modern alternative rock, and electronic pop music. With Brooklyn as our home, we welcome a diverse crowd with unique music tastes. Check out below to find out more about the city and the numerous exciting things it has to offer!",
    spanText9: "If you are unfamiliar with the term “coin line,” it refers to the standard tradition of placing a coin on an arcade machine to reserve your place in line. In 1982, a famous arcade in Brooklyn called “Barcade” burnt down in an unfortunate fire. After being untouched for 5 years, founder Brian Marshall renovated the remains of the building and transformed it into the Coin Line venue. Our building still retains several features of the original arcade.",
    spanText10: <>Best bars and restaurants: Grimm Artisanal ales, Long Island Bar, Mood Ring, Gage and Tollner, Agies Counter<br /><br />Museums: Brooklyn museum, MOFAD (Museum of Food and Drink), Williamsburg Art and Historical Center</>,
    bgProps: bg2Data,
};

const bg3Data = {
    src: "/img/bg-2@2x.png",
    className: "bg-2",
};

const page2Shop3Data = {
    spanText1: "MERCH",
    spanText2: "TICKETS",
    spanText3: <>Standard<br />Ticket<br />$199.99</>,
    spanText4: <>VIP<br />Ticket<br />$399.99</>,
    spanText5: <>Backstage<br />Pass<br />$699.99</>,
    spanText6: "Shop",
    spanText7: "About Us",
    spanText8: "About Us",
    bg: "/img/logo-3@2x.png",
    spanText9: "Shop",
    logo: "/img/02-01-hat1-1-1@2x.png",
    x0203Shirt41: "/img/02-03-shirt4-1-1@2x.png",
    x02051: "/img/02-05-1-1@2x.png",
    x0204Sticker1: "/img/02-04-sticker-1-1@2x.png",
    x0201Hat11: "/img/02-06-1-1@2x.png",
    x02061: "/img/02-02-1-1@2x.png",
    spanText10: "$44.99",
    spanText11: "$4.99",
    spanText12: "$69.99",
    spanText13: "$24.99",
    spanText14: "$9.99",
    spanText15: "$29.99",
    bgProps: bg3Data,
};

const bg4Data = {
    src: "/img/bg-3@2x.png",
    className: "bg-3",
};

const page1Homepage3Data = {
    spanText1: "ARTISTS",
    heroblock: "/img/hero-image-1@2x.png",
    spanText2: "06.31.2022",
    spanText3: "GET TICKETS",
    artists: "/img/artists-1@2x.png",
    spanText4: "About Us",
    bg: "/img/logo-3@2x.png",
    spanText5: "Shop",
    spanText6: "Shop",
    spanText7: "About Us",
    bgProps: bg4Data,
};

const page2ShopData = {
    clBg12: "/img/cl-bg1-2@1x.png",
    clBg13: "/img/cl-bg1-2@1x.png",
    clBg14: "/img/cl-bg1-2@1x.png",
    clBg15: "/img/cl-bg1-2@1x.png",
    title: "MERCH",
    tickets: "TICKETS",
    standardTicket19999: <>Standard<br />Ticket<br />$199.99</>,
    vipTicket39999: <>VIP<br />Ticket<br />$399.99</>,
    backstagePass69999: <>Backstage<br />Pass<br />$699.99</>,
    infoCoinlineCom: "info@coinline.com",
    coinline: "@CoinLine",
    text1: "+(718) - 631- 2022",
    x0201Hat11: "/img/02-01-hat1-1@2x.png",
    x0203Shirt41: "/img/02-03-shirt4-1@2x.png",
    x02051: "/img/02-05-1@2x.png",
    x0204Sticker1: "/img/02-04-sticker-1@2x.png",
    x02061: "/img/02-06-1@2x.png",
    x02021: "/img/02-02-1@2x.png",
    price1: "$44.99",
    price2: "$4.99",
    price3: "$69.99",
    price4: "$24.99",
    price5: "$9.99",
    price6: "$29.99",
    shop: "Shop",
    logo: "/img/logo@2x.png",
    aboutUs: "About Us",
};

const page3AboutUsData = {
    clBg111: "/img/cl-bg1-11-1@1x.png",
    clBg113: "/img/cl-bg1-11-1@1x.png",
    clBg112: "/img/cl-bg1-11-1@1x.png",
    clBg114: "/img/cl-bg1-11-1@1x.png",
    title1: "what to do in BROOKLYN",
    infoCoinlineCom: "info@coinline.com",
    coinline: "@CoinLine",
    text3: "+(718) - 631- 2022",
    surname: "Best bars and restaurants: Grimm Artisanal ales, Long Island Bar, Mood Ring, Gage and Tollner, Agies Counter.",
    museumsBrooklynMu: "Museums: Brooklyn museum, MOFAD (Museum of Food and Drink), Williamsburg Art and Historical Center.",
    joshMillerT0KeeudofagUnsplash1: "/img/josh-miller-t0keeudofag-unsplash-1@1x.png",
    coinLineRefersT: "“Coin Line” refers to the standard tradition of placing a coin on an arcade machine to reserve your place in line. In 1982, a famous arcade in Brooklyn called “Barcade” burnt down in an unfortunate fire. After being untouched for 5 years, we renovated the remains of the building and transformed it into the Coin Line venue.",
    title2: "COIN LINE history",
    festival1: "/img/festival-1@1x.png",
    title3: "about COIN LINE",
    brooklynNyIsLoca: "Brooklyn, NY is located on the westernmost end of Long Island, home to several iconic attractions such as Coney Island, the Brooklyn Bridge, and Prospect Park.",
    welcomeToCoinLine: "Welcome to Coin Line- A single day music festival in downtown Brooklyn, New York. Our lineup consists of a mix of classic and beloved 80’s and 90’s bands, modern alternative rock, and electronic pop music. With Brooklyn as our home, we welcome a diverse crowd with unique music tastes.",
    image1: "/img/image-1@1x.png",
    aboutUs: "About Us",
    logo: "/img/logo-2@2x.png",
    shop: "Shop",
};

