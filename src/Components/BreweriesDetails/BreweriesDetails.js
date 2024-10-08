import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import "./BreweriesDetails.css";
import "../Home/Home.css";
import "../../style/style.css";
import VideoSection from "../VideoSection/VideoSection";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
import Gallery from "../Gallery/Gallery";
import BreweryProducts from "../BreweryProducts/BreweryProducts";

import * as Constant from "../../utils/constants.js";
import * as Utils from "../../utils/utils.js";
import * as LocalizedStrings from "../../locales/en/content.json";
import { Redirect } from "react-router-dom";
import {
  getProducts,
  getBreweries,
  getCategories
} from "../../actions/productsActions";
class BreweriesDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenu: false,
      id: null,
      breweryKey: null
    };
  }

  renderRedirect = () => {
    console.log("FAILED. REDIRECTING !");
    return <Redirect to="https://www.nipponsake.ca" />;
  };

  componentDidMount() {
    // this.props.getProducts();
    this.props.getBreweries();
    // this.props.getCategories();
    document.getElementById("breweries-container") &&
      document.getElementById("breweries-container").scrollIntoView();

    const breweryKey = Object.entries(LocalizedStrings.brewery).find(
      ([key, value]) =>
        value ===
        this.props.match.params.id.replace(/_/g, " ").toLocaleUpperCase()
    );

    if (breweryKey) {
      this.setState({ breweryKey: breweryKey[0] });
    }

    var data = sessionStorage.getItem(Constant.BREWERY_INFO);
    var breweryInfo = JSON.parse(data);

    if (!breweryInfo) {
      return this.renderRedirect();
    }
    this.setState({ id: breweryInfo.id });
  }

  openMenu = () => {
    this.setState({ mobileMenu: true });
  };

  closeMenu = () => {
    this.setState({ mobileMenu: false });
  };

  onProductDots = () => {
    this.props.history && this.props.history.push(Constant.routes_url.products);
  };

  getBreweryById = id => {
    const { breweries } = this.props;
    let brewery =
      breweries &&
      breweries.filter(brewery => {
        if (brewery.id === id) return true;
      });

    return brewery && brewery.length > 0 ? brewery[0] : null;
  };

  render() {
    const { breweries } = this.props;
    let brewery;
    if (this.state.id)
      brewery = this.state.id && this.getBreweryById(this.state.id);
    else {
      let breweryId =
        breweries &&
        breweries.filter(brewery => {
          if (brewery.title === this.state.breweryKey)
            return this.setState({ id: brewery.id });
        });
      brewery = this.state.id && this.getBreweryById(breweryId);
    }
    let bgImage =
      brewery && Constant.image_path.brewery + brewery.backgroundImage;

    return (
      <div id="breweries-container" className="breweries-container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>
            {"Craft Sake Imports Direct From Japan " +
              `${brewery && Utils.getBreweryLocaleString(brewery.title)}`}
          </title>
          <meta
            name="description"
            content={brewery ?
                Utils.getBreweryLocaleString(brewery.shortDesc) :
                "Experts in importing craft sake from Japan's finest medium/small breweries into Canada."
            }
          />
          <meta
            name="keywords"
            content={`${brewery ? `${Utils.getBreweryLocaleString(brewery.title)}, ` : ''}Sake Toronto, ` +
            'Japanese Sake Canada, Japanese Sake, Craft Sake, Nihonshu, Japan Imports, ' +
            'Canada Sake Import, Ontario Sake, Rice Wine, Japanese wine, Importing Sake, Toronto Sake, Ontario Sake, Sake Importer'
            }
          />
          <link
            rel="canonical"
            href={
              "https://nipponsake.ca/" +
              `${brewery &&
                Utils.getBreweryLocaleString(
                  brewery.title
                ).toLocaleLowerCase()}`
            }
          />
        </Helmet>
        <div className=" header-img-section ">
          <img src={bgImage} className="breweries-banner-details" alt="" />
          <div className="breweries-banner-details-overlay-content">
            <div className="desktop-display">
              <Header history={this.props.history} />
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

            <Container className="breweries-details-inner-text">
              <div className="breweries-details-main-title">
                <p className="breweries-details-subtitle">
                  {brewery && Utils.getBreweryLocaleString(brewery.prefecture)}
                </p>
                <h2 className="breweries-details-title">
                  {brewery && Utils.getBreweryLocaleString(brewery.title)}
                </h2>
                <p className="breweries-details-subtitles">
                  {brewery && Utils.getBreweryLocaleString(brewery.shortDesc)}
                </p>
              </div>
            </Container>
          </div>
        </div>

        <Container className="breweries-details-section">
          <div>
            <Row>
              <Col md={6}>
                <div className="breweries-details-text">
                  {brewery &&
                    Utils.getBreweryLocaleString(brewery.content).map(
                      (section, i) => {
                        return (
                          <div key={i}>
                            <h2
                              className={
                                i > 0
                                  ? "margin-top-15 breweries-details-subheading"
                                  : "breweries-details-subheading"
                              }
                            >
                              {" "}
                              {section.label}
                            </h2>
                            <p className="breweries-details-subtitle-text">
                              {section.content}
                            </p>
                          </div>
                        );
                      }
                    )}

                  <div className="breweries-width-100">
                    <Row>
                      {brewery &&
                        Utils.getBreweryLocaleString(brewery.moreInfo).map(
                          (section, i) => (
                            <Col
                              key={i}
                              md={
                                Utils.getBreweryLocaleString(brewery.moreInfo)
                                  .length > 1
                                  ? 6
                                  : 12
                              }
                            >
                              <div className="breweries-width-50">
                                <h2 className="breweries-details-subheading margin-top-15">
                                  {" "}
                                  {section.label}
                                </h2>
                                <p className="breweries-details-subtitle-text">
                                  {section.content}
                                </p>
                              </div>
                            </Col>
                          )
                        )}
                    </Row>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <div className="company-details">
                  <h2 className="company-title">Company details</h2>
                  <p className="company-name">
                    {brewery &&
                      Utils.getBreweryLocaleString(brewery.companyInfo).name}
                  </p>
                  <p className="company-year">
                    Year founded{" "}
                    <span className="year-color">
                      {brewery &&
                        Utils.getBreweryLocaleString(brewery.companyInfo)
                          .year_founded}
                    </span>
                  </p>
                  <p className="company-address">address:</p>
                  <p className="company-address-title">
                    {brewery &&
                      Utils.getBreweryLocaleString(brewery.companyInfo).address}
                  </p>
                  <p className="company-website">website</p>
                  <p className="website-link">
                    <a
                      href={
                        brewery &&
                        Utils.getBreweryLocaleString(brewery.companyInfo)
                          .website
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {brewery &&
                        brewery &&
                        Utils.getBreweryLocaleString(brewery.companyInfo)
                          .website}
                    </a>
                  </p>
                </div>
                <div className="breweries-details-image breweries-map_details">
                  <img
                    src={
                      brewery && Constant.image_path.breweryMaps + brewery.map
                    }
                    className="breweries-details-image-large"
                    alt="img"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        {brewery && brewery.gallery.length > 0 && (
          <div>
            <div className="parent-box">
              {/*
                  <div className="breweries-details-div">
                    <div className="displya-vertical-align">
                        <div className="dot-dot">
                            <img src={Constant.image_path.common + "dots.png"}
                            alt="dot-img"/>
                        </div>
                       </div>
                  </div>

                  */}
            </div>
            <Container className="breweries-gallery-section">
              <p className="visit-the-brewery">visit the brewery</p>
              <h2 className="gallery-heading">Gallery</h2>
              <div className="gallerry-slider">
                <Gallery items={brewery && brewery.gallery} />
              </div>
            </Container>
          </div>
        )}

        <div className="product-parent-box">
          <div
            className="product-details-div"
            onClick={this.onProductDots}
            id="product-details-div"
          >
            <div className="displya-vertical-align-product">
              <div className="dot-dot-product">
                <img
                  src={Constant.image_path.common + "dots.png"}
                  alt="dot-img"
                />
              </div>
            </div>
          </div>
        </div>
        <Container className="breweries-product-section">
          <div className="brewery-products-slider">
            {brewery && (
              <BreweryProducts
                history={this.props.history}
                list={brewery && brewery.products}
              />
            )}
          </div>
        </Container>

        <div className="video-section">
          <VideoSection url={brewery && brewery.video} />
        </div>
      </div>
    );
  }
}

// export default BreweriesDetails;
const mapStateToProps = state => {
  return {
    state,
    breweries: state.data.breweries
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    getBreweries: () => dispatch(getBreweries()),
    getCategories: () => dispatch(getCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreweriesDetails);
