import React, { Component } from "react";
import ScrollToTop from "react-scroll-up";
import "./Footer.css";
import * as Constant from "../../utils/constants.js";

import { withTranslation } from "react-i18next";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: Constant.page.home
    };
  }

  componentDidMount() {
    //alert("componentDidMount")
  }
  onAboutUs = () => {
    this.props.history && this.props.history.push(Constant.routes_url.aboutUs);
    this.setState({ value: Constant.page.aboutUs });
  };
  onProducts = () => {
    this.props.history && this.props.history.push(Constant.routes_url.products);
    this.setState({ value: Constant.page.products });
  };
  onBreweries = () => {
    this.props.history &&
      this.props.history.push(Constant.routes_url.breweries);
    this.setState({ value: Constant.page.breweries });
  };

  onWhatIsSake = () => {
    this.props.history &&
      this.props.history.push(Constant.routes_url.whatIsSake);
    this.setState({ value: Constant.page.whatIsSake });
  };
  onContactUs = () => {
    this.props.history &&
      this.props.history.push(Constant.routes_url.contactUs);
    this.setState({ value: Constant.page.contactUs });
  };

  onHome = () => {
    this.props.history && this.props.history.push(Constant.routes_url.home);
    this.setState({ value: Constant.page.home });
  };

  render() {
    const { t } = this.props;
    return (
      <div className="footer">
        <div className="footer-top clearfix">
          <div className="footer-list">
            <ul className="footer-list-items">
              <li>
                <a
                  className={
                    this.state.value === Constant.page.home
                      ? "active-footer"
                      : ""
                  }
                  onClick={this.onHome}
                >
                  {t("footer.home")}
                </a>
              </li>
              <li>
                <a
                  className={
                    this.state.value === Constant.page.aboutUs
                      ? "active-footer"
                      : ""
                  }
                  onClick={this.onAboutUs}
                >
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a
                  className={
                    this.state.value === Constant.page.products
                      ? "active-footer"
                      : ""
                  }
                  onClick={this.onProducts}
                >
                  {t("footer.product")}
                </a>
              </li>
              <li>
                <a
                  className={
                    this.state.value === Constant.page.breweries
                      ? "active-footer"
                      : ""
                  }
                  onClick={this.onBreweries}
                >
                  {t("footer.breweries")}
                </a>
              </li>
              <li>
                <a
                  className={
                    this.state.value === Constant.page.whatIsSake
                      ? "active-footer"
                      : ""
                  }
                  onClick={this.onWhatIsSake}
                >
                  {t("footer.whatIsSake")}
                </a>
              </li>
              <li>
                <a
                  className={
                    this.state.value === Constant.page.contactUs
                      ? "active-footer"
                      : ""
                  }
                  onClick={this.onContactUs}
                >
                  {t("footer.contactUs")}
                </a>
              </li>
              <li>
                <a className={this.state.value === Constant.page.onlineStore? "active-footer": ""}
                  href="https:\\shop.nipponsake.ca" rel="noopener noreferrer">
                  {t("footer.onlineStore")}
                </a>
              </li>
            </ul>

          </div>
          <div className="footer-right">
            <ul className="footer-right-social desktop-social-icons">
              <li>
                <a href={Constant.social_url.facebook} target="_blank" rel="noopener noreferrer">
                  <img
                    src={Constant.image_path.common + "facebook_2.png"}
                    className="logo-responsive"
                    alt="social"
                  />
                </a>
              </li>
              <li>
                <a href={Constant.social_url.instagram} target="_blank">
                  <img
                    src={Constant.image_path.common + "instagram.png"}
                    className="logo-responsive"
                    alt="social"
                  />
                </a>
              </li>
              <li>
                <a href={Constant.social_url.pinterest} target="_blank">
                  <img
                    src={Constant.image_path.common + "pinterest.png"}
                    className="logo-responsive"
                    alt="social"
                  />
                </a>
              </li>
              <li>
                <a href={Constant.social_url.twitter} target="_blank">
                  <img
                    src={Constant.image_path.common + "twitter.png"}
                    className="logo-responsive"
                    alt="social"
                  />
                </a>
              </li>
            </ul>
            <ul className="footer-right-social mobile-social-icons">
              <li>
                <a href={Constant.social_url.facebook} target="_blank">
                  <img
                    src={Constant.image_path.common + "twitter@3x.png"}
                    className="footer-responsive mobile-size-socail"
                    alt="social"
                  />
                </a>
              </li>
              <li>
                <a href={Constant.social_url.instagram} target="_blank">
                  <img
                    src={Constant.image_path.common + "pinterest@3x.png"}
                    className="footer-responsive mobile-size-socail"
                    alt="social"
                  />
                </a>
              </li>
              <li>
                <a href={Constant.social_url.pinterest} target="_blank">
                  <img
                    src={Constant.image_path.common + "instagram@3x.png"}
                    className="footer-responsive mobile-size-socail"
                    alt="social"
                  />
                </a>
              </li>
              <li>
                <a href={Constant.social_url.twitter} target="_blank">
                  <img
                    src={Constant.image_path.common + "facebook_2@3x.png"}
                    className="footer-responsive mobile-size-socail"
                    alt="social"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bootom clearfix">
          <div className="footer-desc display-desktop">
            {t("footer.footerText")}
            <ScrollToTop showUnder={360}>
              <a className="move-icons">
                <img
                  src={Constant.image_path.common + "move-up.png"}
                  className="logo-responsive"
                  alt="social"
                />
              </a>
            </ScrollToTop>
          </div>
          <div className="footer-desc display-mobile">
            {t("footer.footerText")}
            <ScrollToTop showUnder={160}>
              <a className="move-icons">
                <img
                  src={Constant.image_path.common + "move-up.png"}
                  className="logo-responsive"
                  alt="social"
                />
              </a>
            </ScrollToTop>
          </div>
        </div>
      </div>
    );
  }
}
export default withTranslation()(Footer);
