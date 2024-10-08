import React, { Component } from "react";
//import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactSlider from "react-slick";
import { connect } from "react-redux";

import "./BreweryProducts.css";
// import * as ProductData from "../../data/products.json";
import * as LocalizedStrings from "../../locales/en/content.json";
import * as Constant from "../../utils/constants.js";
import * as Utils from "../../utils/utils.js";

class BreweryProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list,
      id: null,
      activeSlide: 0,
      maxSlide: 0,
      settings: {
        dots: false,
        infinite: false,
        speed: 500,
        autoPlay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        afterChange: current => this.setState({ activeSlide: current })
      }
    };
  }

  componentDidMount() {
    if (Utils.isMobile()) {
      let settings = this.state.settings;
      settings.slidesToShow = 1;
      settings.slidesToScroll = 1;
      this.setState({ settings: settings });
    }
    var totalProducts = this.state.list.length;
    var noOfSlide = 0;
    if (totalProducts > this.state.settings.slidesToShow) {
      totalProducts = totalProducts - this.state.settings.slidesToShow;
      noOfSlide = Math.ceil(totalProducts / this.state.settings.slidesToScroll);
    }
    this.setState({ maxSlide: noOfSlide });
  }

  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };

  openProductDetail = product => {
    if (!product)
      return false;

    const name = LocalizedStrings.product[Object.values(product)[0].name];

    const slug = name.replace(/ /g, "_");
    return this.props.history.push(`${Constant.routes_url.productDetails}/${slug}`);
  };

  getProductById = id => {
    const { products } = this.props;
    if (products) {
      let product = products.filter(item => {
        if (Object.values(item)[0].id === id) return item;
      });
      return product[0];
    }
  };

  render() {
    const { products } = this.props;
    return (
      <div>
        <div className="breweriy-box clearfix">
          <h2 className="breweries-product">Brewery products</h2>
          <div className="arrow-right-breweriy">
            <a onClick={this.previous} className="breweriy-arrow-btn-left">
              <img
                src={
                  this.state.activeSlide != 0
                    ? Constant.image_path.common + "arrow-left-red.png"
                    : Constant.image_path.common + "arrow-left-black.png"
                }
                alt="left"
              />
            </a>
            <a onClick={this.next} className="breweriy-arrow-btn-right">
              <img
                src={
                  this.state.activeSlide !== this.state.maxSlide
                    ? Constant.image_path.common + "arrow-right-red.png"
                    : Constant.image_path.common + "arrow-right-black.png"
                }
                alt="left"
              />
            </a>
          </div>
        </div>
        <ReactSlider ref={c => (this.slider = c)} {...this.state.settings}>
          {products &&
            this.state.list.map((id, i) => {
              const product = this.getProductById(id);

              return (
                <Row key={i}>
                  <Col
                    style={{ cursor: "pointer" }}
                    key={i}
                    onClick={() => this.openProductDetail(product)}
                  >
                    <div className="brewery-product-box">
                      <img
                        src={`${Constant.image_path.product}/${id}/${Object.values(product)[0].images[0]}`}
                        className="product-img-size"
                        alt="product-brewery"
                      />
                      <p className="brewery-product-title">
                        {
                          LocalizedStrings.product[Object.values(product)[0].name]
                        }
                      </p>
                      <p className="brewery-product-desc">
                        {
                          LocalizedStrings.product[Object.values(product)[0].description]
                        }
                      </p>
                    </div>
                  </Col>
                </Row>
              );
            })}
        </ReactSlider>
      </div>
    );
  }
}

// export default BreweryProducts;
const mapStateToProps = state => {
  return {
    state,
    products: state.data.products
  };
};

export default connect(mapStateToProps)(BreweryProducts);
