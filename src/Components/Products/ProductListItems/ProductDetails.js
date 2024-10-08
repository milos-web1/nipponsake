import React, { Component } from "react";
//import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./modal.css";

class ProductListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div className="modalwidth">
          <div className="modals-main">
            <div className="close-icons clearfix">
              <div className="close-icons-box">
                <div className="close-btns">
                  <div className="close-modal-icons">
                    <a
                      //  href="#"
                      className="close-display-block"
                      onClick={this.hideModal}
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL + "/images/products/close.png"
                        }
                        className="right-arrow"
                        alt="right-arrow"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="left-right-icons">
                <a
                  //   href="#"
                  className=" close-btn-arrrow-l"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons8-left-24.png"}
                    className="right-arrow"
                    alt="right-arrow"
                  />
                </a>
                <a
                  //  href="#"
                  className="close-btn-arrrow-r"
                >
                  <img
                    src={process.env.PUBLIC_URL + "/images/icons8-right-28.png"}
                    className="right-arrow"
                    alt="right-arrow"
                  />
                </a>
              </div>
            </div>
            <div className="main-product-details-box">
              <Row>
                <Col md={5}>
                  <div className="products-details-image">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/products/product-details.png"
                      }
                      className="details-img-size-large"
                      alt="img"
                    />
                  </div>
                </Col>
                <Col md={7}>
                  <div className="products-details-name">
                    <p className="deatils-subtitle">DEWAZAKURA</p>
                    <h2 className="details-title">Ichiro</h2>
                    <ul className="details-product">
                      <li>
                        <span className="details-name">TYPE:</span>
                        <span className="details-value">Junmai Daiginjo </span>
                      </li>
                      <li>
                        <span className="details-name">ALC(VOL.):</span>
                        <span className="details-value"> 15.0% </span>
                      </li>
                      <li>
                        <span className="details-name">SMV:</span>
                        <span className="details-value">+4.0 </span>
                      </li>
                      <li>
                        <span className="details-name">ACIDITY:</span>
                        <span className="details-value">1.3 </span>
                      </li>
                      <li>
                        <span className="details-name">RICE:</span>
                        <span className="details-value">Yamada Nishiki </span>
                      </li>
                      <li>
                        <span className="details-name">RICE MILLING:</span>
                        <span className="details-value">45%</span>
                      </li>
                      <li>
                        <span className="details-name">CHAMPION SAKE:</span>
                        <span className="details-value">
                          IWC (International Wine Challenge) 2008{" "}
                        </span>
                      </li>
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

              <div className="select-details-more-img">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/products/sub-details-img.png"
                  }
                  className="product-img-size"
                  alt="product-img"
                />
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "/images/products/sub-details-img-deselect.png"
                  }
                  className="product-img-size"
                  alt="product-img"
                />
              </div>
            </div>

            <div className="description-details">
              <Row>
                <Col md={6}>
                  <div className="description-text">
                    <p className="description-heading">Description</p>
                    <p className="details-dsec-subtitle">
                      Ichiro won the best prize “Champion Sake” at International
                      Wine Challenge (IWC) 2008. The finest brewing rice, called
                      “YAMADA NISHIKI” is polished until it remains 45% of its
                      original size, which makes this sake light and flavourful
                      with UMAMI. You can taste its excellent delicate flavour
                      and a mild taste of rice. Best enjoyed when it’s served at
                      cold temperature. CHAMPION SAKE: IWC (the International
                      Wine Challenge) 2008.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="desc-catogery">
                    <ul className="desc-product">
                      <li>
                        <span className="desc-name">SKU:</span>
                        <span className="desc-value">
                          +778795 - 720ml x 6 btls / (AB) +819015 - 720ml x 6
                          btls
                        </span>
                      </li>
                      <li>
                        <span className="desc-name">Categories:</span>
                        <span className="desc-value"> Dewazakura, SAKE </span>
                      </li>
                      <li>
                        <span className="desc-name">Tags:</span>
                        <span className="desc-value">
                          {" "}
                          Champion sake, Fruity, Junmai Daiginjo, Mild, Slightly
                          Sweet, Smooth, Yamada Nishiki{" "}
                        </span>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductListItems;
