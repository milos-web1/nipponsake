import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Helmet } from "react-helmet";

import "./Home.css";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
import Slider from "../Slider/Slider";
import ProductList from "../ProductList/ProductList";
import * as Constant from "../../utils/constants.js";
import * as Utils from "../../utils/utils.js";
import { withTranslation } from "react-i18next";

import "../../style/style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false
    };
  }

  openMenu = () => {
    this.setState({ mobileMenu: true });
  };
  closeMenu = () => {
    this.setState({ mobileMenu: false });
  };
  onWhatIsSake = () => {
    this.props.history &&
      this.props.history.push(Constant.routes_url.whatIsSake);
  };

  onProducts = () => {
    this.props.history && this.props.history.push(Constant.routes_url.products);
  };

  onHome = () => {
    this.props.history && this.props.history.push(Constant.routes_url.home);
  };

  onBreweries = () => {
    this.props.history &&
      this.props.history.push(Constant.routes_url.breweries);
  };

  render() {
    const { t } = this.props;
    let bgImage = Utils.isMobile()
      ? process.env.PUBLIC_URL + "/images/mobile-bg-img/background-image.jpg"
      : process.env.PUBLIC_URL + "/images/home/main2.jpg";
    return (
      <div className="wrapper">
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
            content="Japanese Sake, Craft Sake, Nihonshu, Japan Imports, Canada Sake Import, Ontario Sake, Rice Wine, Japanese wine, Importing Sake, Toronto Sake, Ontario Sake, Rice Wine"
          />
          <link rel="canonical" href="https://nipponsake.ca/" />
          <meta property="og:url" content="https://nipponsake.ca/" />
          <meta
            property="og:title"
            content="Craft Sake Imports Direct From Japan"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://nipponsake.ca/images/home/main2.jpg"
          />

          <script type="application/ld+json">{`
       {
              
        "@context":"https:\/\/schema.org",
        "@type":"Organization",
        "url":"https:\/\/nipponsake.ca\/",
      
        "@id":"https:\/\/nipponsake.ca\/#organization",
        "name":"NipponSake",
        "logo":"https://nipponsake.ca/favicon.ico",
        "contactPoint": [{
          "@type": "ContactPoint",
          "telephone": "+1-000-000-0000",
          "contactType": "customer service"
        }]
      }
        `}</script>
        </Helmet>
        <div className="bg-home-page header-img-section">
          <img src={bgImage} alt="" className="banner" />
          <div className="banner-overlay-content">
            <div className="header-home">
              <div className="desktop-display">
                <Header
                  pageId={Constant.page.home}
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
                  pageId={Constant.page.home}
                  closeMenu={this.closeMenu}
                  history={this.props.history}
                />
              </div>

              <div
                className="icon-bar-display clearfix"
                onClick={this.openMenu}
              >
                <div className="icon-bar-mobile">
                  <i className="fa fa-bars"></i>
                </div>
                <div className="logo-mobile" onClick={this.onHome}>
                  <img
                    src={Constant.image_path.logo + "logo_white@3x.png"}
                    alt="logo"
                    className="logo-mobile-img"
                  />
                </div>
              </div>
            </div>
            <Container className="main-banner-width">
              <div className="text-title">
                <Row>
                  <Col md={5} className="home-banner-padding-left-none">
                    <div className="title">
                      <div className="title-postion">
                        <p className="subtitle">
                          {t("home.japanTraditionToTheWorld")}
                        </p>
                        <h1 className="sub-heading">
                          {t("home.trueCraftSake")}
                        </h1>
                        <p className="sub-title">{t("home.tagline")}</p>
                        <div className="btn-div">
                          <Button
                            className="red-more-btn"
                            onClick={this.onProducts}
                          >
                            {t("home.readMore")}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col md={7} xs={12}>
                    <div className="banner-img">
                      <img
                        style={{ display: "none" }}
                        src={
                          Constant.image_path.home +
                          "hero-product-image-png24.png"
                        }
                        className="hero-product-imge "
                        alt="hero"
                      />
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </div>
        </div>

        {/*slider start here*/}
        <div className="parent-box">
          <div className="slider-div" onClick={this.onBreweries}>
            <div className="displya-vertical-align">
              <div className="dot-dot">
                <img
                  src={Constant.image_path.common + "dots.png"}
                  alt="dot-img"
                />
              </div>
            </div>
          </div>
        </div>
        <Container className="brewery-main-heading clearfix">
          <p className="main-slider-title"> {t("home.ourSelectedSake")} </p>
          <p className="brewery-slider-heading">{t("home.breweries")}</p>
          <div className="clearfix"></div>
        </Container>
        <div className="brewery-slider-main-section">
          <Container className="brewery-slider-section">
            <Slider history={this.props.history} />
          </Container>
        </div>

        {/*slider end here*/}

        <Container className="sake-width">
          <div className="innder-padding">
            <Row>
              <Col md={5} className="">
                <div className="margin-sake-img">
                  <img
                    src={Constant.image_path.home + "what-is-sake.png"}
                    className="sake-width-img"
                    alt="sake img"
                  />
                </div>
              </Col>
              <Col md={7} className="mobile-padding-none">
                <div className="read-mpre-text-box">
                  <h2>{t("home.whatIsSake")}</h2>
                  <p> {t("home.whatIsSakeInfo")}</p>
                  <div className="read-btn-div">
                    <Button
                      className="red-more-btn"
                      onClick={this.onWhatIsSake}
                    >
                      {t("home.readMore")}
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        {/*bg img start here*/}
        <div className="bg-img-home-page display-mobile-none"></div>
        {/*bg img end here*/}

        {/*bg img start here*/}
        <div className="parent-box">
          <div className="product-div" onClick={this.onProducts}>
            <div className="displya-vertical-align">
              <div className="dot-dot">
                <img
                  src={Constant.image_path.common + "dots.png"}
                  alt="dot-img"
                />
              </div>
            </div>
          </div>
        </div>
        <Container className="product-list clearfix">
          <h2 className="product-heading">{t("home.products")}</h2>
          <div className="clearfix"></div>
        </Container>

        <Container className="product-list-margin">
          <ProductList history={this.props.history} />
        </Container>
        <div className="home-space"></div>
        <div className="border-bottom"></div>
        {/*bg img end here*/}
      </div>
    );
  }
}
export default withTranslation()(Home);
