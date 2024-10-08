import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactSlider from "react-slick";
import { connect } from "react-redux";
import "./ProductList.css";
import "./ProductSlider.css";
import ProductDetails from "../ProductDetails/ProductDetails";

// import * as ProductData from "../../data/products.json";
import * as LocalizedStrings from "../../locales/en/content.json";
import * as Constant from "../../utils/constants.js";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // productIds: Object.keys(ProductData.products),
      productIds: [],
      productId: null,
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
    const { products } = this.props;
    const productIdsData = [];
    products &&
      products.map(itm => {
        productIdsData.push(Object.keys(itm)[0]);
      });
    this.setState({ productIds: productIdsData });

    var x = window.matchMedia("(max-width: 767px)");
    var y = window.matchMedia("(max-width: 719px)");
    var z = window.matchMedia("(max-width: 479px)");
    var w = window.matchMedia("(max-width: 419px)");
    if (x.matches || y.matches || z.matches || w.matches) {
      let settings = this.state.settings;
      settings.slidesToShow = 1;
      settings.slidesToScroll = 1;
      this.setState({ settings: settings });
    }
    var totalProducts = this.state.productIds.length;
    //console.log("number of proudcts loaded: ", totalProducts);
    var noOfSlide = 1;
    if (totalProducts > this.state.settings.slidesToShow) {
      totalProducts = totalProducts - this.state.settings.slidesToShow;
      noOfSlide = Math.ceil(totalProducts / this.state.settings.slidesToScroll);
    }
    this.setState({ maxSlide: noOfSlide });
  }

  componentDidUpdate(prev) {
    const { products } = this.props;
    if (products !== prev.products) {
      const ProductData = { products: products };
      const productIdsData = [];
      ProductData.products.map(itm => {
        productIdsData.push(Object.keys(itm)[0]);
      });
      this.setState({ productIds: productIdsData });
    }
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

    const name = LocalizedStrings.product[
      Object.values(product)[0].name
    ];

    const slug = name.replace(/ /g, "_");
    return this.props.history.push(`${Constant.routes_url.productDetails}/${slug}`);
  };

  render() {
    let products = [];
    if (this.props.products) {
      products = [...this.props.products];
      products.reverse();
    }
    const idList = [...this.state.productIds];
    idList.reverse();

    return (
      <div className="carousel-PrevNext-product-list">
        <div className="prev-next-btn">
          <button className="button" onClick={this.previous}>
            <img
              src={
                this.state.activeSlide != 0
                  ? Constant.image_path.common + "arrow-left-red.png"
                  : Constant.image_path.common + "arrow-left-black.png"
              }
              alt="name"
            />
          </button>
          <button className="button" onClick={this.next}>
            <img
              src={
                this.state.activeSlide !== this.state.maxSlide
                  ? Constant.image_path.common + "arrow-right-red.png"
                  : Constant.image_path.common + "arrow-right-black.png"
              }
              alt="name"
            />
          </button>
        </div>
        <ReactSlider ref={c => (this.slider = c)} {...this.state.settings}>
          {idList.map((productId, i) => (
            <Row key={i}>
              <Col
                style={{ cursor: "pointer" }}
                key={i}
                className="nopadding"
                onClick={() => this.openProductDetail(products[i])}
              >
                <div className="product-item">
                  <img
                    src={
                      Constant.image_path.product +
                      productId +
                      "/" +
                      Object.values(products[i])[0].images[0]
                    }
                    className="product-img-size"
                    alt="product-list"
                  />

                  <div className="product-items-text">
                    <p className="product-title">
                      {
                        LocalizedStrings.product[
                          Object.values(products[i])[0].name
                        ]
                      }
                    </p>
                    <p className="product-desc">
                      {
                        LocalizedStrings.product[
                          Object.values(products[i])[0].description
                        ]
                      }
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </ReactSlider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state,
    products: state.data.products
  };
};

export default connect(mapStateToProps)(ProductList);
