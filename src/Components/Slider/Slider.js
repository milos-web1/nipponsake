import React, { Component } from "react";
import ReactSlider from "react-slick";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { connect } from "react-redux";

import "./Slider.css";
import "../../style/style.css";
import * as Constant from "../../utils/constants.js";
import * as Utils from "../../utils/utils.js";

// const breweries = Utils.getBreweries();

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSlide: 0,
      maxSlide: 0,
      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        autoPlay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        afterChange: current => this.setState({ activeSlide: current })
      }
    };
  }

  componentDidMount() {
    const { breweries } = this.props;
    if (breweries) {
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
      var totalBreweries = breweries.length;
      //console.log('Jays Breweries : ', breweries);

      var noOfSlide = 1;
      if (totalBreweries > this.state.settings.slidesToShow) {
        totalBreweries = totalBreweries - this.state.settings.slidesToShow;
        noOfSlide = Math.ceil(
          totalBreweries / this.state.settings.slidesToScroll
        );
      }
      this.setState({ maxSlide: noOfSlide });
    }
  }

  componentDidUpdate(prev) {
    const { breweries } = this.props;
    if (breweries !== prev.breweries) {
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
      var totalBreweries = breweries.length;
      //console.log('Jays Breweries : ', breweries);

      var noOfSlide = 1;
      if (totalBreweries > this.state.settings.slidesToShow) {
        totalBreweries = totalBreweries - this.state.settings.slidesToShow;
        noOfSlide = Math.ceil(
          totalBreweries / this.state.settings.slidesToScroll
        );
      }
      this.setState({ maxSlide: noOfSlide });
    }
  }

  next = () => {
    this.slider.slickNext();
  };
  previous = () => {
    this.slider.slickPrev();
  };

  showBreweryDetails = (id, title, e) => {
    let data = { id: id, pageid: "home" };
    sessionStorage.setItem(Constant.BREWERY_INFO, JSON.stringify(data));
    var url = title.replace(/ /g, "_").toLocaleLowerCase();
    this.props.history &&
      this.props.history.push(Constant.routes_url.breweryDetails + "/" + url);
  };

  getBrewery(brewery, index) {

    return (
      <div key={index}>
        <Row key={index} className="slider-row-margin">
          {
            <Col
              className="slider-padding-none"
              onClick={this.showBreweryDetails.bind(
                this,
                brewery.id,
                Utils.getBreweryLocaleString(brewery.title)
              )}
              style={{ cursor: "pointer" }}
            >
              <div className="brewery-slider-main-sections">
                <div className="slider-box custome-width-slider-left">
                  <img
                    src={Constant.image_path.brewery + brewery.image}
                    className="slider-img "
                    alt="slider"
                  />

                  <div className="brewery-sub-title">
                    <h3 className="inner-slider-title">
                      {" "}
                      {Utils.getBreweryLocaleString(brewery.title)}
                    </h3>
                    <p className="inner-slider-subtitle">
                      {" "}
                      {Utils.getBreweryLocaleString(brewery.prefecture)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-right"></div>
            </Col>
          }
        </Row>
      </div>
    );
  }

  render() {
    //style={{transform:this.state.activeSlide === this.state.maxSlide?'transform: rotate(180deg)':''}}
    const { breweries } = this.props;
    return (
      <div className="carouselPrevNext">
        <div className="prev-next-btn">
          <button className="button" onClick={this.previous}>
            <img
              src={
                this.state.activeSlide !== 0
                  ? Constant.image_path.common + "arrow-left-red.png"
                  : Constant.image_path.common + "arrow-left-black.png"
              }
              alt="left"
              className="right-arrow-size"
            />
          </button>
          <button className="button" onClick={this.next}>
            <img
              src={
                this.state.activeSlide !== this.state.maxSlide
                  ? Constant.image_path.common + "arrow-right-red.png"
                  : Constant.image_path.common + "arrow-right-black.png"
              }
              alt="right"
              className="right-arrow-size"
            />
          </button>
        </div>
        <ReactSlider ref={c => (this.slider = c)} {...this.state.settings}>
          {breweries &&
            breweries.map((brewery, i) => this.getBrewery(brewery, i))}
        </ReactSlider>
      </div>
    );
  }
}
// export default Slider;
const mapStateToProps = state => {
  return {
    state,
    breweries: state.data.breweries
  };
};

export default connect(mapStateToProps)(Slider);
