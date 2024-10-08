import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import "./Breweries.css";
import "../Home/Home.css";
import "../../style/style.css";

import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";

import * as Constant from "../../utils/constants.js";
import * as Utils from "../../utils/utils.js";

import { withTranslation } from "react-i18next";

// const breweries = Utils.getBreweries();
class Breweries extends Component {
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

  onBreweryDetails = (id, title, e) => {
    let data = { id: id, pageid: "breweries" };
    sessionStorage.setItem(Constant.BREWERY_INFO, JSON.stringify(data));
    var url = title.replace(/ /g, "_").toLocaleLowerCase();
    this.props.history &&
      this.props.history.push(Constant.routes_url.breweryDetails + "/" + url);
  };

  componentDidMount() {
    document.getElementById("breweries-container") &&
      document.getElementById("breweries-container").scrollIntoView();
  }

  render() {
    const { t, breweries } = this.props;
    let bgImage = Utils.isMobile()
      ? process.env.PUBLIC_URL + "/images/mobile-bg-img/brewery@3x.jpg"
      : process.env.PUBLIC_URL +
        "/images/breweries/image-background-brewery.jpg";

    return (
      <div className="breweries-container" id="breweries-container">
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
            href="https://nipponsake.ca/breweries"
          />
        </Helmet>
        <div className=" header-img-section ">
          <img src={bgImage} className="product-banner" alt="" />
          <div className="product-banner-overlay-content">
            <div className="desktop-display">
              <Header
                pageId={Constant.page.breweries}
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
                pageId={Constant.page.breweries}
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

            <Container className="breweries-inner-text">
              <div className="breweries-main-title">
                <p className="breweries-subtitle">
                  {t("breweries.ourSakeSelection")}{" "}
                </p>
                <h2 className="breweries-title">{t("breweries.breweries")}</h2>
                <p className="breweries-subtitles">
                  {t("breweries.breweriesTagLine")}
                </p>
              </div>
            </Container>
          </div>
        </div>
        <Container className="breweries-section">
          <h1 className="breweries-main-heading">
            {t("breweries.japaneseSakeBreweries")}
          </h1>
          <p className="breweries-description">
            {t("breweries.breweriesText")}
          </p>
        </Container>
        <Container className="breweries-img-section">
          <div className="margin-top-breweries">
            <Row>
              {breweries &&
                breweries.map((brewery, i) => (
                  <Col md={6} className="padding-left" key={i}>
                    <div
                      className="breweries-box"
                      onClick={this.onBreweryDetails.bind(
                        this,
                        brewery.id,
                        Utils.getBreweryLocaleString(brewery.title)
                      )}
                    >
                      <img
                        src={Constant.image_path.brewery + brewery.image}
                        className="breweries-img"
                        alt="brewery"
                        style={{ cursor: "pointer" }}
                      />
                      <div className="breweries-text-section">
                        <p className="breweries-img-title">
                          {Utils.getBreweryLocaleString(brewery.title)}
                        </p>
                        <p className="breweries-img-subtitle">
                          {Utils.getBreweryLocaleString(brewery.prefecture)}
                        </p>
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </div>
        </Container>
        <div className="padding-brewery-section"></div>
      </div>
    );
  }
}

// export default withNamespaces()(Breweries);

const mapStateToProps = state => {
  return {
    state,
    breweries: state.data.breweries
  };
};

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(Breweries);
