import React, { Component } from "react";

import "./MobileHeader.css";

import "./mobile.js";
import * as Constant from "../../utils/constants.js";
import DropdownList from "../DropdownList/DropdownList";
import { withTranslation } from "react-i18next";

class MobileHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      closeMenu: false
    };
  }

  closeMenuItem = () => {
    this.props.closeMenu();
  };

  onAboutUs = () => {
    this.props.history && this.props.history.push(Constant.routes_url.aboutUs);
    this.closeMenuItem();
  };

  onProducts = () => {
    this.props.history && this.props.history.push(Constant.routes_url.products);
    this.closeMenuItem();
  };

  onBreweries = () => {
    this.props.history &&
      this.props.history.push(Constant.routes_url.breweries);
    this.closeMenuItem();
  };

  onWhatIsSake = () => {
    this.props.history &&
      this.props.history.push(Constant.routes_url.whatIsSake);
    this.closeMenuItem();
  };
  onContactUs = () => {
    this.props.history &&
      this.props.history.push(Constant.routes_url.contactUs);
    this.closeMenuItem();
  };

  onHome = () => {
    this.props.history && this.props.history.push(Constant.routes_url.home);
    this.closeMenuItem();
  };

  render() {
    const { t } = this.props;

    return (
      <div className="main-header-mobile-block">
        <div id="mySidenav" className="sidenav">
          <a
            //    href="javascript:void(0)"
            className="closebtn close-menu-items"
            onClick={this.closeMenuItem}
          >
            <img
              src={Constant.image_path.common + "close.png"}
              className=""
              alt="logo"
            />
          </a>
          <a onClick={this.onHome} className="close-menu-items">
            <img
              src={Constant.image_path.logo + "logo_white.png"}
              className="logo-mobile-img"
              alt="logo"
            />
          </a>

          <a
            className={
              this.props.pageId === Constant.page.home
                ? "active-item"
                : "intive-item"
            }
            onClick={this.onHome}
          >
            {t("menu.home")}
          </a>
          <a
            className={
              this.props.pageId === Constant.page.aboutUs
                ? "active-item"
                : "intive-item"
            }
            onClick={this.onAboutUs}
          >
            {t("menu.aboutUs")}
          </a>
          <a
            className={
              this.props.pageId === Constant.page.products
                ? "active-item"
                : "intive-item"
            }
            onClick={this.onProducts}
          >
            {t("menu.product")}
          </a>
          <a
            className={
              this.props.pageId === Constant.page.breweries
                ? "active-item"
                : "intive-item"
            }
            onClick={this.onBreweries}
          >
            {t("menu.breweries")}
          </a>
          <a
            className={
              this.props.pageId === Constant.page.whatIsSake
                ? "active-item"
                : "intive-item"
            }
            onClick={this.onWhatIsSake}
          >
            {t("menu.whatIsSake")}
          </a>
          <a
            className={
              this.props.pageId === Constant.page.contactUs
                ? "active-item"
                : "intive-item"
            }
            onClick={this.onContactUs}
          >
            {t("menu.contactUs")}
          </a>

          <a
            href={Constant.social_url.facebook}
            target="_blank"
            className="mobile-link"
          >
            <img
              src={Constant.image_path.common + "facebook@2x.png"}
              className="logo-responsive social-width"
              alt="logo"
            />
          </a>

          <a
            href={Constant.social_url.instagram}
            target="_blank"
            className="mobile-link"
          >
            <img
              src={Constant.image_path.common + "instagram_2@2x.png"}
              className="logo-responsive social-width"
              alt="logo"
            />
          </a>

          <a
            href={Constant.social_url.pinterest}
            target="_blank"
            className="mobile-link"
          >
            <img
              src={Constant.image_path.common + "pinterest_2@2x.png"}
              className="logo-responsive social-width"
              alt="logo"
            />
          </a>

          <a
            href={Constant.social_url.twitter}
            target="_blank"
            className="mobile-link"
          >
            <img
              src={Constant.image_path.common + "twitter_2@2x.png"}
              className="logo-responsive social-width"
              alt="logo"
            />
          </a>

          <a className="mobile-link">
            <DropdownList />
          </a>
        </div>
      </div>
    );
  }
}

export default withTranslation()(MobileHeader);
