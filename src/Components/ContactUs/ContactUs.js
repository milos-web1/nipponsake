import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Button from 'react-bootstrap/Button'
import { Helmet } from "react-helmet";

import "./ContactUs.css";
import "../Home/Home.css";
import "../../style/style.css";
import ContactForm from "../ContactForm/ContactForm";

import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
import MapContainer from "../MapContainer/MapContainer";
import * as Constant from "../../utils/constants.js";
import * as Utils from "../../utils/utils.js";

import { withTranslation } from "react-i18next";

class ContactUs extends Component {
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

  componentDidMount() {
    document.getElementById("contact-container") &&
      document.getElementById("contact-container").scrollIntoView();
  }

  render() {
    const { t } = this.props;
    let bgImage = Utils.isMobile()
      ? process.env.PUBLIC_URL + "/images/contact/contact-us-mobile.jpg"
      : process.env.PUBLIC_URL +
        "/images/contact/contactus-background-image2.jpg";

    return (
      <div className="contact-container" id="contact-container">
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
          <link
            rel="canonical"
            href="https://nipponsake.ca/contactUs"
          />
        </Helmet>
        <div className=" header-img-section ">
          <img src={bgImage} className="contact-banner" alt="" />
          <div className="contact-banner-overlay-content">
            <div className="desktop-display">
              <Header
                pageId={Constant.page.contactUs}
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
                pageId={Constant.page.contactUs}
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
                  src={process.env.PUBLIC_URL + "/images/logo/logo_white.png"}
                  className="logo-responsive"
                  alt=""
                />
              </div>
            </div>

            <Container className="contact-inner-text">
              <div className="contact-main-title">
                <p className="contact-subtitle">
                  {t("contactUs.japanTraditionToTheWorld")}
                </p>
                <h2 className="contact-title">{t("contactUs.contactUs")}</h2>
                <p className="contact-subtitles">
                  {t("contactUs.contactTagLine")}
                </p>
              </div>
            </Container>
          </div>
        </div>
        <Container className="contact-section">
          <div className="contact-address-padding">
            <Row>
              <Col md={6} className=" contact-form-display-mobile">
                <div className="form-section">
                  {Utils.isMobile() && <ContactForm />}
                </div>
              </Col>

              <Col md={6}>
                <div className="address-section">
                  <h2 className="address-main-title">
                    {t("contactUs.address")}
                  </h2>
                  <ul className="address"> 
                    <li>
                      {" "}
                      <a><b>Nippon Sake Imports</b></a>
                    </li>
                    <li>
                      {" "}
                      <a>Unit A2</a>
                    </li>
                    <li>
                      {" "}
                      <a>724 Caledonia Road</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a>Toronto, ON ON M6B 3X9</a>
                    </li>
                    <li>
                      {" "}
                      <a
                        href="https://www.nipponsake.ca/"
                        className="new-web"
                        target="_blank"
                      >
                        https://www.nipponsake.ca/
                      </a>
                    </li>
                  </ul>
                  <div className="map">
                    <MapContainer
                      width="100%"
                      height="339px"
                      coord={Constant.map_initial_coordinate}
                    ></MapContainer>
                  </div>
                </div>
              </Col>
              <Col md={6} className=" contact-form-display-desktop">
                <div className="form-section">
                  {!Utils.isMobile() && <ContactForm />}
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <div className="border-bottom"></div>
      </div>
    );
  }
}

export default withTranslation()(ContactUs);
