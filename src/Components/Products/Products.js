import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";
import { compose } from "redux";
import { Helmet } from "react-helmet";
import "./Products.css";
import "../Home/Home.css";
import "../../style/style.css";

import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
import Categories from "../Categories/Categories";
import ProductListItems from "./ProductListItems/ProductListItems";
import * as Constant from "../../utils/constants.js";
import * as LocalizedStrings from "../../locales/en/content.json";
import * as Utils from "../../utils/utils.js";

import { withTranslation } from "react-i18next";

class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenu: false,
      selectedCategory: 'default',
      selectedBrewery: 'default'
    };
  }

  componentDidMount() {
    const {
      location: {
        search
      },
      history: {
        push
      },
      categories,
    } = this.props;

    const selectedCategory = new URLSearchParams(search).get("category");

    if (selectedCategory) {
      push('/products');

      if (categories && categories[selectedCategory]) {
        return this.setState({ selectedCategory });
      }
    }
    this.setState({
      selectedCategory: 'default',
    });
  }

  openMenu = () => {
    this.setState({ mobileMenu: true });
  };

  closeMenu = () => {
    this.setState({ mobileMenu: false });
  };

  onCategoryChange = (selectedCategory) => {
    this.setState({ selectedCategory });
  };

  onBreweryChange = event => {
    this.setState({
      selectedBrewery: event.target.value
    });
    // if (event.target.value === "default") {
    //   this.setState({
    //     productIdList: selectedBrewery[0].products,
    //     selectedBrewery: null,
    //   });
    // } else {
    //   var selectedBrewery = this.props.breweries.filter(brewery => {
    //     if (brewery.id === event.target.value) return brewery;
    //   });
    //   this.setState({
    //     productIdList: selectedBrewery[0].products,
    //     selectedBrewery: selectedBrewery
    //   });
    // }
  };

  render() {
    const { t, breweries, categories, history } = this.props;
    const { mobileMenu, selectedBrewery, selectedCategory } = this.state;
    let bgImage = Utils.isMobile()
      ? process.env.PUBLIC_URL +
        "/images/mobile-bg-img/background-product-image.png"
      : process.env.PUBLIC_URL + "/images/product/product-background-image.jpg";
    let productIdList = [];
    if (categories) {
      productIdList = categories[0].products;

      if (selectedBrewery !== 'default') {
        const brewery = breweries.find(brewery => brewery.id === selectedBrewery);
        productIdList = brewery.products
      }

      if (selectedCategory !== 'default') {
        productIdList = productIdList.filter(p => categories[selectedCategory].products.includes(p))
      }
    }

    return (
      <div id="products-container" className="products-container">
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
            href="https://nipponsake.ca/products"
          />
        </Helmet>
        <div className=" header-img-section ">
          <img src={bgImage} className="product-banner" alt="" />
          <div className="product-banner-overlay-content">
            <div className="desktop-display">
              <Header
                pageId={Constant.page.products}
                history={history}
              />
            </div>

            <div
              className={ mobileMenu ? "mobile-display-block" : "mobile-display-none"}
            >
              <MobileHeader
                pageId={Constant.page.products}
                closeMenu={this.closeMenu}
                history={history}
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
                  alt="logo"
                />
              </div>
            </div>

            <Container className="products-inner-text">
              <div className="products-main-title">
                <p className="products-subtitle">
                  {t("products.ourSakeSelection")}
                </p>

                <h1 className="products-title">{t("products.products")} </h1>
                <p className="products-subtitles">{t("products.tagline")}</p>
              </div>
            </Container>
          </div>
        </div>

        <Container className="products-select-section">
          <div className="select-brewery-width clearfix display-select-option-desktop">
            <select className="select-brewery" value={selectedBrewery} onChange={this.onBreweryChange}>
              <option key={1001} value="default">
                {t("products.selectbrewery")}
              </option>

              {breweries &&
                breweries.map((brewery, index) => {
                  return (
                    <option key={index} value={brewery.id}>
                      {LocalizedStrings.brewery[brewery.title]}
                    </option>
                  );
                })}
            </select>
          </div>
        </Container>

        <Container className="products-category-list">
          <Row>
            <Col md={3} xs={12}>
              <div className="category-list category-mobile-none">
                <Categories
                  selected={selectedCategory}
                  onCategoryChange={this.onCategoryChange}
                />
              </div>
              <div className="category-list margin-mobile-ctaegory category-mobile-block">
                <Categories
                  selected={selectedCategory}
                  onCategoryChange={this.onCategoryChange}
                />
              </div>
            </Col>
            <Col xs={12} className="display-select-option-mobile">
              <div className="select-brewery-width clearfix">
                <select
                  className="select-brewery margin-select-list"
                  onChange={this.onBreweryChange}
                >
                  <option key={1001} value="default">
                    {LocalizedStrings.brewery.selectBreweryLabel}
                  </option>

                  {breweries &&
                    breweries.map((brewery, index) => {
                      return (
                        <option key={index} value={brewery.id}>
                          {LocalizedStrings.brewery[brewery.title]}
                        </option>
                      );
                    })}
                </select>
              </div>
            </Col>

            <Col md={9} xs={12}>
              <div id="details" className="products-list-category">
                <ProductListItems
                  history={history}
                  productIdList={productIdList}
                />
              </div>
            </Col>
          </Row>
        </Container>

        <div className="product-space"/>
        <div className="border-bottom"/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
    products: state.data.products,
    categories: state.data.categories,
    breweries: state.data.breweries
  };
};

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(Products);
