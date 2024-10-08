import React, {Component} from "react";
import { Redirect } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { compose } from "redux";

import "../Products/ProductListItems/modal.css";
import "./ProductDetails.css";
import * as Constant from "../../utils/constants.js";
import * as LocalizedStrings from "../../locales/en/content.json";
import {Helmet} from "react-helmet";
import Header from "../Header/Header";
import MobileHeader from "../MobileHeader/MobileHeader";
import Container from "react-bootstrap/Container";
import Categories from "../Categories/Categories";
import * as Utils from "../../utils/utils";

//import ScrollIntoView from 'react-scroll-into-view'

let SAICHO_TEA = 'Saicho Tea';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenu: false,
      productKey: null,
      hoverImage: null,
      loading: false,
    };
    this.imageChange = this.imageChange.bind(this);
    this.timeoutId = null;
  }

  componentDidMount() {
    if (this.detailRef) {
      setTimeout(() => {
        this.detailRef.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100);
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.products !== prevProps.products) {
      setTimeout(() => {
        this.detailRef.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100);
    }
  }

  onContactUs = () => {
    this.props.history.push(Constant.routes_url.contactUs);
  };

  onCategoryChange = (selectedCategory) => {
    this.props.history.push(`${Constant.routes_url.products}?category=${selectedCategory}`)
  };

  prevProduct = () => {
    console.log("prev clicked")
  };

  nextProduct = () => {
    console.log("next clicked")
  };

  openMenu = () => {
    this.setState({ mobileMenu: true });
  };

  closeMenu = () => {
    this.setState({ mobileMenu: false });
  };

  imageChange(imagePath) {
    if (!this.state.loading) {
      this.setState({
        hoverImage: imagePath,
        loading: true
      });
      this.timeoutId = setTimeout(() => {
        this.setState({ loading: false, hoverImage: null });
        this.timeoutId = null;
      }, 1000);
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  getProductCategories = (product) => {
    const { categories } = this.props;

    if (categories) {
      const categoryName = [];
      categories.filter(category => {
        if (category.products.includes(product.id)) {
          categoryName.push(LocalizedStrings.category[category.name]);
        }
      });
      return categoryName.join(", ");
    }

    return "";
  };

  getProduct = (key) => {
    const { products } = this.props;

    if (products) {
      return products.map(p => Object.values(p)[0]).find(p => {
        return p.name === key;
      });
    }

    return null;
  };

  render() {
    const {
      match: {
        params: { id }
      },
      t,
    } = this.props;
    const pKey = Object.entries(LocalizedStrings.product).find(
      ([key, value]) => value === id.replace(/_/g, " ")
    );
    if (!pKey)
      return <Redirect to={Constant.routes_url.products} />;

    let bgImage = Utils.isMobile()
        ? process.env.PUBLIC_URL +
        "/images/mobile-bg-img/background-product-image.png"
        : process.env.PUBLIC_URL + "/images/product/product-background-image.jpg";

    const product = this.getProduct(pKey[0]);
    const { hoverImage } = this.state;

    return (
      <div id="products-container" className="products-container">
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Craft Sake Imports Direct From Japan</title>
          <meta
            name="description"
            content={product ?
              LocalizedStrings.product[product.description] :
              "Experts in importing craft sake from Japan's finest medium/small breweries into Canada."
            }
          />
          <meta
            name="keywords"
            content={`${product ? `${LocalizedStrings.product[product.name]}, ` : ''}Sake Toronto, ` +
              'Japanese Sake Canada, Japanese Sake, Craft Sake, Nihonshu, Japan Imports, ' +
              'Canada Sake Import, Ontario Sake, Rice Wine, Japanese wine, Importing Sake, Toronto Sake, Sake Importer, Rice Wine, Ontario Sake'
            }
          />
          <link rel="canonical" href="https://nipponsake.ca/products" />
        </Helmet>
        <div className=" header-img-section ">
          <img src={bgImage} className="product-banner" alt="" />
          <div className="product-banner-overlay-content">
            <div className="desktop-display">
              <Header
                pageId={Constant.page.products}
                history={this.props.history}
              />
            </div>

            <div className={this.state.mobileMenu ? "mobile-display-block" : "mobile-display-none"}>
              <MobileHeader
                pageId={Constant.page.products}
                closeMenu={this.closeMenu}
                history={this.props.history}
              />
            </div>

            <div className="icon-bar-display clearfix" onClick={this.openMenu}>
              <div className="icon-bar-mobile">
                <i className="fa fa-bars"/>
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
        <Container className="products-category-list" ref={ref => this.detailRef = ref}>
          <Row>
            <Col md={3} xs={12}>
              <div className="category-list category-mobile-none">
                <Categories
                  selected="default"
                  onCategoryChange={this.onCategoryChange}
                />
              </div>
              <div className="category-list margin-mobile-ctaegory category-mobile-block">
                <Categories
                  selected="default"
                  onCategoryChange={this.onCategoryChange}
                />
              </div>
            </Col>
            <Col md={9} xs={12}>
              <div className="products-list-category">
                {product && (
                  <>
                    <div className="main-product-details-box">
                      <Row>
                        <Col md={3}>
                          <div className="products-details-image">
                            <img
                                src={hoverImage ?
                                  this.state.hoverImage
                                  : `${Constant.image_path.product}${product.id}/${product.comboImage}`
                                }
                                className="products-image-large"
                                alt="img"
                            />
                          </div>
                        </Col>
                        <Col md={2}>
                          <div className="select-details-more-img">
                            {product.images.map((image, i) => (
                              <img
                                key={i}
                                src={`${Constant.image_path.product}${product.id}/${image}`}
                                className="thumbs-img-size margin-bottom-size"
                                alt="thumb-img-size"
                                onMouseOver={() => this.imageChange(`${Constant.image_path.product}${product.id}/${image}`)}
                              />
                            ))}
                          </div>
                        </Col>
                        
                        <Col md={7}>
                          <div className="products-details-name">
                            <p className="deatils-subtitle">
                              {LocalizedStrings.product[product.brewerName]}
                            </p>
                            <h2 className="details-title">
                              {LocalizedStrings.product[product.name]}
                            </h2>
                            <ul className="details-product">
                              <li>
                                <span className="details-name">TYPE:</span>
                                <span className="details-value">
                                  {LocalizedStrings.product[product.type]}
                                </span>
                              </li>
                              <li>
                                <span className="details-name">ALC(VOL.):</span>
                                <span className="details-value">
                                  {LocalizedStrings.product[product.alc]}
                                </span>
                              </li>

                                  
                                      {
                                      LocalizedStrings.product[product.brewerName] !== SAICHO_TEA ?
                                              <li>
                                                <span className="details-name">SMV:</span>
                                                <span className="details-value">
                                                  {LocalizedStrings.product[product.smv]}
                                                </span>
                                              </li>
                                          :''  
                                        }
                                        {
                                        LocalizedStrings.product[product.brewerName] !== SAICHO_TEA ?
                                            <li>
                                              <span className="details-name">ACIDITY:</span>
                                              <span className="details-value">
                                                {LocalizedStrings.product[product.acidity]}
                                              </span>
                                            </li>
                                            :''  
                                        }
                                        {
                                        LocalizedStrings.product[product.brewerName] !== SAICHO_TEA ?
                                            <li>
                                              <span className="details-name">RICE:</span>
                                              <span className="details-value">
                                                {LocalizedStrings.product[product.riceBrand]}
                                              </span>
                                            </li>
                                           :''  
                                        }    
                                        {
                                        LocalizedStrings.product[product.brewerName] !== SAICHO_TEA ?
                                            <li>
                                              <span className="details-name">RICE MILLING:</span>
                                              <span className="details-value">
                                                {LocalizedStrings.product[product.riceMilling]}
                                              </span>
                                            </li>
                                            :''  
                                        }    
                                        {
                                        LocalizedStrings.product[product.brewerName] !== SAICHO_TEA ? 
                                            <li>
                                              <span className="details-name">CHAMPION SAKE:</span>
                                              <span className="details-value">
                                                {LocalizedStrings.product[product.championSake]}
                                              </span>
                                            </li>
                                          :''  
                                        } 

                            </ul>
                            <div className="contactus-btn-div">
                              <Button
                                  className="contactus-btn"
                                  onClick={this.onContactUs}
                              >
                                contact us
                              </Button>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="description-details">
                      <Row>
                        <Col md={5}>
                          <div className="description-text">
                            <p className="description-heading">Description</p>
                            <p className="details-dsec-subtitle">
                              {LocalizedStrings.product[product.description]}
                            </p>
                          </div>
                        </Col>
                        <Col md={7}>
                          <div className="desc-catogery-main-section">
                            <ul className="desc-product">
                              <li>
                                <span className="desc-name">SKU: </span>
                                <span className="desc-value">
                                  {LocalizedStrings.product[product.sku]}
                                </span>
                              </li>
                              <li>
                                <span className="desc-name">Categories: </span>
                                <span className="desc-value">
                                  {this.getProductCategories(product)}
                                </span>
                              </li>
                              <li>
                                <span className="desc-name">Tags: </span>
                                <span className="desc-value">
                                  {LocalizedStrings.product[product.tags]}
                                </span>
                              </li>
                            </ul>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </>
                )}
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
    categories: state.data.categories,
    products: state.data.products,
  };
};

export default compose(
  connect(mapStateToProps),
  withTranslation()
)(ProductDetails);
