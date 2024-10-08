import React, { Component } from "react";

import "./Header.css";
import * as Constant from "../../utils/constants.js";
import DropdownList from "../DropdownList/DropdownList.js";
import { withTranslation } from "react-i18next";

class Header extends Component {
  onAboutUs = () => {
    this.props.history && this.props.history.push(Constant.routes_url.aboutUs);
  };
  onProducts = () => {
    this.props.history && this.props.history.push(Constant.routes_url.products);
  };
  onBreweries = () => {
    this.props.history &&
      this.props.history.push(Constant.routes_url.breweries);
  };

  onWhatIsSake = () => {
    this.props.history &&
      this.props.history.push(Constant.routes_url.whatIsSake);
  };
  onContactUs = () => {
    this.props.history &&
      this.props.history.push(Constant.routes_url.contactUs);
  };

  onHome = () => {
    this.props.history && this.props.history.push(Constant.routes_url.home);
  };

  render() {
    const { t } = this.props;

    return (
      <header>
        <div className="main-header clearfix">
          <div className="nav-menu clearfix">
            <div id="logo" onClick={this.onHome}>
              <img
                src={Constant.image_path.logo + "logo_white.png"}
                className="logo-responsive"
                alt="logo"
              />
            </div>
            <ul className="nav-items">
              <li
                className={
                  this.props.pageId === Constant.page.home ? "active" : ""
                }
              >
                <a onClick={this.onHome}>{t("menu.home")}</a>
              </li>
              <li
                className={
                  this.props.pageId === Constant.page.aboutUs ? "active" : ""
                }
              >
                <a onClick={this.onAboutUs}>{t("menu.aboutUs")}</a>
              </li>
              <li
                className={
                  this.props.pageId === Constant.page.products ? "active" : ""
                }
              >
                <a onClick={this.onProducts}>{t("menu.product")}</a>
              </li>
              <li
                className={
                  this.props.pageId === Constant.page.breweries ? "active" : ""
                }
              >
                <a onClick={this.onBreweries}>{t("menu.breweries")}</a>
              </li>
              <li
                className={
                  this.props.pageId === Constant.page.whatIsSake ? "active" : ""
                }
              >
                <a onClick={this.onWhatIsSake}>{t("menu.whatIsSake")}</a>
              </li>
              <li
                className={
                  this.props.pageId === Constant.page.contactUs ? "active" : ""
                }
              >
                <a onClick={this.onContactUs}>{t("menu.contactUs")}</a>
              </li>
            </ul>
          </div>
          <div className="social-icons">
            <ul className="social-itmes">
              <li>
                <a href={Constant.social_url.facebook} target="_blank" rel="noopener noreferrer">
                  <img
                    src={Constant.image_path.common + "facebook.png"}
                    className="logo-responsive"
                    alt="social"
                  />
                </a>
              </li>
              <li>
                <a href={Constant.social_url.instagram} target="_blank" rel="noopener noreferrer">
                  <img
                    src={Constant.image_path.common + "instagram_2.png"}
                    className="logo-responsive"
                    alt="social"
                  />
                </a>
              </li>
              <li>
                <a href={Constant.social_url.pinterest} target="_blank" rel="noopener noreferrer">
                  <img
                    src={Constant.image_path.common + "pinterest_2.png"}
                    className="logo-responsive"
                    alt="social"
                  />
                </a>
              </li>
              <li>
                <a href={Constant.social_url.twitter} target="_blank" rel="noopener noreferrer">
                  <img
                    src={Constant.image_path.common + "twitter_2.png"}
                    className="logo-responsive"
                    alt="social"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="lang-section">
            <DropdownList />
          </div>
        </div>
      </header>
    );
  }
}
export default withTranslation()(Header);
