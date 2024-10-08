import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Helmet } from "react-helmet";
import "./AboutUs.css";
import "../Home/Home.css";
import "../../style/style.css";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";

import * as Constant from "../../utils/constants.js";
import * as Utils from "../../utils/utils.js";

import { withTranslation } from "react-i18next";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
      teamSection: [
        {
          img: Constant.image_path.aboutus + "jay2.jpg",
          name: "Jay Evans MBA, MSc",
          role: "Co-Founder",
          position: "SSC I&II, WSET 3 Sake,SSI (Kikisake-shi)",
          location: "Toronto, Canada"
        },
        {
          img: Constant.image_path.aboutus + "forrest.jpg",
          name: "Manabu Mori",
          role: "Co-Founder - Former Rakuten Inc. Executive Officer",
          position: "SSI (Kikisake-shi)",
          location: "Tokyo, Japan"
        },
        {
          img: Constant.image_path.aboutus + "onishisan2.jpg",
          name: "Akiko Onishi",
          role: "Marketing",
          position: "WSET 1 Sake, Sales & Marketing Manager",
          location: "Canada / Japan"
        }
      ]
    };
  }

  /*
  ,
        {
          img: Constant.image_path.aboutus + "toru.jpg",
          name: "Toru Iyama",
          role: "Marketing",
          position: "Certified Nihonshu Navigator",
          location: "Toronto, Canada"
        }
  */
  openMenu = () => {
    this.setState({ mobileMenu: true });
  };
  closeMenu = () => {
    this.setState({ mobileMenu: false });
  };

  render() {
    const { t } = this.props;
    let bgImage = Utils.isMobile()
      ? process.env.PUBLIC_URL + "/images/aboutus/image-background-about.jpg"
      : process.env.PUBLIC_URL + "/images/aboutus/image-background-about.jpg";

    return (
      <div className="about-container">
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
            href="https://nipponsake.ca/aboutUs"
          />
        </Helmet>
        <div className="header-img-section">
          <img src={bgImage} className="about-banner" alt="" />
          <div className="about-banner-overlay-content">
            <div className="desktop-display">
              <Header
                pageId={Constant.page.aboutUs}
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

            <Container className="about-inner-text">
              <div className="about-main-title">
                <p className="about-subtitle">
                  {t("aboutUs.japanTraditionToTheWorld")}
                </p>
                <h2 className="about-title">{t("aboutUs.aboutUs")}</h2>
                <p className="about-subtitles">{t("aboutUs.tagLine")}</p>
              </div>
            </Container>
          </div>
        </div>
        <Container className="about-section">
          <div className="about-service-padding">
            <Row>
              <Col md={4}>
                <div className="about-service">
                  <img
                    src={Constant.image_path.aboutus + "concept.png"}
                    className="logo-responsive"
                    alt="concept"
                  />
                  <h2 className="about-titles">{t("aboutUs.concept")}</h2>
                  <p className="about-desc">{t("aboutUs.conceptData")}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="about-service">
                  <img
                    src={Constant.image_path.aboutus + "services.png"}
                    className="logo-responsive  service-width"
                    alt="services"
                  />
                  <h2 className="about-titles">{t("aboutUs.services")}</h2>
                  <p className="about-desc">{t("aboutUs.servicesData")}</p>
                </div>
              </Col>
              <Col md={4}>
                <div className="about-service width-100-services">
                  <img
                    src={Constant.image_path.aboutus + "team_icon.png"}
                    className="logo-responsive"
                    alt="team"
                  />
                  <h2 className="about-titles">{t("aboutUs.team")}</h2>
                  <p className="about-desc">{t("aboutUs.teamData")}</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <Container className="about-meat-team-section">
          <h2 className="team-main-title">{t("aboutUs.meetOurTeam")}</h2>
          <Row>
            {this.state.teamSection.map((team, i) => (
              <Col md={4} key={i}>
                <div className="about-team">
                  <img
                    src={team.img}
                    className="about-team-img"
                    alt="team-section"
                  />
                  <h2 className="about-team-title">{team.name}</h2>

                  <div className="role-section">
                    <span className="about-team-desc">{team.role}:</span>
                    <span className="about-team-desc">{team.position}</span>
                  </div>
                  <div className="role-section">
                    <span className="about-team-desc">
                      <b>{team.location}</b>
                    </span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
        <div className="space"></div>
        <div className="border-bottom"></div>
      </div>
    );
  }
}

export default withTranslation()(AboutUs);
