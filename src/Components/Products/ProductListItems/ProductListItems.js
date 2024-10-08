import React, { Component } from "react";
//import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import Button from 'react-bootstrap/Button'
//import Modal from 'react-modal';
import { connect } from "react-redux";

import "./ProductListItems.css";
import "./modal.css";
// import * as Product from "../../../data/products.json";
import * as LocalizedStrings from "../../../locales/en/content.json";
import * as Constant from "../../../utils/constants.js";

class ProductListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productIdList: this.props.productIdList,
      productId: null
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      JSON.stringify(nextProps.productIdList) !==
      JSON.stringify(this.state.productIdList)
    ) {
      this.setState({ productIdList: nextProps.productIdList });
      return true;
    }
    if (nextState.show !== this.state.show) {
      return true;
    }
    return nextState.productId !== this.state.productId;
  }

  getProductById = id => {
    const { products } = this.props;
    if (products) {
      let product = products.filter(item => {
        if (Object.values(item)[0].id === id) return item;
      });
      return product[0];
    }
  };

  openProductDetail = product => {
    if (!product)
      return false;

    const name = LocalizedStrings.product[
      Object.values(product)[0].name
    ];

    const slug = name.replace(/ /g, "_");

    return this.props.history.push(`${Constant.routes_url.productDetails}/${slug}`);


  };

  render() {
    const { products } = this.props;
    const idList = [...this.state.productIdList];
    idList.reverse();

    return (
      <>
        <Row className="first-child-text-align-left">
          {products && idList.map((productId, i) => {
            const product = this.getProductById(productId);

            return (
              <Col
                style={{ cursor: "pointer" }}
                md={4}
                key={i}
                onClick={() => this.openProductDetail(product)}
              >
                <div className="products-list-items">
                  <img
                    src={
                      product &&
                      Constant.image_path.product +
                        productId +
                        "/" +
                        Object.values(product)[0]
                          .images[0]
                    }
                    className="product-img-size"
                    alt="img"
                  />
                  <p className="products-list-items-title">
                    {product &&
                      LocalizedStrings.product[
                        Object.values(product)[0].name
                      ]}
                  </p>
                  <p className="products-list-items-desc">
                    {product &&
                      LocalizedStrings.product[
                        Object.values(product)[0]
                          .description
                      ]}
                  </p>
                </div>
              </Col>
            )
          })}
        </Row>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
    products: state.data.products
  };
};

export default connect(mapStateToProps)(ProductListItems);
