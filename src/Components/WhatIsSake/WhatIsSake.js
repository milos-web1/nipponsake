import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from 'react-bootstrap/Button'
import Table from "react-bootstrap/Table";
import { Helmet } from "react-helmet";

import "./WhatIsSake.css";
import "../Home/Home.css";
import "../../style/style.css";

import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
import * as Constant from "../../utils/constants.js";
import * as Utils from "../../utils/utils.js";

import { withTranslation } from "react-i18next";

class WhatIsSake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
      tableData: [
        {
          SpecialDesignation:
            "Junmai Daiginjō-shu (純米大吟醸酒, Pure rice, Very Special brew)",
          Ingredients: "Rice, Kōji rice",
          RicePolishingRatio: "Below 50%",
          PercentageOfKōjiRice: "At least 15%"
        },
        {
          SpecialDesignation: "Daiginjō-shu (大吟醸酒, Very Special brew)",
          Ingredients: "Rice, Kōji rice, alcohol",
          RicePolishingRatio: "Below 50%",
          PercentageOfKōjiRice: "At least 15%"
        },
        {
          SpecialDesignation:
            "Junmai Ginjō-shu (純米吟醸酒, Pure rice, Special brew)",
          Ingredients: "Rice, Kōji rice",
          RicePolishingRatio: "Below 60%",
          PercentageOfKōjiRice: "At least 15%"
        },
        {
          SpecialDesignation: "Ginjō-shu (吟醸酒, Special brew)",
          Ingredients: "Rice, Kōji rice, alcohol",
          RicePolishingRatio: "Below 60%",
          PercentageOfKōjiRice: "At least 15%"
        },
        {
          SpecialDesignation:
            "Tokubetsu Junmai-shu (特別純米酒, Special Pure rice)",
          Ingredients: "Rice, Kōji rice",
          RicePolishingRatio: "Below 60%",
          PercentageOfKōjiRice: "At least 15%"
        },
        {
          SpecialDesignation:
            "Tokubetsu Honjōzō-shu (特別本醸造酒, Special Genuine brew)",
          Ingredients: "Rice, Kōji rice, alcohol",
          RicePolishingRatio: "Below 60%",
          PercentageOfKōjiRice: "At least 15%"
        }
      ]
    };
  }
  openMenu = () => {
    this.setState({ mobileMenu: true });
  };

  closeMenu = () => {
    this.setState({ mobileMenu: false });
  };

  componentDidMount() {
    document.getElementById("what-is-sake-container") &&
      document.getElementById("what-is-sake-container").scrollIntoView();
  }
  render() {
    const { t } = this.props;
    let bgImage = Utils.isMobile()
      ? process.env.PUBLIC_URL + "/images/mobile-bg-img/whatissake.png"
      : process.env.PUBLIC_URL + "/images/whatissake/background-whatisSak.jpg";

    return (
      <div className="what-is-sake-container" id="what-is-sake-container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Craft Sake Imports Direct From Japan</title>
          <meta
            name="description"
            content="Experts in importing craft sake from Japan's finest medium/small breweries into Canada. "
          />
          <meta
            name="keywords"
            content="Japanese Sake, Craft Sake, Nihonshu, Japan Imports, Canada Sake Import, Ontario Sake, Rice Wine, Japanese wine, Importing Sake"
          />
          <link
            rel="canonical"
            href="https://nipponsake-cdd8f.web.app/whatIsSake"
          />
        </Helmet>
        <div className=" header-img-section ">
          <img src={bgImage} className="what-is-sake-banner" alt="" />

          <div className="what-is-sake-banner-overlay-content">
            <div className="desktop-display">
              <Header
                pageId={Constant.page.whatIsSake}
                history={this.props.history}
              />
            </div>

            <div
              className={
                this.state.mobileMenu === false
                  ? "mobile-display-none"
                  : "mobile-display-block"
              }
            >
              <MobileHeader
                pageId={Constant.page.whatIsSake}
                closeMenu={this.closeMenu}
                history={this.props.history}
              />
            </div>
            <div className="icon-bar-display clearfix" onClick={this.openMenu}>
              <div className="icon-bar-mobile">
                <i className="fa fa-bars"></i>
              </div>
              <div className="logo-mobile">
                <img
                  src={Constant.image_path.logo + "logo_white.png"}
                  className="logo-responsive"
                  alt="logo"
                />
              </div>
            </div>

            <Container className="whatIsSake-inner-text">
              <div className="whatIsSake-main-title">
                <p className="whatIsSake-subtitle">
                  {t("whatIsSake.japanTraditionToTheWorld")}
                </p>
                <h2 className="whatIsSake-title">
                  {t("whatIsSake.whatIsSake")}
                </h2>
                <p className="whatIsSake-subtitles">
                  {t("whatIsSake.tagline")}
                </p>
              </div>
            </Container>
          </div>
        </div>

        <Container className="making-section">
          <div className="making-row">
            <Row>
              <Col md={6}>
                <div className="text-making">
                  <h2 className="making-heading">
                    {" "}
                    {t("whatIsSake.theMakingprocess")}
                  </h2>
                  <p className="making-title">
                    The brewing process for sake differs from the process for
                    beer, where the conversion from starch to sugar and then
                    from sugar to alcohol occurs in two distinct steps.
                  </p>
                  <p className="making-subtitles">
                    Like other rice wines, when sake is brewed, these
                    conversions occur simultaneously. Furthermore, the alcohol
                    content differs between sake, wine, and beer; while most
                    beer contains 3–9% ABV, wine generally contains 9–16%
                    ABV,[4], and undiluted sake contains 18–20% ABV (although
                    this is often lowered to about 15% by diluting with water
                    prior to bottling).
                  </p>
                  <p className="making-subtitles">
                    In Japanese, the word "sake" (kanji:{" "}
                    <span className="font-style">酒;</span> 'liquor'; also
                    pronounced shu in some compounds) can refer to any alcoholic
                    drink, while the beverage called "sake" in English is
                    usually termed nihonshu (
                    <span className="font-style">日本酒 </span>; meaning
                    'Japanese liquor'). Under Japanese liquor aws, sake is
                    labelled with the word "seishu" (
                    <span className="font-style">清酒 </span>; 'clear liquor'),
                    a synonym not commonly used in conversation.
                  </p>
                  <p className="making-subtitles">
                    In Japan, where it is the national beverage, sake is often
                    served with special ceremony, where it is gently warmed in a
                    small earthenware or porcelain bottle and sipped from a
                    small porcelain cup called a sakazuki. As with wine, the
                    recommended serving temperature of sake varies greatly by
                    type.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="making-img-section">
                  <img
                    src={Constant.image_path.whatissake + "making.png"}
                    className="making-img"
                    alt="sake"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <Container className="production-section">
          <div className="production-row">
            <Row>
              <Col md={6} className="production-img-section-mobile-none">
                <div className="production-img-section">
                  <img
                    src={Constant.image_path.whatissake + "production.png"}
                    className="making-img"
                    alt="sake"
                  />
                </div>
              </Col>
              <Col md={6}>
                <div className="text-production">
                  <h2 className="production-heading">
                    {" "}
                    {t("whatIsSake.production")}
                  </h2>
                  <p className="production-title">Rice</p>
                  <p className="production-subtitles">
                    The rice used for brewing sake is called saka mai{" "}
                    <span className="font-style">酒米 </span>
                    (sake rice), or officially shuzō kōtekimai{" "}
                    <span className="font-style">酒造好適米 </span>
                    (sake-brewing suitable rice). There are at least 80 types of
                    sake rice in Japan. Among these, Yamadanishiki,
                    Gohyakumangoku, Miyamanishiki and Omachi rice are very
                    popular. The grain is larger, stronger (If a grain is small
                    or weak, it will break in the process of polishing), and
                    contains less protein and lipid than the ordinary rice eaten
                    by the Japanese. Sake rice is used only for making sake,
                    because it is unpalatable for eating. .
                  </p>
                  <p className="production-title">Brewing</p>
                  <p className="production-subtitles">
                    Sake is produced by the multiple parallel fermentation of
                    rice. The rice is first polished to remove the protein and
                    oils from the exterior of the rice grains, leaving behind
                    starch. Thorough milling leads to fewer congeners and
                    generally a more desirable product.
                  </p>
                </div>
              </Col>
              <Col md={6} className="production-img-section-display-mobile">
                <div className="production-img-section">
                  <img
                    src={Constant.image_path.whatissake + "production.png"}
                    className="making-img"
                    alt="sake"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
        <div className="varieties-title-main-section">
          <h1 className="varieties-title"> {t("whatIsSake.varieties")}</h1>
        </div>
        <div className="varieties-table-scrolling">
          <Container className="varieties-section">
            <div className="varieties-table">
              <Table borderless>
                <thead>
                  <tr className="table-heading-border">
                    <th className="table-heading">Special Designation</th>
                    <th className="table-heading">Ingredients</th>
                    <th className="table-heading">Rice Polishing Ratio</th>
                    <th className="table-heading"> Percentage of Kōji rice</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((table, i) => (
                    <tr key={i} className="table-items">
                      <td>{table.SpecialDesignation}</td>
                      <td>{table.Ingredients}</td>
                      <td>{table.RicePolishingRatio}</td>
                      <td>{table.PercentageOfKōjiRice}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Container>
        </div>

        <div className="border-bottom"></div>
      </div>
    );
  }
}

export default withTranslation()(WhatIsSake);
